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
  // Get pixel ID from environment variables or use fallback for production domain only
  const isProductionDomain = typeof window !== 'undefined' && 
    window.location.hostname === 'receitinhas-do-bebe.netlify.app';
  
  const pixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID || 
    (isProductionDomain ? '776748938411758' : '');
  
  if (!import.meta.env.VITE_FACEBOOK_PIXEL_ID) {
    if (import.meta.env.DEV) {
      console.warn('VITE_FACEBOOK_PIXEL_ID not configured in development.');
    } else if (isProductionDomain) {
      console.warn('VITE_FACEBOOK_PIXEL_ID not configured. Using fallback for production domain.');
    }
  }
  
  // Always call hooks - never conditionally (but hook will handle empty/null pixelId)
  useFacebookPixel(pixelId);

  // Note: ViewContent tracking is now handled automatically by useFacebookPixel hook
  // This prevents duplicate ViewContent events

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
