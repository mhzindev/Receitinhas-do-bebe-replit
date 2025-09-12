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
          <p className="text-gray-800 text-sm mt-3 font-medium">
            💳 Acesso por apenas <span className="font-bold text-pink-700">R$ 12,90</span> • Garantia de 7 dias
          </p>
        </div>
      </header>
      {/* Simple Trust Section */}
      <section className="container mx-auto px-3 md:px-4 mb-8" data-testid="trust-section">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="flex justify-center items-center space-x-6 md:space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <Shield className="text-green-600 w-5 h-5" />
              <span className="text-sm font-bold text-gray-800">Garantia 7 dias</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="text-pink-600 w-5 h-5" />
              <span className="text-sm font-bold text-gray-800">Receitas aprovadas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-blue-600 w-5 h-5" />
              <span className="text-sm font-bold text-gray-800">Acesso imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="container mx-auto px-4 mb-12" data-testid="what-you-receive">
        <div className="text-center mb-8">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            O que você vai receber:
          </h3>
        </div>
      
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-6 md:p-8">
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-5 bg-yellow-100 border border-yellow-300 rounded-lg shadow-sm" data-testid="product-item-1">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Check className="text-white w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-gray-900">📚 eBook Receitinhas do Bebê</h4>
                <p className="text-gray-700 font-medium">Mais de 100 receitas organizadas por idade e textura</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-5 bg-blue-100 border border-blue-300 rounded-lg shadow-sm" data-testid="product-item-2">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Check className="text-white w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-gray-900">🌙 Guia do Sono do Bebê</h4>
                <p className="text-gray-700 font-medium">Como a alimentação afeta o sono e técnicas para noites tranquilas</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 bg-green-100 border border-green-300 rounded-lg shadow-sm" data-testid="product-item-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Check className="text-white w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-gray-900">📅 Plano Alimentar Semanal</h4>
                <p className="text-gray-700 font-medium">Cardápios organizados com lista de compras incluída</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 bg-pink-100 border border-pink-300 rounded-lg shadow-sm" data-testid="product-item-4">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Check className="text-white w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-gray-900">🔄 Bônus: Lista de Substituições</h4>
                <p className="text-gray-700 font-medium">Alternativas saudáveis para qualquer ingrediente</p>
              </div>
            </div>
          </div>

          {/* Simple, honest pricing */}
          <div className="mt-8 text-center bg-yellow-100 border-2 border-yellow-300 rounded-xl p-6 shadow-lg" data-testid="price-card">
            <h4 className="font-poppins text-xl font-bold text-gray-900 mb-4">
              Acesso completo por:
            </h4>
            <div className="bg-green-600 text-white text-3xl md:text-4xl font-black py-4 px-6 rounded-lg shadow-xl inline-block border-2 border-green-700">
              R$ 12,90
            </div>
            <p className="text-gray-800 text-sm mt-3 font-medium">
              💳 Ou 2x de R$ 6,45 sem juros
            </p>
            <p className="text-pink-700 font-bold mt-2">
              ✨ Preço acessível para ajudar o maior número de famílias
            </p>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-8">
            <CTAButton 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto text-lg font-bold" 
              trackingEvent="initiateCheckout"
            >
              Quero transformar as refeições do meu bebê
            </CTAButton>
            <p className="text-gray-800 text-sm mt-3 font-medium">
              🔒 Pagamento seguro • ⚡ Acesso imediato • ✅ Garantia 7 dias
            </p>
          </div>
        </div>
      </section>
      {/* Simple guarantee section */}
      <section className="container mx-auto px-4 mb-8" data-testid="guarantee-section">
        <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 text-center shadow-lg">
          <h3 className="font-poppins text-xl font-bold text-green-800 mb-3">
            🔒 Garantia de 7 dias
          </h3>
          <p className="text-gray-800 font-medium">
            Se em 7 dias você não notar melhora na alimentação do seu bebê, 
            devolvemos 100% do seu dinheiro. Sem perguntas, sem complicação.
          </p>
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

            <div className="bg-yellow-100 border-2 border-pink-400 rounded-lg p-6 text-center mt-8 shadow-md" data-testid="empathy-message">
              <p className="font-poppins text-lg font-bold text-gray-900">
                ➡️ Você NÃO está sozinha, mamãe! 🤗
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Solution Section */}
      <section className="container mx-auto px-4 mb-12" data-testid="solution-section">
        <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl shadow-xl border-2 border-blue-700 p-8 text-center">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-md">
            A solução que vai transformar a alimentação do seu bebê! ✨
          </h3>
          <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-sm font-medium">
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
      {/* Final CTA - Simple and Direct */}
      <section className="container mx-auto px-4 mb-12" data-testid="final-cta-section">
        <div className="bg-baby-yellow/20 rounded-xl p-8 text-center">
          <h3 className="font-poppins text-xl md:text-2xl font-bold text-gray-800 mb-6">
            Pronta para transformar as refeições do seu bebê?
          </h3>
          <CTAButton 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto text-lg font-bold mb-4" 
            trackingEvent="initiateCheckout"
          >
            Sim, quero as receitas
          </CTAButton>
          <p className="text-gray-600 text-sm">
            💳 R$ 12,90 • 📱 Acesso imediato • 🛡️ Garantia de 7 dias
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12" data-testid="footer">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center">
            <h4 className="font-poppins text-xl md:text-2xl font-bold text-baby-pink mb-3 md:mb-4">💝 Receitinhas do Bebê</h4>
            <p className="text-gray-400 mb-4 text-sm md:text-base">Transforme as refeições do seu bebê com receitas práticas e saudáveis 💕</p>
            
            
            
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700">
              <p className="text-gray-500 text-xs md:text-sm" data-testid="copyright">© 2025 Receitinhas do Bebê. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
