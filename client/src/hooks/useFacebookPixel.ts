import { useEffect } from 'react';

// Declare global fbq function for TypeScript
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export const useFacebookPixel = (pixelId: string) => {
  useEffect(() => {
    if (!pixelId) {
      console.warn('Facebook Pixel ID not provided. Tracking disabled.');
      return;
    }

    // Prevent duplicate initialization
    if ((window as any).__pixelInitialized) {
      return;
    }

    // Only load if not already present
    if (!window.fbq) {
      // Load Facebook Pixel script
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      script.async = true;
      document.head.appendChild(script);

      // Initialize fbq function
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

      script.onload = () => {
        // Initialize with pixel ID after script loads
        window.fbq('init', pixelId);
        
        // Track initial page view
        window.fbq('track', 'PageView');
        
        // Mark as initialized to prevent duplicates
        (window as any).__pixelInitialized = true;
        (window as any).__pixelReady = true;
        
        console.log('Facebook Pixel initialized with ID:', pixelId);
      };
    } else if (!((window as any).__pixelInitialized)) {
      // If script loaded but not initialized with this pixel
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
      (window as any).__pixelInitialized = true;
      (window as any).__pixelReady = true;
    }
  }, [pixelId]);
};

// Helper functions for tracking specific events
export const trackEvent = (event: string, parameters?: Record<string, any>) => {
  if (window.fbq && (window as any).__pixelReady) {
    window.fbq('track', event, parameters);
    console.log(`Facebook Pixel: ${event}`, parameters);
  } else {
    // Queue the event for later if pixel isn't ready
    setTimeout(() => {
      if (window.fbq && (window as any).__pixelReady) {
        window.fbq('track', event, parameters);
        console.log(`Facebook Pixel: ${event} (delayed)`, parameters);
      } else {
        console.warn(`Facebook Pixel not ready, skipping event: ${event}`);
      }
    }, 1000);
  }
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