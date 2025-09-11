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
        return "bg-baby-pink hover:bg-pink-400 text-white";
      case "secondary":
        return "bg-baby-green hover:bg-green-400 text-white";
      case "accent":
        return "bg-baby-blue hover:bg-blue-400 text-white";
      case "orange":
        return "bg-orange hover:bg-orange-600 text-white";
      default:
        return "bg-baby-pink hover:bg-pink-400 text-white";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "lg":
        return "text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4";
      case "xl":
        return "text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6";
      default:
        return "px-4 sm:px-6 py-2 sm:py-3";
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
          font-poppins font-bold rounded-full shadow-lg 
          transform hover:scale-105 transition-all duration-200 
          animated-pulse leading-tight
          min-h-[44px] flex items-center justify-center
          text-center mx-auto
          ${className}
        `}
        data-testid="cta-button"
      >
        {children}
      </Button>
    </div>
  );
}
