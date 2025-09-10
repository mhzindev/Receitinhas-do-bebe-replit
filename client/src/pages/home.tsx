import { CountdownTimer } from "@/components/countdown-timer";
import { SocialProofNotification } from "@/components/social-proof-notification";
import { CTAButton } from "@/components/cta-button";

export default function Home() {
  return (
    <div className="bg-baby-yellow font-inter text-foreground">
      {/* Countdown Banner */}
      <div className="bg-orange text-white py-3 text-center sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <p className="text-sm md:text-base font-bold" data-testid="countdown-banner">
            🔥 ÚLTIMAS HORAS - Oferta Relâmpago! 
            <span className="ml-2">
              <CountdownTimer />
            </span>
          </p>
        </div>
      </div>

      {/* Floating Social Proof Notification */}
      <SocialProofNotification />

      {/* Header Section */}
      <header className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="font-poppins text-4xl md:text-6xl font-bold text-baby-pink mb-4" data-testid="main-title">
            💝 Comidinhas do Bebê 🍼
          </h1>
          <h2 className="font-poppins text-xl md:text-2xl font-semibold text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed" data-testid="main-subtitle">
            "Descubra como milhares de mães conseguiram fazer seus bebês comerem de forma saudável e sem estresse!"
          </h2>
        </div>

        {/* Video Section */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mb-8" data-testid="video-section">
          <div className="relative">
            {/* Mock mobile phone showing Instagram profile */}
            <div className="bg-gradient-to-br from-baby-blue to-baby-green p-8 text-center relative">
              <div className="bg-white rounded-3xl p-6 mx-auto max-w-sm shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-baby-pink rounded-full flex items-center justify-center">
                    <i className="fab fa-instagram text-white text-2xl"></i>
                  </div>
                </div>
                <h3 className="font-poppins font-bold text-lg text-gray-800">@bebecomidinhas</h3>
                <p className="text-sm text-gray-600 mt-2">Dicas de Armazenamento de Alimentos para Bebês</p>
                <div className="mt-4 bg-baby-yellow rounded-lg p-4">
                  <p className="text-xs text-gray-700">📱 Vídeo Exclusivo</p>
                </div>
              </div>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-90 rounded-full w-20 h-20 flex items-center justify-center shadow-lg hover:scale-105 transition-transform" data-testid="play-button">
                  <i className="fas fa-play text-baby-pink text-2xl ml-1"></i>
                </button>
              </div>
            </div>
            <div className="bg-orange text-white text-center py-2">
              <p className="font-bold text-sm">📢 ASSISTA URGENTE</p>
            </div>
          </div>
        </div>
      </header>

      {/* Flash Offer Section */}
      <section className="bg-orange text-white py-6 mb-8" data-testid="flash-offer-section">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold mb-2">
            ⚡ OFERTA RELÂMPAGO - Só hoje! ⚡
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <p className="text-lg line-through opacity-75" data-testid="original-price">De R$ 197,00</p>
              <p className="text-4xl md:text-5xl font-bold" data-testid="sale-price">
                por apenas <span className="text-baby-yellow">R$ 19,90</span>
              </p>
            </div>
            <div className="bg-destructive text-white px-6 py-3 rounded-full bounce-gentle" data-testid="discount-badge">
              <p className="font-bold text-lg">🔥 95% OFF só hoje!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Content Section */}
      <section className="container mx-auto px-4 mb-12" data-testid="product-content-section">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            🎁 O que você vai receber:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-baby-yellow rounded-lg" data-testid="product-item-1">
                <div className="w-8 h-8 bg-baby-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white"></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-gray-800">🎁 eBook Comidinhas do Bebê</h4>
                  <p className="text-gray-600">+100 receitas organizadas por idade e textura</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-baby-blue bg-opacity-30 rounded-lg" data-testid="product-item-2">
                <div className="w-8 h-8 bg-baby-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-plus text-white"></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-gray-800">🌙 Guia Completo do Sono do Bebê</h4>
                  <p className="text-gray-600">Técnicas comprovadas para noites tranquilas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-baby-pink bg-opacity-30 rounded-lg" data-testid="product-item-3">
                <div className="w-8 h-8 bg-baby-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-plus text-white"></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-gray-800">🤱 Desmame Sem Traumas</h4>
                  <p className="text-gray-600">Transição suave e natural</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-baby-green bg-opacity-30 rounded-lg" data-testid="product-item-4">
                <div className="w-8 h-8 bg-baby-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-plus text-white"></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-gray-800">📅 Plano Alimentar Semanal</h4>
                  <p className="text-gray-600">Cardápios organizados e balanceados</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-accent bg-opacity-30 rounded-lg" data-testid="product-item-5">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-plus text-white"></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-gray-800">✅ Checklist de Introdução Alimentar</h4>
                  <p className="text-gray-600">Passo a passo detalhado</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-orange bg-opacity-20 rounded-lg" data-testid="product-item-6">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-plus text-white"></i>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-gray-800">🔄 Lista de Substituições Inteligentes</h4>
                  <p className="text-gray-600">Alternativas nutritivas e práticas</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button 1 */}
          <div className="text-center mt-8">
            <CTAButton variant="primary" size="lg">
              💖 SIM! QUERO AS RECEITAS AGORA 💖
            </CTAButton>
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

      {/* Social Proof Section */}
      <section className="container mx-auto px-4 mb-12" data-testid="testimonials-section">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Veja o que as mamães estão falando! 📱
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* WhatsApp Message 1 */}
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400" data-testid="testimonial-whatsapp-1">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Ana Paula</p>
                  <p className="text-sm text-gray-600 mt-1">"Fiz a papinha de batata doce hoje, meu bebê amou! Obrigada! 😍"</p>
                  <p className="text-xs text-gray-500 mt-2">14:23 ✓✓</p>
                </div>
              </div>
            </div>

            {/* Instagram Message 1 */}
            <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-400" data-testid="testimonial-instagram-1">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                  <i className="fab fa-instagram text-white"></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">@mamae_carol</p>
                  <p className="text-sm text-gray-600 mt-1">"Salvou minha vida! As receitas são maravilhosas! 💕"</p>
                  <p className="text-xs text-gray-500 mt-2">2h • Direct</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Message 2 */}
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400" data-testid="testimonial-whatsapp-2">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Fernanda</p>
                  <p className="text-sm text-gray-600 mt-1">"Meu filho que era super seletivo agora come de tudo! 🙌"</p>
                  <p className="text-xs text-gray-500 mt-2">09:45 ✓✓</p>
                </div>
              </div>
            </div>

            {/* Instagram Message 2 */}
            <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-400" data-testid="testimonial-instagram-2">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                  <i className="fab fa-instagram text-white"></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">@ju_maternidade</p>
                  <p className="text-sm text-gray-600 mt-1">"Amei as receitas! Fáceis e nutritivas 🍼✨"</p>
                  <p className="text-xs text-gray-500 mt-2">1h • Direct</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Message 3 */}
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400" data-testid="testimonial-whatsapp-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Patrícia</p>
                  <p className="text-sm text-gray-600 mt-1">"Valeu cada centavo! Recomendo para todas as mães! 👏"</p>
                  <p className="text-xs text-gray-500 mt-2">16:12 ✓✓</p>
                </div>
              </div>
            </div>

            {/* Instagram Message 3 */}
            <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-400" data-testid="testimonial-instagram-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                  <i className="fab fa-instagram text-white"></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">@mama_lucia</p>
                  <p className="text-sm text-gray-600 mt-1">"Economizei muito tempo! Receitas práticas e gostosas! 🥰"</p>
                  <p className="text-xs text-gray-500 mt-2">4h • Direct</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button 2 */}
          <div className="text-center mt-8">
            <CTAButton variant="secondary" size="lg">
              🌟 QUERO TRANSFORMAR A ALIMENTAÇÃO DO MEU BEBÊ AGORA! 🌟
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 mb-12" data-testid="benefits-section">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Os benefícios que você vai ter:
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <div className="bg-gradient-to-r from-baby-green to-baby-blue rounded-2xl shadow-lg p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-shield-alt text-baby-green text-3xl"></i>
            </div>
            <h3 className="font-poppins text-2xl md:text-3xl font-bold text-white mb-4">
              Garantia Mamãe Tranquila - 7 dias 🛡️
            </h3>
            <p className="text-white text-lg leading-relaxed mb-6">
              Se por qualquer motivo você não estiver satisfeita com o conteúdo, 
              devolvemos 100% do seu dinheiro em até 7 dias. 
              <strong>ZERO risco para você!</strong>
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block" data-testid="guarantee-badge">
              <p className="text-white font-bold">✅ Reembolso Total Garantido</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 mb-12" data-testid="final-cta-section">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Não perca essa oportunidade! 🚨
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Milhares de mães já transformaram a alimentação dos seus bebês. 
            Agora é a sua vez de ter refeições tranquilas e um bebê saudável!
          </p>
          
          <div className="space-y-4">
            <div className="w-full md:w-auto">
              <CTAButton variant="orange" size="xl" className="w-full md:w-auto">
                💖 QUERO GARANTIR MINHA TRANQUILIDADE AGORA! 💖
              </CTAButton>
            </div>
            <p className="text-sm text-gray-500" data-testid="security-message">🔒 Compra 100% segura e protegida</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12" data-testid="footer">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="font-poppins text-2xl font-bold text-baby-pink mb-4">💝 Comidinhas do Bebê</h4>
            <p className="text-gray-400 mb-6">Transformando a alimentação infantil com amor e carinho</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-baby-pink transition-colors" data-testid="link-privacy">Política de Privacidade</a>
              <a href="#" className="hover:text-baby-pink transition-colors" data-testid="link-terms">Termos de Uso</a>
              <a href="#" className="hover:text-baby-pink transition-colors" data-testid="link-contact">Contato</a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-500 text-sm" data-testid="copyright">
                © 2024 Comidinhas do Bebê. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
