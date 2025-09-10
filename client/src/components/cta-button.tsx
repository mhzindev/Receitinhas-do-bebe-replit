import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "orange";
  size?: "default" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
}

export function CTAButton({ 
  children, 
  variant = "primary", 
  size = "default", 
  className = "",
  onClick
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
    
    // TODO: Implement actual purchase/checkout logic
    console.log('CTA button clicked:', children);
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        font-poppins font-bold rounded-full shadow-lg 
        transform hover:scale-105 transition-all duration-200 
        animated-pulse leading-tight
        min-h-[44px] flex items-center justify-center
        ${className}
      `}
      data-testid="cta-button"
    >
      {children}
    </Button>
  );
}
