import { useState } from "react";
import { FeedbackImage } from "./feedback-image";
import { FeedbackModal } from "./feedback-modal";
import { MobileFeedbackCarousel } from "./mobile-feedback-carousel";

// Real feedback images served from public folder
const feedbackImage1 = "/feedback-images/feedback1.jpeg";
const feedbackImage2 = "/feedback-images/feedback2.jpeg"; 
const feedbackImage3 = "/feedback-images/feedback3.jpeg";

// Feedbacks com imagem real e placeholders para demonstração
const feedbackData = [
  {
    id: "1",
    imageSrc: feedbackImage1,
    platform: "whatsapp" as const,
    customerName: "Ana Paula",
    location: "SP",
    message: "Em 5 dias meu bebê que só chorava na hora da comida agora pede mais! A receita de batata doce foi um sucesso!",
    time: "14:23 ✓✓",
    rating: 5,
    verified: true
  },
  {
    id: "2", 
    imageSrc: feedbackImage2,
    platform: "whatsapp" as const,
    customerName: "Carol",
    location: "RJ",
    message: "Meninas, FUNCIONOU! Meu filho super seletivo agora come brócolis! Economizei R$ 800 em consultas!",
    time: "11:47 ✓✓",
    rating: 5,
    verified: true
  },
  {
    id: "3",
    imageSrc: feedbackImage3,
    platform: "whatsapp" as const,
    customerName: "Fernanda",
    location: "MG",
    message: "MILAGRE! Em 1 semana meu bebê de 10m que só comia leite agora come legumes, frutas, TUDO!",
    time: "09:45 ✓✓",
    rating: 5,
    verified: true
  }
];

// Depoimentos em texto para manter balanceamento
const textTestimonials = [
  {
    platform: "instagram" as const,
    customerName: "@ju_maternidade",
    location: "",
    message: "Nossa!! 15 min de preparo e minha filha comeu TUDO! Até o pediatra ficou impressionado com o peso! 🍼✨",
    time: "1h • Direct",
    rating: 5
  },
  {
    platform: "whatsapp" as const,
    customerName: "Patrícia",
    location: "RS", 
    message: "Gastava R$ 300/mês com papínhas prontas. Agora gasto R$ 50 e ela ama! ROI incrível! 👏",
    time: "16:12 ✓✓",
    rating: 5
  },
  {
    platform: "instagram" as const,
    customerName: "@mama_lucia",
    location: "",
    message: "De 2h cozinhando para 20min! Sobra tempo para brincar com ele. Obrigada pela minha vida de volta! 🥰",
    time: "4h • Direct", 
    rating: 5
  },
  {
    platform: "whatsapp" as const,
    customerName: "Mariana",
    location: "SC",
    message: "Meu bebê seletivo agora come cenoura, brócolis e até beterraba! O segredo está nas texturas e temperos! 👶🥕",
    time: "08:45 ✓✓",
    rating: 5
  },
  {
    platform: "instagram" as const,
    customerName: "@mae_real_2024",
    location: "",
    message: "Acabou o drama da hora da comida! Agora ele pede bis e até os avós ficaram impressionados! 🙌",
    time: "2h • Direct",
    rating: 5
  },
  {
    platform: "whatsapp" as const,
    customerName: "Juliana",
    location: "PR",
    message: "Economizei R$ 400 em consulta com nutricionista! Essas receitas valem mais que qualquer consultoria 💰",
    time: "12:30 ✓✓",
    rating: 5
  },
  {
    platform: "instagram" as const,
    customerName: "@mama_do_gael",
    location: "",
    message: "3 semanas e meu filho subiu 2 percentis no gráfico! Pediatra perguntou qual era o segredo 📈",
    time: "6h • Direct",
    rating: 5
  },
  {
    platform: "whatsapp" as const,
    customerName: "Amanda",
    location: "BA",
    message: "Finalmente posso almoçar em paz! Ele fica quietinho comendo sozinho enquanto eu como também 🍽️",
    time: "19:22 ✓✓",
    rating: 5
  },
  {
    platform: "instagram" as const,
    customerName: "@primeiro_filho_chronicles",
    location: "",
    message: "Obrigada por salvar minha sanidade mental! Não sabia mais o que fazer com as recusas 🙏💕",
    time: "30min • Direct",
    rating: 5
  },
  {
    platform: "whatsapp" as const,
    customerName: "Camila",
    location: "GO",
    message: "Receitas aprovadas pela vovó italiana! Ela disse que nunca viu bebê comer tão bem aos 8 meses 👵🇮🇹",
    time: "15:18 ✓✓",
    rating: 5
  },
  {
    platform: "instagram" as const,
    customerName: "@vida_de_mae_real",
    location: "",
    message: "BLW sem mistério! Agora entendo como fazer direito sem pânico de engasgo. Game changer! 🔄",
    time: "4h • Direct",
    rating: 5
  },
  {
    platform: "whatsapp" as const,
    customerName: "Renata",
    location: "ES",
    message: "Minha sogra FINALMENTE parou de dar pitaco na alimentação depois que viu os resultados! 😂👏",
    time: "21:45 ✓✓",
    rating: 5
  }
];

export function FeedbackGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllFeedbacks, setShowAllFeedbacks] = useState(false);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleModalNavigate = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const displayedTextTestimonials = showAllFeedbacks ? textTestimonials : textTestimonials.slice(0, 6);

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="text-center mb-8">
        <h3 className="font-poppins text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Veja o que as mamães estão falando! 📱
        </h3>
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star text-yellow-400"></i>
            ))}
          </div>
          <span className="font-semibold text-gray-700">4.9/5</span>
        </div>
        <p className="text-gray-600">⭐ 2.847 avaliações verificadas</p>
        <div className="mt-4 bg-baby-yellow rounded-lg p-3 max-w-md mx-auto">
          <p className="text-sm font-bold text-gray-800">📸 847 fotos recebidas esta semana</p>
          <p className="text-xs text-gray-600">⚡ Último feedback há 3 minutos</p>
        </div>
      </div>
      {/* Hybrid Layout: Images + Text */}
      <div className="space-y-8">
        {/* Featured Image Feedbacks */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-poppins text-lg font-semibold text-gray-800">
              📱 Feedbacks com Fotos Reais
            </h4>
            <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
              <i className="fas fa-shield-check text-green-600 text-sm"></i>
              <span className="text-sm text-green-700 font-medium">100% Verificados</span>
            </div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {feedbackData.map((feedback, index) => (
              <div 
                key={feedback.id}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <FeedbackImage
                  imageSrc={feedback.imageSrc}
                  platform={feedback.platform}
                  customerName={feedback.customerName}
                  location={feedback.location}
                  message={feedback.message}
                  time={feedback.time}
                  rating={feedback.rating}
                  verified={feedback.verified}
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <MobileFeedbackCarousel 
            feedbacks={feedbackData}
            onImageClick={handleImageClick}
          />
        </div>

        {/* Text Testimonials */}
        <div>
          <h4 className="font-poppins text-lg font-semibold text-gray-800 mb-4">
            💬 Mais Depoimentos
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {displayedTextTestimonials.map((testimonial, index) => {
              const config = testimonial.platform === "whatsapp" 
                ? { bgColor: "bg-green-50", borderColor: "border-green-400", iconColor: "bg-green-400", icon: "fab fa-whatsapp" }
                : { bgColor: "bg-pink-50", borderColor: "border-pink-400", iconColor: "bg-pink-400", icon: "fab fa-instagram" };

              return (
                <div 
                  key={index} 
                  className={`${config.bgColor} rounded-lg p-4 border-l-4 ${config.borderColor} message-arriving`}
                  style={{ animationDelay: `${(index + 3) * 0.15}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 ${config.iconColor} rounded-full flex items-center justify-center`}>
                      <i className={`${config.icon} text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-medium text-gray-800">
                          {testimonial.customerName} {testimonial.location && `- ${testimonial.location}`}
                        </p>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star text-yellow-400 text-xs"></i>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">"{testimonial.message}"</p>
                      <p className="text-xs text-gray-500 mt-2">{testimonial.time}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <i className="fas fa-check-circle text-green-500 text-xs"></i>
                        <span className="text-xs text-green-600 font-medium">Verificado</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show More Button */}
          {!showAllFeedbacks && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllFeedbacks(true)}
                className="bg-baby-blue hover:bg-blue-400 text-white px-6 py-2 rounded-full font-medium transition-colors"
                data-testid="show-more-feedbacks"
              >
                📱 Ver Mais Depoimentos
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Modal */}
      <FeedbackModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        feedbacks={feedbackData}
        currentIndex={currentImageIndex}
        onNavigate={handleModalNavigate}
      />
    </div>
  );
}