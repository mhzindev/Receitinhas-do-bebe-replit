import { useEffect } from 'react';

// Declare global fbq function for TypeScript
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// Use window to persist across HMR in development
const getPixelState = () => {
  if (!(window as any).__fbPixelState) {
    (window as any).__fbPixelState = {
      initialized: false,
      currentId: null
    };
  }
  return (window as any).__fbPixelState;
};

export const useFacebookPixel = (pixelId: string) => {
  useEffect(() => {
    if (!pixelId) {
      console.warn('Facebook Pixel ID not provided. Tracking disabled.');
      return;
    }

    const pixelState = getPixelState();
    
    // Prevent duplicate initialization for the same pixel ID
    if (pixelState.initialized && pixelState.currentId === pixelId) {
      return;
    }

    // If different pixel ID, warn about it
    if (pixelState.initialized && pixelState.currentId !== pixelId) {
      if (import.meta.env.DEV) {
        console.warn(`Facebook Pixel already initialized with different ID: ${pixelState.currentId}. Skipping new ID: ${pixelId}`);
      }
      return;
    }

    // Initialize fbq function if not already present
    if (!window.fbq) {
      window.fbq = function() {
        if (window.fbq.callMethod) {
          window.fbq.callMethod.apply(window.fbq, arguments);
        } else {
          window.fbq.queue = window.fbq.queue || [];
          window.fbq.queue.push(arguments);
        }
      };
      
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];
    }

    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="fbevents.js"]');
    
    const initializePixel = () => {
      if (!pixelState.initialized) {
        window.fbq('init', pixelId);
        window.fbq('track', 'PageView');
        
        // Mark as initialized globally
        pixelState.initialized = true;
        pixelState.currentId = pixelId;
        (window as any).__pixelReady = true;
        
        if (import.meta.env.DEV) {
          console.log('Facebook Pixel initialized with ID:', pixelId);
        }
      }
    };
    
    if (!existingScript) {
      // Load Facebook Pixel script
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      script.async = true;
      
      script.onload = initializePixel;
      script.onerror = () => {
        console.error('Failed to load Facebook Pixel script');
      };
      
      document.head.appendChild(script);
    } else {
      // Script already loaded, just initialize this pixel
      initializePixel();
    }
  }, [pixelId]);
};

// Helper functions for tracking specific events
export const trackEvent = (event: string, parameters?: Record<string, any>) => {
  // Try multiple times with shorter intervals for better responsiveness
  const attemptTracking = (attempt: number = 1, maxAttempts: number = 5) => {
    if (window.fbq) {
      window.fbq('track', event, parameters);
      if (import.meta.env.DEV) {
        console.log(`Facebook Pixel: ${event}`, parameters);
      }
      return;
    }
    
    if (attempt < maxAttempts) {
      setTimeout(() => {
        attemptTracking(attempt + 1, maxAttempts);
      }, 200 * attempt); // Progressive delay: 200ms, 400ms, 600ms, etc.
    } else {
      if (import.meta.env.DEV) {
        console.warn(`Facebook Pixel not ready after ${maxAttempts} attempts, skipping event: ${event}`);
      }
    }
  };
  
  attemptTracking();
};

export const trackViewContent = (contentName: string, value?: number) => {
  trackEvent('ViewContent', {
    content_name: contentName,
    content_category: 'Digital Product',
    value: value || 12.90,
    currency: 'BRL'
  });
};

export const trackAddToCart = (value?: number) => {
  trackEvent('AddToCart', {
    content_name: 'eBook Receitinhas do Bebê',
    value: value || 12.90,
    currency: 'BRL',
    content_type: 'product'
  });
};

export const trackInitiateCheckout = (value?: number) => {
  trackEvent('InitiateCheckout', {
    value: value || 12.90,
    currency: 'BRL',
    num_items: 1,
    content_name: 'eBook Receitinhas do Bebê'
  });
};

export const trackLead = (source?: string) => {
  trackEvent('Lead', {
    content_name: 'eBook Receitinhas do Bebê',
    source: source || 'landing_page'
  });
};

export const trackPurchase = (value?: number, orderId?: string) => {
  trackEvent('Purchase', {
    value: value || 12.90,
    currency: 'BRL',
    content_name: 'eBook Receitinhas do Bebê',
    order_id: orderId
  });
};