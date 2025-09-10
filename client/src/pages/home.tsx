import { CountdownTimer } from "@/components/countdown-timer";
import { SocialProofNotification } from "@/components/social-proof-notification";
import { CTAButton } from "@/components/cta-button";
import { FeedbackGallery } from "@/components/feedback-gallery";

export default function Home() {
  return (
    <div className="bg-baby-yellow font-inter text-foreground w-full overflow-x-hidden">
      {/* Countdown Banner */}
      <div className="bg-red-600 text-white py-2 md:py-3 text-center sticky top-0 z-50 w-full">
        <div className="container mx-auto px-2 md:px-4 max-w-full">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-4">
            <p className="text-xs sm:text-sm md:text-base font-bold leading-tight px-2" data-testid="countdown-banner">
              🔥 APENAS 47 VAGAS RESTANTES! 
            </p>
            <div className="flex items-center space-x-1 md:space-x-2">
              <span className="text-xs md:text-sm">⏰</span>
              <CountdownTimer />
              <span className="text-xs md:text-sm">restantes</span>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Social Proof Notification */}
      <SocialProofNotification />
      {/* Header Section */}
      <header className="container mx-auto px-3 md:px-4 py-4 md:py-8">
        <div className="text-center">
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-baby-pink mb-3 md:mb-4 leading-tight" data-testid="main-title">
            💝 Receitinhas do Bebê 🍼
          </h1>
          <h2 className="font-poppins text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-gray-700 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-2" data-testid="main-subtitle">
            "Descubra como milhares de mães conseguiram fazer seus bebês comerem de forma saudável e sem estresse!"
          </h2>
        </div>

        {/* Credibility Certificate Section */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden mb-6 md:mb-8 w-full" data-testid="credibility-section">
          <div className="relative">
            {/* Certificate Design */}
            <div className="bg-gradient-to-br from-baby-blue to-baby-green p-4 md:p-8 text-center relative">
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 mx-auto max-w-lg shadow-xl border-4 border-gold relative">
                {/* Certificate Header */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-baby-green rounded-full flex items-center justify-center border-4 border-baby-yellow">
                    <i className="fas fa-certificate text-white text-xl md:text-2xl"></i>
                  </div>
                </div>
                
                {/* Certificate Title */}
                <h3 className="font-poppins font-bold text-lg md:text-xl text-gray-800 mb-2">
                  CERTIFICADO DE EFICÁCIA
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-4">Resultado Comprovado Cientificamente</p>
                
                {/* Main Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-baby-green">94%</div>
                    <p className="text-xs text-gray-700">Taxa de Sucesso</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-baby-pink">15.000+</div>
                    <p className="text-xs text-gray-700">Famílias Atendidas</p>
                  </div>
                </div>
                
                {/* Certification Text */}
                <div className="bg-baby-yellow bg-opacity-30 rounded-lg p-3 md:p-4 mb-4">
                  <p className="text-xs md:text-sm text-gray-700 font-semibold">
                    ✅ Receitas Aprovadas por Nutricionistas<br/>
                    ✅ Metodologia Validada Cientificamente<br/>
                    ✅ Resultados em Menos de 7 Dias
                  </p>
                </div>
                
                {/* Authority Signature */}
                <div className="border-t-2 border-gray-200 pt-3">
                  <p className="text-xs text-gray-600">Validado por:</p>
                  <p className="font-bold text-sm text-gray-800">Conselho de Nutrição Infantil</p>
                  <p className="text-xs text-gray-500">CRN - Registro Profissional</p>
                </div>
                
                {/* Corner Stamps */}
                <div className="absolute top-2 right-2">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2">
                  <div className="w-8 h-8 bg-baby-green rounded-full flex items-center justify-center">
                    <i className="fas fa-star text-white text-xs"></i>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Banner */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-2">
              <p className="font-bold text-xs md:text-sm">🏆 COMPROVAÇÃO CIENTÍFICA DE RESULTADOS</p>
            </div>
          </div>
        </div>
      </header>
      {/* Trust & Credibility Section */}
      <section className="container mx-auto px-3 md:px-4 mb-6 md:mb-8" data-testid="trust-section">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
            <div className="flex flex-col items-center" data-testid="trust-item-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-baby-green rounded-full flex items-center justify-center mb-2">
                <i className="fas fa-shield-alt text-white text-sm md:text-lg"></i>
              </div>
              <p className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">Satisfação Garantida</p>
              <p className="text-xs text-gray-500">ou seu dinheiro de volta</p>
            </div>
            
            <div className="flex flex-col items-center" data-testid="trust-item-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-baby-blue rounded-full flex items-center justify-center mb-2">
                <i className="fas fa-users text-white text-sm md:text-lg"></i>
              </div>
              <p className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">+15.000 Famílias</p>
              <p className="text-xs text-gray-500">já transformadas</p>
            </div>
            
            <div className="flex flex-col items-center" data-testid="trust-item-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-baby-pink rounded-full flex items-center justify-center mb-2">
                <i className="fas fa-star text-white text-sm md:text-lg"></i>
              </div>
              <p className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">94% Aprovação</p>
              <p className="text-xs text-gray-500">dos bebês aceitam</p>
            </div>
            
            <div className="flex flex-col items-center" data-testid="trust-item-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange rounded-full flex items-center justify-center mb-2">
                <i className="fas fa-certificate text-white text-sm md:text-lg"></i>
              </div>
              <p className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">Aprovado por</p>
              <p className="text-xs text-gray-500">nutricionistas</p>
            </div>
          </div>
        </div>
      </section>
      {/* Flash Offer Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange text-white py-6 md:py-8 mb-6 md:mb-8" data-testid="flash-offer-section">
        <div className="container mx-auto px-3 md:px-4 text-center">
          <h3 className="font-poppins text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight">
            ⚡ OFERTA RELÂMPAGO - Só hoje! ⚡
          </h3>
          
          {/* Value Breakdown */}
          <div className="bg-white bg-opacity-10 rounded-lg p-3 md:p-4 mb-4 md:mb-6 max-w-2xl mx-auto">
            <p className="text-xs md:text-sm mb-2">📊 Valor individual dos produtos:</p>
            <div className="text-xs md:text-sm space-y-1">
              <div className="flex justify-between">
                <span>• eBook Receitinhas do Bebê</span>
                <span>R$ 197,00</span>
              </div>
              <div className="flex justify-between">
                <span>• Guia do Sono do Bebê</span>
                <span>R$ 97,00</span>
              </div>
              <div className="flex justify-between">
                <span>• Desmame Sem Traumas</span>
                <span>R$ 97,00</span>
              </div>
              <div className="flex justify-between">
                <span>• Plano Alimentar + Checklist</span>
                <span>R$ 97,00</span>
              </div>
              <div className="flex justify-between">
                <span>• Bônus Substituições</span>
                <span>R$ 67,00</span>
              </div>
              <div className="border-t border-white border-opacity-30 pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>VALOR TOTAL:</span>
                  <span>R$ 555,00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 px-2">
            <div className="text-center w-full md:w-auto">
              <p className="text-lg md:text-2xl line-through opacity-75" data-testid="original-price">De R$ 555,00</p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight break-words" data-testid="sale-price">
                por apenas <span className="text-baby-yellow block sm:inline whitespace-nowrap">R$ 12,90</span>
              </p>
              <p className="text-sm mt-2">💳 2x de R$ 6,45 sem juros</p>
            </div>
            <div className="bg-red-700 text-white px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full bounce-gentle shadow-2xl flex-shrink-0" data-testid="discount-badge">
              <p className="font-bold text-base md:text-lg lg:text-xl">🔥 98% OFF!</p>
              <p className="text-xs md:text-sm">ECONOMIA DE R$ 542,10!</p>
            </div>
          </div>
          
          {/* Live Counter */}
          <div className="mt-4 md:mt-6 bg-baby-yellow text-gray-800 rounded-lg p-3 max-w-md mx-auto">
            <p className="text-xs md:text-sm font-bold">👥 1.247 mães compraram hoje</p>
            <p className="text-xs">⚡ Última compra há 2 minutos</p>
          </div>
        </div>
      </section>
      {/* Product Content Section */}
      <section className="container mx-auto px-3 md:px-4 mb-8 md:mb-12" data-testid="product-content-section">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8">
          <h3 className="font-poppins text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">
            🎁 O que você vai receber:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-baby-yellow rounded-lg" data-testid="product-item-1">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-baby-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-xs md:text-sm"></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm md:text-lg text-gray-800 leading-tight">🎁 eBook Receitinhas do Bebê</h4>
                  <p className="text-xs md:text-base text-gray-600">+100 receitas organizadas por idade e textura</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-baby-blue bg-opacity-30 rounded-lg" data-testid="product-item-2">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-baby-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-xs md:text-sm"></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm md:text-lg text-gray-800 leading-tight">🌙 Guia Completo do Sono do Bebê</h4>
                  <p className="text-xs md:text-base text-gray-600">Técnicas comprovadas para noites tranquilas</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-baby-pink bg-opacity-30 rounded-lg" data-testid="product-item-3">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-baby-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-xs md:text-sm"></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm md:text-lg text-gray-800 leading-tight">🤱 Desmame Sem Traumas</h4>
                  <p className="text-xs md:text-base text-gray-600">Transição suave e natural</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-baby-green bg-opacity-30 rounded-lg" data-testid="product-item-4">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-baby-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-xs md:text-sm"></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm md:text-lg text-gray-800 leading-tight">📅 Plano Alimentar Semanal</h4>
                  <p className="text-xs md:text-base text-gray-600">Cardápios organizados e balanceados</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-accent bg-opacity-30 rounded-lg" data-testid="product-item-5">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-baby-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-xs md:text-sm"></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm md:text-lg text-gray-800 leading-tight">✅ Checklist de Introdução Alimentar</h4>
                  <p className="text-xs md:text-base text-gray-600">Passo a passo detalhado</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-orange bg-opacity-20 rounded-lg" data-testid="product-item-6">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-baby-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-xs md:text-sm"></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm md:text-lg text-gray-800 leading-tight">🔄 Lista de Substituições Inteligentes</h4>
                  <p className="text-xs md:text-base text-gray-600">Alternativas nutritivas e práticas</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button 1 */}
          <div className="text-center mt-6 md:mt-8 relative">
            <div className="arrow-bounce text-3xl md:text-4xl mb-2">👇</div>
            <CTAButton variant="primary" size="lg" className="glow w-full sm:w-auto px-4 py-4 text-sm sm:text-base">
              🎯 SIM! QUERO ACABAR COM O ESTRESSE DAS REFEIÇÕES 🎯
            </CTAButton>
            <p className="text-xs text-gray-500 mt-2 px-2">💳 Acesso imediato | 🔒 Pagamento 100% seguro | ✅ Garantia de 7 dias</p>
          </div>
        </div>
      </section>
      {/* Personal Story Section */}
      <section className="container mx-auto px-3 md:px-4 mb-8 md:mb-12" data-testid="story-section">
        <div className="bg-gradient-to-br from-baby-pink to-baby-blue bg-opacity-20 rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-baby-pink rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <i className="fas fa-heart text-white text-2xl md:text-3xl"></i>
              </div>
              <h3 className="font-poppins text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                A história que mudou tudo... 💕
              </h3>
            </div>
            
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-md mb-4 md:mb-6">
              <div className="italic text-gray-700 text-sm md:text-lg leading-relaxed text-center">
                <p className="mb-3 md:mb-4">
                  "Eu era uma mãe desesperada. Meu filho de 8 meses chorava a cada refeição, 
                  recusava tudo que eu oferecia e eu me sentia a pior mãe do mundo..."
                </p>
                <p className="mb-3 md:mb-4">
                  "Até que descobri que o problema não era comigo ou com ele - 
                  era simplesmente a FORMA como eu estava oferecendo a comida."
                </p>
                <p className="font-semibold text-baby-pink">
                  "Em apenas 3 dias usando essas receitas, meu filho começou a comer com prazer. 
                  Hoje ele tem 3 anos e é o bebê mais saudável da creche!" 
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="font-poppins font-semibold text-gray-800 text-sm md:text-lg">
                Se funcionou comigo e com mais de 15.000 mães...
              </p>
              <p className="font-poppins font-bold text-baby-pink text-lg md:text-xl">
                VAI FUNCIONAR COM VOCÊ TAMBÉM! 💪
              </p>
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
          <FeedbackGallery />

          {/* CTA Button 2 */}
          <div className="text-center mt-6 md:mt-8">
            <CTAButton variant="orange" size="lg" className="w-full sm:w-auto px-4 py-4 text-sm sm:text-base">
              ⚡ GARANTIR MINHA TRANQUILIDADE AGORA! ⚡
            </CTAButton>
            <p className="text-xs text-gray-500 mt-2 px-2">👆 Clique e transforme a alimentação do seu bebê em 5 minutos</p>
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
                  <h4 className="font-semibold text-gray-800">Reembolso Instantâneo</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Dinheiro de volta em <strong>até 24 horas</strong> via PIX, sem burocracias ou perguntas incômodas.
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
            <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <i className="fas fa-exclamation-triangle text-yellow-400 text-xl animate-pulse"></i>
                <h4 className="font-bold text-lg md:text-xl">ÚLTIMA CHANCE</h4>
                <i className="fas fa-exclamation-triangle text-yellow-400 text-xl animate-pulse"></i>
              </div>
              
              <div className="text-center">
                <p className="text-sm md:text-base font-semibold mb-2">Preço volta ao normal em:</p>
                <div className="bg-white text-red-600 px-4 py-2 rounded-lg shadow-inner">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-clock text-red-600"></i>
                    <CountdownTimer />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
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
              <strong>Enquanto outras 15.000 mães já têm:</strong><br/>
              ✅ Bebês que comem com prazer<br/>
              ✅ Refeições sem choro e estresse<br/>
              ✅ Desenvolvimento saudável garantido<br/>
              <br/>
              <span className="text-red-600 font-semibold">Você ainda vai continuar lutando sozinha?</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-full md:w-auto relative">
              <div className="arrow-bounce text-3xl md:text-5xl mb-3">👇</div>
              <CTAButton variant="orange" size="xl" className="w-full md:w-auto text-white bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-xl glow px-4 py-4 text-sm sm:text-base">
                🆘 SIM! QUERO PARAR DE SOFRER AGORA! 🆘
              </CTAButton>
            </div>
            <div className="bg-green-100 border border-green-300 rounded-lg p-3 max-w-md mx-auto">
              <p className="text-sm text-green-800 font-semibold">🔐 SSL Seguro | 💳 Todos os cartões | 📱 Acesso imediato</p>
            </div>
            <p className="text-xs text-gray-600">👆 Um clique separa você da tranquilidade que você merece</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12" data-testid="footer">
        <div className="container mx-auto px-3 md:px-4">
          <div className="text-center">
            <h4 className="font-poppins text-xl md:text-2xl font-bold text-baby-pink mb-3 md:mb-4">💝 Receitinhas do Bebê</h4>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">Transformando a alimentação infantil com amor e carinho</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-8 text-xs md:text-sm text-gray-400">
              <a href="#" className="hover:text-baby-pink transition-colors" data-testid="link-privacy">Política de Privacidade</a>
              <a href="#" className="hover:text-baby-pink transition-colors" data-testid="link-terms">Termos de Uso</a>
              <a href="#" className="hover:text-baby-pink transition-colors" data-testid="link-contact">Contato</a>
            </div>
            
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700">
              <p className="text-gray-500 text-xs md:text-sm" data-testid="copyright">© 2025 Receitinhas do Bebê. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
