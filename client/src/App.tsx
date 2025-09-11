import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useFacebookPixel, trackViewContent, trackEvent } from "@/hooks/useFacebookPixel";
import { useEffect, useRef } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// Component to track route changes for SPA navigation
function RouteTracker() {
  const [location] = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip first render to avoid duplicate PageView (useFacebookPixel handles initial PageView)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    // Track page view on subsequent route changes only
    trackEvent('PageView');
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <RouteTracker />
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  // Get pixel ID from environment variables configured in Replit Secrets
  const pixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
  
  if (!pixelId) {
    console.warn('VITE_FACEBOOK_PIXEL_ID not configured. Facebook Pixel tracking disabled. Set this environment variable in Replit Secrets for production.');
  }
  
  // Always call hooks - never conditionally (but hook will handle empty/null pixelId)
  useFacebookPixel(pixelId);

  useEffect(() => {
    if (pixelId) {
      // Only track if pixel is configured
      trackViewContent('eBook Receitinhas do Bebê', 12.90);
    }
  }, [pixelId]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
