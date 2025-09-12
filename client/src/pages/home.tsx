import { lazy, Suspense } from "react";
import { CountdownTimer } from "@/components/countdown-timer";
// Lazy load social proof for better performance
const SocialProofNotification = lazy(() => import("@/components/social-proof-notification").then(module => ({ default: module.SocialProofNotification })));
import { CTAButton } from "@/components/cta-button";
import { Award, Check, Shield, Users, Star, Heart, Baby, MapPin, Clock, ShieldCheck, Download, ChevronDown } from "lucide-react";
import { LivePurchaseCounter } from "@/components/live-purchase-counter";

// Lazy load heavy components for better performance
const FeedbackGallery = lazy(() => import("@/components/feedback-gallery").then(module => ({ default: module.FeedbackGallery })));
const EBookPreviewCarousel = lazy(() => import("@/components/ebook-preview-carousel").then(module => ({ default: module.EBookPreviewCarousel })));

// Dados do eBook baseados nas imagens anexadas
const ebookContents = [
  {
    id: "1",
    title: "Mingau de Aveia com Banana",
    subtitle: "Receita completa passo a passo",
    description: "Uma das receitas mais amadas pelas mamães! Nutritiva, fácil e perfeita para a introdução alimentar.",
    type: "recipe" as const,
    preview: {
      ingredients: [
        "2 colheres de sopa de aveia em flocos",
        "1/2 xícara de água ou leite materno/fórmula",
        "1/2 banana amassada",
        "1 pitada de canela (opcional)"
      ],
      steps: [
        "Cozinhe a aveia em fogo baixo por 5 minutos",
        "Retire do fogo e adicione a banana amassada",
        "Misture bem até obter consistência homogênea",
        "Espere esfriar antes de oferecer ao bebê"
      ],
      ageRange: "6+ meses"
    },
    icon: "🥣",
    bgGradient: "bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100",
    textColor: "text-gray-800"
  },
  {
    id: "2", 
    title: "Plano Alimentar Completo",
    subtitle: "Guia dos 6 aos 12 meses",
    description: "Planejamento semanal detalhado com horários, quantidades e progressão alimentar adequada para cada fase.",
    type: "plan" as const,
    preview: {
      highlights: [
        "Cronograma semanal organizado",
        "Quantidades adequadas por idade",
        "Progressão de texturas e sabores",
        "Horários ideais para cada refeição",
        "Lista de compras incluída"
      ],
      ageRange: "6 a 12 meses"
    },
    icon: "📋",
    bgGradient: "bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-100",
    textColor: "text-gray-800"
  },
  {
    id: "3",
    title: "Lista de Substituições Saudáveis",
    subtitle: "Alternativas nutritivas para qualquer situação",
    description: "Não tem um ingrediente? Descobra substituições inteligentes que mantêm o valor nutricional e o sabor!",
    type: "tips" as const,
    preview: {
      highlights: [
        "Mais de 50 substituições testadas",
        "Alternativas para alergias alimentares",
        "Opções para diferentes orçamentos",
        "Equivalências nutricionais",
        "Dicas de armazenamento"
      ],
      ageRange: "6 a 12 meses"
    },
    icon: "🔄",
    bgGradient: "bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100",
    textColor: "text-gray-800"
  },
  {
    id: "4",
    title: "Guia do Sono",
    subtitle: "Noites tranquilas para bebê e família",
    description: "A alimentação afeta diretamente o sono! Aprenda a criar uma rotina que garante noites mais tranquilas.",
    type: "guide" as const,
    preview: {
      highlights: [
        "Rotina de sono após as refeições",
        "Alimentos que ajudam no sono",
        "Timing perfeito das refeições",
        "Dicas para noites mais tranquilas",
        "Sinais de fome x sono"
      ],
      ageRange: "6+ meses"
    },
    icon: "😴",
    bgGradient: "bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100",
    textColor: "text-gray-800"
  },
  {
    id: "5",
    title: "Dicas de Armazenamento",
    subtitle: "Conserve alimentos com segurança",
    description: "Organize sua cozinha e mantenha os alimentos frescos por mais tempo, economizando tempo e dinheiro.",
    type: "tips" as const,
    preview: {
      highlights: [
        "Tempo de conservação de cada alimento",
        "Técnicas de congelamento seguro",
        "Organização da geladeira",
        "Papinhas prontas que duram dias",
        "Aproveitamento máximo dos ingredientes"
      ],
      ageRange: "Todas as idades"
    },
    icon: "🥫",
    bgGradient: "bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100",
    textColor: "text-gray-800"
  }
];

export default function Home() {
  return (
    <div className="bg-baby-yellow font-inter text-foreground w-full overflow-x-hidden">
      {/* Countdown Banner */}
      <div className="bg-red-600 text-white py-2 md:py-3 text-center sticky top-0 z-50 w-full">
        <div className="container mx-auto px-2 md:px-4 max-w-full">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-4">
            <p className="text-xs sm:text-sm md:text-base font-bold leading-tight px-2" data-testid="countdown-banner">🔥OFERTA POR TEMPO LIMITADO!</p>
            <div className="flex items-center space-x-1 md:space-x-2">
              <span className="text-xs md:text-sm">⏰</span>
              <CountdownTimer />
              <span className="text-xs md:text-sm">restantes</span>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Social Proof Notification */}
      <Suspense fallback={<div className="hidden"></div>}>
        <SocialProofNotification />
      </Suspense>
      {/* Header Section */}
      <header className="container mx-auto px-3 md:px-4 py-4 md:py-8">
        <div className="text-center">
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight" data-testid="main-title">
            Seu bebê vai comer com prazer em até 7 dias
          </h1>
          <h2 className="font-poppins text-lg sm:text-xl md:text-2xl font-semibold text-baby-pink mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-2" data-testid="main-subtitle">
            💝 Com receitas simples aprovadas por nutricionistas 💝
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-3xl mx-auto">
            Mais de 15.000 mães já transformaram a hora da refeição em um momento tranquilo e feliz.
          </p>
        </div>

        {/* Marina's Story - Moved to prominent position */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-baby-pink shadow-lg">
              <img 
                src="/marina-profile.jpg" 
                alt="Marina S. - Mãe que transformou a alimentação do seu bebê" 
                className="w-full h-full object-cover"
                data-testid="marina-profile-photo"
              />
            </div>
            <h3 className="font-poppins text-xl md:text-2xl font-bold text-gray-800 mb-2">
              A história que mudou tudo 💕
            </h3>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-gray-600 text-sm">(Depoimento Verificado)</span>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 relative">
            <div className="absolute -top-2 left-4 text-4xl text-baby-pink opacity-60">"</div>
            <div className="text-gray-700 space-y-4">
              <p className="text-base md:text-lg italic">
                <span className="font-bold text-red-600">Eu era uma mãe desesperada.</span> Meu filho de 8 meses chorava a cada refeição, 
                recusava tudo que eu oferecia e eu me sentia a pior mãe do mundo...
              </p>
              
              <p className="text-base md:text-lg italic">
                Até que descobri que o problema não era comigo ou com ele - 
                era simplesmente a <span className="font-bold text-baby-pink">FORMA</span> como eu estava oferecendo a comida.
              </p>
              
              <div className="bg-green-100 border-l-4 border-green-400 p-4 rounded-r-lg">
                <p className="text-lg font-bold text-green-700">
                  Em apenas <span className="bg-green-200 px-2 py-1 rounded-full text-green-800">5 dias</span> usando essas receitas, 
                  meu filho começou a comer com prazer. Hoje ele tem 3 anos e é a criança mais saudável da creche!
                </p>
              </div>
            </div>
            <div className="absolute -bottom-2 right-4 text-4xl text-baby-blue opacity-60 rotate-180">"</div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              <MapPin className="inline w-4 h-4 mr-1" />
              Marina S., São Paulo - SP • Verificado em Dezembro 2024
            </p>
          </div>
        </div>

        {/* Simple CTA after Marina's story */}
        <div className="text-center max-w-2xl mx-auto">
          <CTAButton 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold shadow-lg" 
            trackingEvent="initiateCheckout"
            data-testid="hero-main-cta"
          >
            Quero as receitas agora
          </CTAButton>
          <p className="text-gray-600 text-sm mt-3">
            💳 Acesso por apenas <span className="font-bold text-baby-pink">R$ 12,90</span> • Garantia de 7 dias
          </p>
        </div>
      </header>
      {/* Trust & Credibility Section */}
      <section className="container mx-auto px-3 md:px-4 mb-6 md:mb-8" data-testid="trust-section">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
            <div className="flex flex-col items-center" data-testid="trust-item-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-baby-green rounded-full flex items-center justify-center mb-2">
                <Shield className="text-white w-4 h-4 md:w-5 md:h-5" />
              </div>
              <p className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">Satisfação Garantida</p>
              <p className="text-xs text-gray-500">ou seu dinheiro de volta</p>
            </div>
            
            <div className="flex flex-col items-center" data-testid="trust-item-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-baby-blue rounded-full flex items-center justify-center mb-2">
                <Users className="text-white w-4 h-4 md:w-5 md:h-5" />
              </div>
              <p className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">+15.000 Famílias</p>
              <p className="text-xs text-gray-500">já transformadas</p>
            </div>
            
            <div className="flex flex-col items-center" data-testid="trust-item-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-baby-pink rounded-full flex items-center justify-center mb-2">
                <Star className="text-white w-4 h-4 md:w-5 md:h-5" />
              </div>
              <p className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">94% Taxa de Sucesso</p>
              <p className="text-xs text-gray-500">aprovação comprovada</p>
            </div>
            
            <div className="flex flex-col items-center" data-testid="trust-item-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange rounded-full flex items-center justify-center mb-2">
                <Award className="text-white w-4 h-4 md:w-5 md:h-5" />
              </div>
              <p className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">Aprovado por</p>
              <p className="text-xs text-gray-500">nutricionistas</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOVO: Hook de Engajamento e Elementos de Scroll */}
      <section className="container mx-auto px-3 md:px-4 mb-6 md:mb-8" data-testid="engagement-section">
        {/* Hook Emocional - 3 Erros */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-400 rounded-r-lg p-4 mb-6 shadow-lg">
          <div className="flex items-center">
            <div className="text-2xl mr-3">⚠️</div>
            <div>
              <p className="font-bold text-red-700 text-sm md:text-base" data-testid="warning-text">
                ATENÇÃO: Você está cometendo esses 3 erros na alimentação do seu bebê?
              </p>
              <p className="text-red-600 text-xs md:text-sm mt-1">
                👇 Descubra abaixo como milhares de mães resolveram isso...
              </p>
            </div>
          </div>
        </div>

        {/* Preview Antes vs Depois */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200" data-testid="before-state">
              <div className="text-3xl mb-2">😩</div>
              <p className="text-sm font-semibold text-red-600">ANTES</p>
              <p className="text-xs text-gray-600">Estresse nas refeições</p>
              <p className="text-xs text-red-500 mt-1">Bebê rejeitando comida</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200" data-testid="after-state">
              <div className="text-3xl mb-2">😊</div>
              <p className="text-sm font-semibold text-green-600">DEPOIS</p>
              <p className="text-xs text-gray-600">Bebê pedindo bis!</p>
              <p className="text-xs text-green-500 mt-1">Refeições prazerosas</p>
            </div>
          </div>
        </div>

        {/* Seta Animada de Scroll */}
        <div className="text-center animate-bounce" data-testid="scroll-indicator">
          <div className="inline-flex flex-col items-center text-baby-pink">
            <p className="text-sm font-semibold mb-2">Veja o que você vai receber 👇</p>
            <div className="w-8 h-8 border-2 border-baby-pink rounded-full flex items-center justify-center">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Content Section */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-16" data-testid="product-content-section">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-100">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-gradient-to-r from-baby-pink to-baby-green text-white rounded-full px-6 py-2 mb-4">
              <span className="font-bold text-sm">✨ CONTEÚDO EXCLUSIVO ✨</span>
            </div>
            <h3 className="font-poppins text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              🎁 O que você vai receber:
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Um kit completo para transformar a alimentação do seu bebê
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">
              <div className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-baby-yellow via-yellow-50 to-orange-50 border-2 border-baby-yellow/30 rounded-2xl p-6" data-testid="product-item-1">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-baby-green to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-bold text-lg md:text-xl text-gray-800 mb-2">🎁 eBook Receitinhas do Bebê</h4>
                    <p className="text-gray-700 font-medium text-base">+100 receitas organizadas por idade e textura</p>
                    <p className="text-gray-600 text-sm mt-2">Valor individual: <span className="font-bold text-green-600">R$ 197,00</span></p>
                  </div>
                </div>
              </div>
              
              <div className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-baby-blue via-blue-50 to-sky-50 border-2 border-baby-blue/30 rounded-2xl p-6" data-testid="product-item-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-baby-green to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-bold text-lg md:text-xl text-gray-800 mb-2">🌙 Guia Completo do Sono do Bebê</h4>
                    <p className="text-gray-700 font-medium text-base">Técnicas comprovadas para noites tranquilas</p>
                    <p className="text-gray-600 text-sm mt-2">Valor individual: <span className="font-bold text-green-600">R$ 97,00</span></p>
                  </div>
                </div>
              </div>

              <div className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-baby-pink via-pink-50 to-rose-50 border-2 border-baby-pink/30 rounded-2xl p-6" data-testid="product-item-3">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-baby-green to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-bold text-lg md:text-xl text-gray-800 mb-2">🤱 Desmame Sem Traumas</h4>
                    <p className="text-gray-700 font-medium text-base">Transição suave e natural</p>
                    <p className="text-gray-600 text-sm mt-2">Valor individual: <span className="font-bold text-green-600">R$ 97,00</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200 rounded-2xl p-6" data-testid="product-item-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-baby-green to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-bold text-lg md:text-xl text-gray-800 mb-2">📅 Plano Alimentar Semanal</h4>
                    <p className="text-gray-700 font-medium text-base">Cardápios organizados e balanceados</p>
                    <p className="text-gray-600 text-sm mt-2">Valor individual: <span className="font-bold text-green-600">R$ 97,00</span></p>
                  </div>
                </div>
              </div>

              <div className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-6" data-testid="product-item-5">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-baby-green to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-bold text-lg md:text-xl text-gray-800 mb-2">✅ Checklist de Introdução Alimentar</h4>
                    <p className="text-gray-700 font-medium text-base">Passo a passo detalhado</p>
                    <p className="text-gray-600 text-sm mt-2">Valor individual: <span className="font-bold text-green-600">R$ 97,00</span></p>
                  </div>
                </div>
              </div>

              <div className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-6" data-testid="product-item-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-baby-green to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-bold text-lg md:text-xl text-gray-800 mb-2">🔄 Lista de Substituições Inteligentes</h4>
                    <p className="text-gray-700 font-medium text-base">Alternativas nutritivas e práticas</p>
                    <p className="text-gray-600 text-sm mt-2">Bônus especial: <span className="font-bold text-green-600">R$ 67,00</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Value Summary - ENHANCED BUT HARMONIOUS */}
          <div className="mt-10 relative bg-white border-2 border-baby-pink rounded-2xl shadow-lg p-6 md:p-8 text-center overflow-hidden" data-testid="price-card">
            {/* Decorative top gradient strip */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-baby-pink via-baby-yellow to-baby-green"></div>
            
            {/* Subtle decorative background elements */}
            <div className="absolute top-4 right-4 opacity-5">
              <div className="w-16 h-16 bg-baby-pink rounded-full"></div>
            </div>
            <div className="absolute bottom-4 left-4 opacity-5">
              <div className="w-12 h-12 bg-baby-blue rounded-full"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10">
              {/* Header with discount badge */}
              <div className="mb-6">
                <div className="flex justify-center items-center gap-3 mb-4">
                  <div className="bg-baby-yellow text-gray-800 font-bold text-sm px-4 py-2 rounded-full border border-baby-pink bounce-gentle">
                    <span className="mr-1">⚡</span>
                    <span>OFERTA POR TEMPO LIMITADO</span>
                  </div>
                  <div className="bg-baby-green text-white font-extrabold text-xs px-3 py-1 rounded-full animated-pulse">
                    -98% OFF
                  </div>
                </div>
                
                <h3 className="font-poppins text-xl md:text-2xl font-bold text-baby-pink mb-2">
                  💝 VALOR TOTAL COMPLETO
                </h3>
              </div>

              {/* Original Price */}
              <div className="mb-4">
                <p className="text-gray-500 text-sm md:text-base font-medium mb-2">DE:</p>
                <div className="text-gray-500 text-2xl md:text-3xl font-bold line-through">
                  R$ 555,00
                </div>
              </div>

              {/* Current Price - HIGHLIGHTED */}
              <div className="mb-6">
                <p className="text-baby-pink font-poppins text-lg md:text-xl font-bold mb-3 float-up">
                  POR APENAS HOJE:
                </p>
                <div className="relative">
                  <div className="bg-gradient-to-r from-baby-green to-green-400 text-white text-4xl md:text-5xl font-black py-4 px-6 rounded-2xl shadow-lg border-2 border-baby-pink">
                    R$ 12,90
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  💳 Ou em até 2x de <span className="font-bold text-baby-pink">R$ 6,45</span> sem juros
                </p>
              </div>

              {/* Savings Highlight */}
              <div className="bg-green-100 border border-green-300 text-green-800 font-bold text-lg py-3 px-6 rounded-xl mb-6">
                <span className="text-xl mr-2">💰</span>
                VOCÊ ECONOMIZA R$ 542,10!
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-3">
                <div className="bg-baby-blue bg-opacity-30 text-blue-700 font-semibold text-xs px-3 py-2 rounded-full flex items-center border border-blue-200">
                  <span className="mr-1">🔒</span>
                  PAGAMENTO SEGURO
                </div>
                <div className="bg-baby-green bg-opacity-30 text-green-700 font-semibold text-xs px-3 py-2 rounded-full flex items-center border border-green-200">
                  <span className="mr-1">⚡</span>
                  ACESSO IMEDIATO
                </div>
                <div className="bg-baby-yellow bg-opacity-30 text-yellow-700 font-semibold text-xs px-3 py-2 rounded-full flex items-center border border-yellow-200">
                  <span className="mr-1">✅</span>
                  GARANTIA 7 DIAS
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button 1 */}
          <div className="text-center mt-8 relative flex flex-col items-center">
            <div className="arrow-bounce text-4xl mb-4">👇</div>
            <div className="w-full flex justify-center">
              <CTAButton variant="primary" size="lg" className="glow w-full sm:w-auto text-lg font-bold shadow-2xl max-w-2xl" trackingEvent="initiateCheckout">
                🎯 QUERO ACABAR COM O ESTRESSE DAS REFEIÇÕES 🎯
              </CTAButton>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span className="text-green-600">⚡</span>
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-blue-600">🔒</span>
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-600">✅</span>
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Personal Story Section */}
      <section className="container mx-auto px-3 md:px-4 mb-8 md:mb-12" data-testid="story-section">
        <div className="relative bg-gradient-to-br from-baby-pink via-white to-baby-blue rounded-2xl md:rounded-3xl testimonial-glow multi-shadow p-6 md:p-10 overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-4 right-4 opacity-10">
            <Heart className="text-baby-pink w-16 h-16 heart-pulse" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-10">
            <Star className="text-gold w-10 h-10" />
          </div>
          <div className="absolute top-1/2 left-6 opacity-5">
            <Baby className="text-baby-blue w-20 h-20" />
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Enhanced Header with Avatar */}
            <div className="text-center mb-8 md:mb-12">
              <div className="float-up mb-6">
                <div className="relative inline-block">
                  {/* Avatar with decorative ring */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-baby-pink to-baby-blue rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-baby-pink to-baby-blue opacity-90"></div>
                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src="/marina-profile.jpg" 
                        alt="Marina S. - Mãe que transformou a alimentação do seu bebê" 
                        className="w-full h-full object-cover rounded-full"
                        data-testid="marina-profile-photo"
                      />
                    </div>
                  </div>
                  
                  {/* Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 verified-badge text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                </div>
              </div>
              
              <h3 className="font-poppins text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                <span className="gradient-text">A história que mudou tudo...</span> 
                <span className="inline-block ml-2 heart-pulse">💕</span>
              </h3>
              
              {/* Star Rating */}
              <div className="flex justify-center items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-gold text-lg md:text-xl"></i>
                ))}
                <span className="ml-2 text-gray-600 font-medium text-sm md:text-base">(5.0 • Depoimento Verificado)</span>
              </div>
            </div>
            
            {/* Enhanced Testimonial Card */}
            <div className="relative testimonial-card bg-white rounded-2xl p-6 md:p-8 shadow-2xl mb-6 md:mb-8 border border-gray-100">
              
              {/* Large Opening Quote */}
              <div className="absolute -top-3 left-6">
                <span className="quote-mark quote-bounce text-6xl md:text-7xl text-baby-pink opacity-60">"</span>
              </div>
              
              {/* Testimonial Content */}
              <div className="relative pt-8 md:pt-6">
                <div className="text-gray-700 leading-relaxed space-y-4 md:space-y-6">
                  <p className="text-base md:text-lg font-medium italic">
                    <span className="text-lg md:text-xl font-bold text-red-600">Eu era uma mãe desesperada.</span> Meu filho de 8 meses chorava a cada refeição, 
                    recusava tudo que eu oferecia e eu me sentia a pior mãe do mundo...
                  </p>
                  
                  <p className="text-base md:text-lg italic">
                    "Até que descobri que o problema não era comigo ou com ele - 
                    era simplesmente a <span className="font-bold text-baby-pink underline decoration-2">FORMA</span> como eu estava oferecendo a comida."
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-400 rounded-r-lg p-4 md:p-6">
                    <p className="text-lg md:text-xl font-bold text-green-700">
                      "Em apenas <span className="bg-green-200 px-2 py-1 rounded-full text-green-800">5 dias</span> usando essas receitas, meu filho começou a comer com prazer. 
                      Hoje ele tem 3 anos e é a criança mais saudável da creche!" 
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Closing Quote */}
              <div className="absolute -bottom-3 right-6">
                <span className="quote-mark quote-bounce text-6xl md:text-7xl text-baby-blue opacity-60 rotate-180 inline-block">"</span>
              </div>
            </div>
            
            {/* Credibility Information */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-4 md:p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-baby-pink rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-white text-sm"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">Marina S., São Paulo - SP</p>
                    <p className="text-gray-500 text-xs md:text-sm">Depoimento verificado em Dezembro 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="verified-badge text-white rounded-full px-3 py-1 text-xs font-bold">
                    <i className="fas fa-shield-check mr-1"></i>
                    VERIFICADO
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA Section */}
            <div className="text-center bg-gradient-to-r from-baby-yellow to-baby-pink rounded-xl p-6 md:p-8 border-2 border-baby-pink shadow-lg">
              <p className="font-poppins font-bold text-gray-900 text-lg md:text-xl mb-2 drop-shadow-sm">
                Se funcionou comigo e com mais de <span className="text-red-700 text-xl md:text-2xl font-extrabold drop-shadow-sm">+15.000 mães</span>...
              </p>
              <p className="font-poppins font-bold text-2xl md:text-3xl mb-4">
                <span className="text-gray-900 drop-shadow-md font-extrabold">VAI FUNCIONAR COM VOCÊ TAMBÉM!</span> 
                <span className="inline-block ml-2 bounce-gentle">💪</span>
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
                <div className="flex items-center bg-white bg-opacity-90 rounded-full px-3 py-2 text-xs md:text-sm font-bold text-gray-800 shadow-md">
                  <i className="fas fa-clock text-green-600 mr-2"></i>
                  Resultados em 5 dias
                </div>
                <div className="flex items-center bg-white bg-opacity-90 rounded-full px-3 py-2 text-xs md:text-sm font-bold text-gray-800 shadow-md">
                  <i className="fas fa-shield-alt text-blue-600 mr-2"></i>
                  100% Seguro
                </div>
                <div className="flex items-center bg-white bg-opacity-90 rounded-full px-3 py-2 text-xs md:text-sm font-bold text-gray-800 shadow-md">
                  <i className="fas fa-heart text-red-500 mr-2"></i>
                  15k+ Mães Satisfeitas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Before vs After Section */}
      <section className="container mx-auto px-3 md:px-4 mb-8 md:mb-12" data-testid="before-after-section">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8">
          <h3 className="font-poppins text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">
            🔄 ANTES vs DEPOIS
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Before */}
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 md:p-6" data-testid="before-section">
              <h4 className="font-poppins text-lg md:text-xl font-bold text-red-600 mb-3 md:mb-4 text-center">
                😰 ANTES (sem as receitas)
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center space-x-2 md:space-x-3">
                  <span className="text-red-500 text-sm md:text-base">❌</span>
                  <span className="text-gray-700 text-sm md:text-base">Hora da comida = momento de estresse</span>
                </li>
                <li className="flex items-center space-x-2 md:space-x-3">
                  <span className="text-red-500 text-sm md:text-base">❌</span>
                  <span className="text-gray-700 text-sm md:text-base">Bebê chorando e recusando comida</span>
                </li>
                <li className="flex items-center space-x-2 md:space-x-3">
                  <span className="text-red-500 text-sm md:text-base">❌</span>
                  <span className="text-gray-700 text-sm md:text-base">Você se sentindo culpada e frustrada</span>
                </li>
                <li className="flex items-center space-x-2 md:space-x-3">
                  <span className="text-red-500 text-sm md:text-base">❌</span>
                  <span className="text-gray-700 text-sm md:text-base">Medo do desenvolvimento inadequado</span>
                </li>
                <li className="flex items-center space-x-2 md:space-x-3">
                  <span className="text-red-500 text-sm md:text-base">❌</span>
                  <span className="text-gray-700 text-sm md:text-base">Noites em claro com preocupação</span>
                </li>
              </ul>
            </div>
            
            {/* After */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 md:p-6" data-testid="after-section">
              <h4 className="font-poppins text-lg md:text-xl font-bold text-green-600 mb-3 md:mb-4 text-center">
                😍 DEPOIS (com as receitas)
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center space-x-2 md:space-x-3">
                  <span className="text-green-500 text-sm md:text-base">✅</span>
                  <span className="text-gray-700 text-sm md:text-base">Refeições tranquilas e prazerosas</span>
                </li>
                <li className="flex items-center space-x-2 md:space-x-3">
                  <span className="text-green-500 text-sm md:text-base">✅</span>
                  <span className="text-gray-700 text-sm md:text-base">Bebê pedindo mais comida</span>
                </li>
                <li className="flex items-center space-x-2 md:space-x-3">
                  <span className="text-green-500 text-sm md:text-base">✅</span>
                  <span className="text-gray-700 text-sm md:text-base">Você confiante e realizada</span>
                </li>
                <li className="flex items-center space-x-2 md:space-x-3">
                  <span className="text-green-500 text-sm md:text-base">✅</span>
                  <span className="text-gray-700 text-sm md:text-base">Desenvolvimento saudável garantido</span>
                </li>
                <li className="flex items-center space-x-2 md:space-x-3">
                  <span className="text-green-500 text-sm md:text-base">✅</span>
                  <span className="text-gray-700 text-sm md:text-base">Paz de espírito total</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-6 md:mt-8">
            <p className="font-poppins text-base md:text-lg font-semibold text-gray-800 mb-4">
              🤔 Qual dessas realidades você quer viver?
            </p>
          </div>
        </div>
      </section>
      {/* Problem Identification Section */}
      <section className="container mx-auto px-4 mb-12" data-testid="problem-section">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Você já passou por isso? 🤔
          </h3>

          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-300" data-testid="problem-item-1">
              <div className="text-2xl">💔</div>
              <p className="text-gray-700 font-medium">Seu bebê recusa tudo que você oferece</p>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-300" data-testid="problem-item-2">
              <div className="text-2xl">💔</div>
              <p className="text-gray-700 font-medium">A hora da refeição virou um momento de choro e desespero</p>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-300" data-testid="problem-item-3">
              <div className="text-2xl">💔</div>
              <p className="text-gray-700 font-medium">Você se sente culpada por não conseguir fazer ele comer direito</p>
            </div>

            <div className="bg-baby-yellow border-2 border-baby-pink rounded-lg p-6 text-center mt-8" data-testid="empathy-message">
              <p className="font-poppins text-lg font-semibold text-gray-800">
                ➡️ Você NÃO está sozinha, mamãe! 🤗
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Solution Section */}
      <section className="container mx-auto px-4 mb-12" data-testid="solution-section">
        <div className="bg-gradient-to-br from-baby-blue to-baby-green rounded-2xl shadow-lg p-8 text-center">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-white mb-6">
            A solução que vai transformar a alimentação do seu bebê! ✨
          </h3>
          <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed">
            Mais de 100 receitas fáceis, nutritivas e aprovadas por nutricionistas que vão acabar com o estresse na hora das refeições. 
            Seu bebê vai amar comer e você vai ter a tranquilidade que merece! 💖
          </p>
        </div>
      </section>
      {/* Social Proof Section with Images */}
      <section className="container mx-auto px-3 md:px-4 mb-8 md:mb-12" data-testid="testimonials-section">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8">
          <Suspense fallback={
            <div className="animate-pulse bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-gray-500">Carregando depoimentos...</div>
            </div>
          }>
            <FeedbackGallery />
          </Suspense>

          {/* CTA Button 2 */}
          <div className="text-center mt-6 md:mt-8 flex justify-center">
            <div className="w-full flex justify-center">
              <CTAButton variant="orange" size="lg" className="w-full sm:w-auto px-4 py-4 text-sm sm:text-base max-w-2xl" trackingEvent="initiateCheckout">
                ⚡ GARANTIR MINHA TRANQUILIDADE AGORA! ⚡
              </CTAButton>
            </div>
            <p className="text-xs text-gray-500 mt-2 px-2">👆 Clique e transforme a alimentação do seu bebê em 5 minutos</p>
          </div>
        </div>
      </section>
      {/* eBook Preview Section */}
      <section className="container mx-auto px-3 md:px-4 mb-8 md:mb-12" data-testid="ebook-preview-section">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-4 right-4 opacity-5">
            <i className="fas fa-book-open text-baby-pink text-8xl"></i>
          </div>
          <div className="absolute bottom-4 left-4 opacity-5">
            <i className="fas fa-utensils text-baby-blue text-6xl"></i>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Header with Strong Copy */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block bg-gradient-to-r from-baby-pink to-baby-blue text-white rounded-full px-6 py-2 mb-4">
                <span className="font-bold text-sm">✨ EXCLUSIVO ✨</span>
              </div>
              
              <h3 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                👀 <span className="gradient-text">Veja por dentro do eBook!</span>
              </h3>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                <span className="font-semibold text-baby-pink">Algumas das receitas e guias</span> que você vai encontrar
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2">
                  <i className="fas fa-shield-check text-green-600 mr-2"></i>
                  <span className="text-green-700 font-semibold text-sm">100% Testado</span>
                </div>
                <div className="flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
                  <i className="fas fa-users text-blue-600 mr-2"></i>
                  <span className="text-blue-700 font-semibold text-sm">+15k Mães Aprovaram</span>
                </div>
                <div className="flex items-center bg-purple-50 border border-purple-200 rounded-full px-4 py-2">
                  <i className="fas fa-heart text-purple-600 mr-2"></i>
                  <span className="text-purple-700 font-semibold text-sm">Aprovado por Nutricionistas</span>
                </div>
              </div>
            </div>

            {/* Enhanced Carousel */}
            <Suspense fallback={
              <div className="animate-pulse bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <div className="text-gray-500">Carregando prévia do eBook...</div>
              </div>
            }>
              <EBookPreviewCarousel contents={ebookContents} />
            </Suspense>

            {/* Bottom CTA with Social Proof */}
            <div className="mt-8 md:mt-12 text-center">
              <div className="bg-gradient-to-r from-baby-yellow to-baby-pink rounded-2xl p-6 md:p-8 border-2 border-baby-pink">
                <div className="max-w-2xl mx-auto">
                  <h4 className="font-poppins text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    😍 <span className="text-baby-pink">Isso é só uma amostra!</span>
                  </h4>
                  <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
                    O eBook completo contém <span className="font-bold text-baby-pink">mais de 100 receitas</span>, 
                    planos semanais detalhados, e todos os guias que você precisa para transformar 
                    a alimentação do seu bebê em apenas alguns dias!
                  </p>
                  
                  {/* Value Proposition */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/80 rounded-lg p-3">
                      <div className="text-2xl mb-2">📚</div>
                      <p className="text-sm font-semibold text-gray-800">+100 Receitas</p>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3">
                      <div className="text-2xl mb-2">⏰</div>
                      <p className="text-sm font-semibold text-gray-800">Resultados em 5 dias</p>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3">
                      <div className="text-2xl mb-2">🛡️</div>
                      <p className="text-sm font-semibold text-gray-800">Garantia de 7 dias</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    💫 <span className="font-semibold">Transforme a alimentação do seu bebê hoje mesmo!</span>
                  </p>
                  
                  <div className="w-full flex justify-center">
                    <CTAButton variant="orange" size="xl" className="w-full sm:w-auto glow max-w-2xl" trackingEvent="initiateCheckout">
                      <span className="hidden sm:inline">🎯 QUERO O EBOOK COMPLETO AGORA! 🎯</span>
                      <span className="sm:hidden">🎯 QUERO O EBOOK AGORA! 🎯</span>
                    </CTAButton>
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-3 px-2">
                    <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2 space-y-1 sm:space-y-0">
                      <span className="flex items-center justify-center">⚡ Acesso imediato</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center justify-center">💳 Pagamento seguro</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center justify-center">📱 Todos os dispositivos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="container mx-auto px-3 md:px-4 mb-8 md:mb-12" data-testid="benefits-section">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8">
          <h3 className="font-poppins text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">
            Os benefícios que você vai ter:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full">
            <div className="text-center p-6 bg-baby-yellow rounded-lg" data-testid="benefit-1">
              <div className="text-4xl mb-4">⏰</div>
              <h4 className="font-poppins font-semibold text-lg mb-2">Economiza seu tempo</h4>
              <p className="text-gray-600 text-sm">Receitas rápidas e práticas</p>
            </div>

            <div className="text-center p-6 bg-baby-pink bg-opacity-30 rounded-lg" data-testid="benefit-2">
              <div className="text-4xl mb-4">😌</div>
              <h4 className="font-poppins font-semibold text-lg mb-2">Acaba com a ansiedade</h4>
              <p className="text-gray-600 text-sm">Refeições sem estresse</p>
            </div>

            <div className="text-center p-6 bg-baby-blue bg-opacity-30 rounded-lg" data-testid="benefit-3">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="font-poppins font-semibold text-lg mb-2">Economiza dinheiro</h4>
              <p className="text-gray-600 text-sm">Ingredientes acessíveis</p>
            </div>

            <div className="text-center p-6 bg-baby-green bg-opacity-30 rounded-lg" data-testid="benefit-4">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="font-poppins font-semibold text-lg mb-2">Desenvolvimento saudável</h4>
              <p className="text-gray-600 text-sm">Nutrição completa</p>
            </div>
          </div>
        </div>
      </section>
      {/* Guarantee Section */}
      <section className="container mx-auto px-4 mb-12" data-testid="guarantee-section">
        <div className="bg-white border-2 border-green-200 rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
          {/* Security badges background pattern */}
          <div className="absolute top-4 right-4 opacity-10">
            <i className="fas fa-certificate text-green-600 text-6xl"></i>
          </div>
          <div className="absolute bottom-4 left-4 opacity-10">
            <i className="fas fa-shield-check text-blue-600 text-6xl"></i>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            {/* Professional security badge */}
            <div className="flex justify-center items-center mb-6">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-full p-4 shadow-lg mr-4">
                <i className="fas fa-shield-check text-white text-3xl"></i>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-4 shadow-lg">
                <i className="fas fa-lock text-white text-3xl"></i>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-6">
              <h3 className="font-poppins text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                🛡️ GARANTIA BLINDADA "MAMÃE TRANQUILA"
              </h3>
              <div className="bg-green-600 text-white px-6 py-2 rounded-full inline-block mb-4">
                <span className="font-bold text-lg">✅ 7 DIAS DE PROTEÇÃO TOTAL</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-green-100 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <i className="fas fa-money-bill-wave text-green-600 text-2xl mr-3"></i>
                  <h4 className="font-semibold text-gray-800">Reembolso Garantido</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Dinheiro de volta em <strong>até 7 dias</strong> via PIX, sem burocracias ou perguntas incômodas.
                </p>
              </div>
              
              <div className="bg-white border-2 border-blue-100 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <i className="fas fa-user-shield text-blue-600 text-2xl mr-3"></i>
                  <h4 className="font-semibold text-gray-800">Proteção Legal</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Garantia respaldada pelo <strong>Código de Defesa do Consumidor</strong> e nossa empresa registrada.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                <strong className="text-green-600">COMPROMISSO REAL:</strong> Se em 7 dias você não estiver 100% satisfeita 
                com as receitas, devolvemos cada centavo investido. 
              </p>
              <p className="text-gray-600 font-semibold">
                💯 <strong>ZERO RISCO</strong> - Você só tem a ganhar!
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200">
                <i className="fas fa-users text-green-600 mr-2"></i>
                <span>+15.000 mães confiaram</span>
              </div>
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                <i className="fas fa-star text-yellow-500 mr-2"></i>
                <span>4.9/5 de satisfação</span>
              </div>
              <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full border border-purple-200">
                <i className="fas fa-award text-purple-600 mr-2"></i>
                <span>Empresa verificada</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="container mx-auto px-4 mb-12" data-testid="final-cta-section">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl shadow-lg p-8 text-center">
          {/* Enhanced ÚLTIMA CHANCE banner with timer */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 mb-6 shadow-xl border-2 border-red-800">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-8">
              {/* Left - ÚLTIMA CHANCE */}
              <div className="text-center md:text-left" data-testid="text-ultima-chance">
                <h4 className="font-bold text-xl md:text-2xl">ÚLTIMA CHANCE</h4>
              </div>
              
              {/* Center - Timer */}
              <div className="text-center" data-testid="box-countdown">
                <p className="text-sm md:text-base font-semibold mb-2">Preço volta ao normal em:</p>
                <div className="bg-white text-red-600 px-6 py-3 rounded-lg shadow-inner inline-block">
                  <CountdownTimer />
                </div>
              </div>
              
              {/* Right - Empty space for balance */}
              <div className="hidden md:block"></div>
            </div>
            
            {/* Warning message - centered below for all breakpoints */}
            <div className="mt-4 md:mt-6 text-center" data-testid="text-price-reverts">
              <p className="text-sm md:text-base font-semibold text-yellow-200">
                🔥 Depois disso, o preço volta para R$ 555,00! 🔥
              </p>
            </div>
          </div>
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Não seja a ÚNICA mãe sem essas receitas! 😰
          </h3>
          <div className="bg-white border-2 border-baby-pink rounded-lg p-6 mb-6 max-w-2xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Enquanto outras +15.000 mães já têm:</strong><br/>
              ✅ Bebês que comem com prazer<br/>
              ✅ Refeições sem choro e estresse<br/>
              ✅ Desenvolvimento saudável garantido<br/>
              <br/>
              <span className="text-red-600 font-semibold">Você ainda vai continuar lutando sozinha?</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-full flex flex-col items-center relative">
              <div className="arrow-bounce text-3xl md:text-5xl mb-3">👇</div>
              <div className="w-full flex justify-center">
                <CTAButton variant="orange" size="xl" className="w-full md:w-auto text-white bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-xl glow px-4 py-4 text-sm sm:text-base max-w-2xl" trackingEvent="initiateCheckout">
                  <span className="hidden sm:inline">🆘 SIM! QUERO PARAR DE SOFRER AGORA! 🆘</span>
                  <span className="sm:hidden">🆘 PARAR DE SOFRER AGORA! 🆘</span>
                </CTAButton>
              </div>
            </div>
            <div className="bg-green-100 border border-green-300 rounded-lg p-3 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row sm:justify-center text-sm text-green-800 font-semibold space-y-1 sm:space-y-0 sm:space-x-2">
                <span className="flex items-center justify-center">🔐 SSL Seguro</span>
                <span className="hidden sm:inline">|</span>
                <span className="flex items-center justify-center">💳 Todos os cartões</span>
                <span className="hidden sm:inline">|</span>
                <span className="flex items-center justify-center">📱 Acesso imediato</span>
              </div>
            </div>
            <div className="mt-3 px-2">
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                👆 <span className="block sm:inline mt-1 sm:mt-0">Um clique separa você da tranquilidade que você merece</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Seção Anti-Pirataria */}
      <section className="container mx-auto px-3 md:px-4 mb-8 md:mb-12" data-testid="anti-piracy-section">
        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl shadow-lg p-6 md:p-8">
          <div className="text-center">
            {/* Header com ícone de escudo */}
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-baby-blue to-baby-green rounded-full mb-4 shadow-lg">
                <ShieldCheck className="text-white w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="font-poppins text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                🛡️ COMPROMISSO COM A ÉTICA
              </h3>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Valorizamos seu investimento e o trabalho honesto
              </p>
            </div>

            {/* Mensagem principal */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-6 shadow-sm">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
                Ao adquirir este produto, você não está apenas comprando um item, mas sim <strong className="text-baby-pink">investindo no trabalho e na dedicação de uma equipe de profissionais</strong>. Cada detalhe foi pensado para entregar um conteúdo de alta qualidade, e essa criação só é possível com o seu apoio. <strong className="text-gray-800">A pirataria é um crime que prejudica a indústria e desvaloriza o esforço de quem cria.</strong> Compre o original, garanta a qualidade e ajude a construir um mercado mais justo e ético.
              </p>
            </div>

            {/* Benefícios do original */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold text-green-800 text-sm md:text-base mb-1">Conteúdo 100% Original</h4>
                <p className="text-green-700 text-xs md:text-sm">Receitas testadas e aprovadas</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold text-blue-800 text-sm md:text-base mb-1">Suporte Garantido</h4>
                <p className="text-blue-700 text-xs md:text-sm">Atendimento especializado</p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Download className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold text-purple-800 text-sm md:text-base mb-1">Entrega Garantida</h4>
                <p className="text-purple-700 text-xs md:text-sm">Entrega Certa. Acesso imediato.</p>
              </div>
            </div>

            {/* Selo de autenticidade - Agora clicável */}
            <div className="mt-6 text-center">
              <CTAButton 
                variant="accent" 
                size="lg" 
                className="inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300" 
                trackingEvent="initiateCheckout"
                data-testid="button-original-certified"
              >
                <i className="fas fa-certificate mr-2"></i>
                <span className="font-semibold text-sm">GARANTIR PRODUTO ORIGINAL CERTIFICADO</span>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12" data-testid="footer">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center">
            <h4 className="font-poppins text-xl md:text-2xl font-bold text-baby-pink mb-3 md:mb-4">💝 Receitinhas do Bebê</h4>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">Você fez a escolha certa! Mais de 15.000 mães já transformaram a alimentação dos seus bebês com nossas receitas. Agora é a sua vez! 💕</p>
            
            
            
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700">
              <p className="text-gray-500 text-xs md:text-sm" data-testid="copyright">© 2025 Receitinhas do Bebê. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
