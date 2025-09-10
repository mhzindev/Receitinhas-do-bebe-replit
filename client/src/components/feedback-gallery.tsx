import { useState } from "react";
import { FeedbackImage } from "./feedback-image";
import { FeedbackModal } from "./feedback-modal";

// Mock data for now - será substituído por imagens reais
const feedbackData = [
  {
    id: "1",
    imageSrc: "/api/placeholder/400/600", // Será substituído pela imagem real
    platform: "whatsapp" as const,
    customerName: "Ana Paula",
    location: "SP",
    message: "Em 3 dias meu bebê que só chorava na hora da comida agora pede mais! A receita de batata doce foi um sucesso!",
    time: "14:23 ✓✓",
    rating: 5,
    verified: true
  },
  {
    id: "2", 
    imageSrc: "/api/placeholder/400/600",
    platform: "instagram" as const,
    customerName: "Carol",
    location: "RJ",
    message: "Meninas, FUNCIONOU! Meu filho super seletivo agora come brócolis! Economizei R$ 800 em consultas!",
    time: "2h • Direct",
    rating: 5,
    verified: true
  },
  {
    id: "3",
    imageSrc: "/api/placeholder/400/600", 
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

  const displayedTextTestimonials = showAllFeedbacks ? textTestimonials : textTestimonials.slice(0, 2);

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
          <span className="font-semibold text-gray-700">5.0/5</span>
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
          
          <div className="grid md:grid-cols-3 gap-6">
            {feedbackData.map((feedback, index) => (
              <FeedbackImage
                key={feedback.id}
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
            ))}
          </div>
        </div>

        {/* Text Testimonials */}
        <div>
          <h4 className="font-poppins text-lg font-semibold text-gray-800 mb-4">
            💬 Mais Depoimentos
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedTextTestimonials.map((testimonial, index) => {
              const config = testimonial.platform === "whatsapp" 
                ? { bgColor: "bg-green-50", borderColor: "border-green-400", iconColor: "bg-green-400", icon: "fab fa-whatsapp" }
                : { bgColor: "bg-pink-50", borderColor: "border-pink-400", iconColor: "bg-pink-400", icon: "fab fa-instagram" };

              return (
                <div key={index} className={`${config.bgColor} rounded-lg p-4 border-l-4 ${config.borderColor}`}>
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