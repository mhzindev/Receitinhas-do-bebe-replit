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
      console.warn('Facebook Pixel ID not found');
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
        
        console.log('Facebook Pixel initialized with ID:', pixelId);
      };
    } else {
      // If already loaded, just init
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }
  }, [pixelId]);
};

// Helper functions for tracking specific events
export const trackEvent = (event: string, parameters?: Record<string, any>) => {
  if (window.fbq) {
    window.fbq('track', event, parameters);
    console.log(`Facebook Pixel: ${event}`, parameters);
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