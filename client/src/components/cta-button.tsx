import { Button } from "@/components/ui/button";
import { trackAddToCart, trackInitiateCheckout, trackLead, trackEvent } from "@/hooks/useFacebookPixel";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "orange";
  size?: "default" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  trackingEvent?: "addToCart" | "initiateCheckout" | "lead";
}

export function CTAButton({ 
  children, 
  variant = "primary", 
  size = "default", 
  className = "",
  onClick,
  trackingEvent = "addToCart"
}: CTAButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-pink-700 to-pink-600 hover:from-pink-800 hover:to-pink-700 text-white drop-shadow-[0_6px_12px_rgba(236,72,153,0.4)] border-2 border-pink-400 hover:border-pink-500 focus-visible:ring-4 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black";
      case "secondary":
        return "bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white drop-shadow-[0_6px_12px_rgba(34,197,94,0.4)] border-2 border-green-400 hover:border-green-500 focus-visible:ring-4 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black";
      case "accent":
        return "bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white drop-shadow-[0_6px_12px_rgba(59,130,246,0.4)] border-2 border-blue-400 hover:border-blue-500 focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black";
      case "orange":
        return "bg-gradient-to-r from-orange-700 to-orange-600 hover:from-orange-800 hover:to-orange-700 text-white drop-shadow-[0_6px_12px_rgba(249,115,22,0.4)] border-2 border-orange-400 hover:border-orange-500 focus-visible:ring-4 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black";
      default:
        return "bg-gradient-to-r from-pink-700 to-pink-600 hover:from-pink-800 hover:to-pink-700 text-white drop-shadow-[0_6px_12px_rgba(236,72,153,0.4)] border-2 border-pink-400 hover:border-pink-500 focus-visible:ring-4 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "lg":
        return "text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4";
      case "xl":
        return "text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6";
      default:
        return "px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg";
    }
  };

  const handleClick = () => {
    // Add visual feedback
    const button = document.activeElement as HTMLElement;
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    }
    
    // Track Facebook Pixel event with enhanced deduplication
    try {
      // Use direct trackEvent for better control and deduplication
      const eventData = {
        value: 12.90,
        currency: 'BRL',
        content_name: 'eBook Receitinhas do Bebê'
      };

      switch (trackingEvent) {
        case "addToCart":
          trackEvent('AddToCart', {
            ...eventData,
            content_type: 'product'
          });
          break;
        case "initiateCheckout":
          trackEvent('InitiateCheckout', {
            ...eventData,
            num_items: 1
          });
          break;
        case "lead":
          trackEvent('Lead', {
            ...eventData,
            source: 'landing_page'
          });
          break;
        default:
          trackEvent('InitiateCheckout', {
            ...eventData,
            num_items: 1
          }); // Default to checkout since all CTAs lead to checkout
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn('Facebook Pixel tracking error:', error);
      }
    }
    
    if (import.meta.env.DEV) {
      console.log('CTA button clicked with tracking:', trackingEvent, children);
    }
    
    // Execute custom onClick if provided
    if (onClick) {
      onClick();
    }
    
    // Redirect all CTA buttons to Kiwify checkout (with security protection)
    const checkoutWindow = window.open('https://pay.kiwify.com.br/2gKx6Uc', '_blank', 'noopener,noreferrer');
    if (checkoutWindow) {
      checkoutWindow.opener = null; // Extra security for older browsers
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <Button
        onClick={handleClick}
        className={`
          ${getVariantClasses()}
          ${getSizeClasses()}
          font-poppins font-black rounded-full
          transform hover:scale-105 active:scale-95 
          transition-all duration-300 ease-in-out
          animated-pulse leading-tight
          min-h-[50px] flex items-center justify-center
          text-center mx-auto uppercase tracking-wide
          hover:shadow-2xl focus:outline-none
          ${className}
        `}
        data-testid="cta-button"
      >
        <span className="drop-shadow-[0_1px_0_rgba(0,0,0,0.3)]">
          {children}
        </span>
      </Button>
    </div>
  );
}
