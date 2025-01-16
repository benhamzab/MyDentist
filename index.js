// Load the translation JSON data
const translations = {
    en: {
      welcome: "Welcome to MyDental",
      "hero-text": "Your smile is our priority. Experience exceptional dental care with us.",
      "explore-services": "Explore Services",
      "about-title": "About Us",
      "about-text1": "We provide high-quality dental care in a comfortable environment.",
      "about-text2": "Our team works closely with each patient to ensure personalized care.",
      "services-title": "Our Services",
      "services-text": "We offer a wide range of dental services to meet your needs:",
      service1: "Routine cleanings and checkups",
      service2: "Teeth whitening",
      service3: "Root canals",
      service4: "Cosmetic dentistry",
      service5: "Dental implants",
      service6: "Emergency care",
      "contact-title": "Contact Us",
      "contact-text1": "Reach out to us:",
      "address-label": "Address:",
      address: "2 Mars, Casablanca",
      "phone-label": "Phone:",
      phone: "+212 6 1234 5678",
      "email-label": "Email:",
      email: "Badr@Gmail.com",
    },
    fr: {
      welcome: "Bienvenue chez MyDental",
      "hero-text": "Votre sourire est notre priorité. Profitez de soins dentaires exceptionnels avec nous.",
      "explore-services": "Explorer les Services",
      "about-title": "À Propos",
      "about-text1": "Nous fournissons des soins dentaires de haute qualité dans un environnement confortable.",
      "about-text2": "Notre équipe travaille en étroite collaboration avec chaque patient pour garantir des soins personnalisés.",
      "services-title": "Nos Services",
      "services-text": "Nous offrons une large gamme de services dentaires pour répondre à vos besoins :",
      service1: "Nettoyages et examens de routine",
      service2: "Blanchiment des dents",
      service3: "Traitements de canal",
      service4: "Dentisterie esthétique",
      service5: "Implants dentaires",
      service6: "Soins d'urgence",
      "contact-title": "Nous Contacter",
      "contact-text1": "Contactez-nous :",
      "address-label": "Adresse :",
      address: "2 Mars, Casablanca",
      "phone-label": "Téléphone :",
      phone: "+212 6 1234 5678",
      "email-label": "Email :",
      email: "Badr@Gmail.com",
    },
    ar: {
      welcome: " MyDental مرحبًا بكم في ",
      "hero-text": "ابتسامتك هي أولويتنا. اختبر رعاية أسنان استثنائية معنا.",
      "explore-services": "استكشاف الخدمات",
      "about-title": "معلومات عنا",
      "about-text1": "نحن نقدم رعاية أسنان عالية الجودة في بيئة مريحة.",
      "about-text2": "يعمل فريقنا بشكل وثيق مع كل مريض لضمان رعاية شخصية.",
      "services-title": "خدماتنا",
      "services-text": "نقدم مجموعة واسعة من خدمات الأسنان لتلبية احتياجاتك:",
      service1: "تنظيف وفحوصات روتينية",
      service2: "تبييض الأسنان",
      service3: "علاجات جذور الأسنان",
      service4: "طب الأسنان التجميلي",
      service5: "زراعة الأسنان",
      service6: "رعاية الطوارئ",
      "contact-title": "اتصل بنا",
      "contact-text1": ":تواصل معنا",
      "address-label": "  العنوان",
      address: " 2 مارس، الدار البيضاء",
      "phone-label": " الهاتف",
      phone: "+212 6 1234 5678",
      "email-label": ":البريد الإلكتروني",
      email: "Badr@Gmail.com",
    },
  };
  
  // Function to apply translations
  function applyTranslations(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-translate");
      if (translations[language] && translations[language][key]) {
        el.textContent = translations[language][key];
      }
    });
  }
  
  // Event Listener for Language Selector
  document.querySelector(".language-selector select").addEventListener("change", (e) => {
    const selectedLanguage = e.target.value;
    applyTranslations(selectedLanguage);
  });
  
  // Apply default language (English) on page load
  document.addEventListener("DOMContentLoaded", () => {
    applyTranslations("en");
  });
  