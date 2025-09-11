import { useEffect } from 'react';

// Declare global fbq function for TypeScript
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// Enhanced pixel state management with event deduplication
const getPixelState = () => {
  if (!(window as any).__fbPixelState) {
    (window as any).__fbPixelState = {
      initialized: false,
      currentId: null,
      eventHistory: new Map() // Track recent events to prevent duplicates
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
        
        // Auto-track ViewContent on initialization (direct call to avoid circular dependency)
        setTimeout(() => {
          if (window.fbq) {
            window.fbq('track', 'ViewContent', {
              content_name: 'eBook Receitinhas do Bebê',
              content_category: 'Digital Product',
              value: 12.90,
              currency: 'BRL'
            });
            if (import.meta.env.DEV) {
              console.log('Facebook Pixel: Auto ViewContent tracked');
            }
          }
        }, 1000);
        
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

// Enhanced tracking with deduplication and rate limiting
export const trackEvent = (event: string, parameters?: Record<string, any>) => {
  const pixelState = getPixelState();
  
  // Ensure eventHistory is properly initialized
  if (!pixelState.eventHistory || !(pixelState.eventHistory instanceof Map)) {
    pixelState.eventHistory = new Map();
  }
  
  const eventKey = `${event}_${JSON.stringify(parameters)}`;
  const now = Date.now();
  
  // Check for recent duplicate events (within 2 seconds)
  const lastEventTime = pixelState.eventHistory.get(eventKey);
  if (lastEventTime && now - lastEventTime < 2000) {
    if (import.meta.env.DEV) {
      console.warn(`Facebook Pixel: Duplicate event blocked - ${event}`);
    }
    return;
  }
  
  // Clean old entries from history (keep only last 10 minutes)
  try {
    for (const [key, timestamp] of pixelState.eventHistory.entries()) {
      if (now - timestamp > 600000) { // 10 minutes
        pixelState.eventHistory.delete(key);
      }
    }
  } catch (error) {
    // Reset history if there's any issue
    pixelState.eventHistory = new Map();
  }
  
  // Record this event
  pixelState.eventHistory.set(eventKey, now);
  
  // Enhanced retry logic with better handling for slow networks
  const attemptTracking = (attempt: number = 1, maxAttempts: number = 5) => {
    if (window.fbq && typeof window.fbq === 'function') {
      try {
        window.fbq('track', event, parameters);
        if (import.meta.env.DEV) {
          console.log(`Facebook Pixel: ${event}`, parameters);
        }
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error(`Facebook Pixel tracking error for ${event}:`, error);
        }
      }
      return;
    }
    
    if (attempt < maxAttempts) {
      const delay = Math.min(200 * attempt, 1000); // Progressive delay capped at 1s
      setTimeout(() => {
        attemptTracking(attempt + 1, maxAttempts);
      }, delay);
    } else {
      if (import.meta.env.DEV) {
        console.warn(`Facebook Pixel not ready after ${maxAttempts} attempts, skipping event: ${event}`);
      }
    }
  };
  
  attemptTracking();
};

// Export trackEvent as the main tracking function (deduplication built-in)

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