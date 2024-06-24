import { SpeedInsights } from "@vercel/speed-insights/next"

const sections = document.querySelectorAll("#sections li");

// Add 'active' class to the initial active section
document.getElementById('active_sobre').classList.add('active');

sections.forEach((section) => {
  section.addEventListener("click", () => {
    const sectionId = section.getAttribute("value");
    if (sectionId === "contactos") {
      // Aquí abrir el popup en lugar de mostrar una sección
      // Por ejemplo, si estás utilizando un modal, puedes activarlo así:
      openPopup();
      return;
    }

    const selectedSection = document.getElementById(sectionId);
    const otherSections = document.querySelectorAll("section:not(#" + sectionId + ")");
    
    // Remove 'active' class from all sections
    sections.forEach((s) => {
      s.classList.remove('active');
    });

    // Add 'active' class to the clicked section
    section.classList.add('active');

    otherSections.forEach((section) => {
      section.style.display = "none";
    });

    // Realiza scroll hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
    selectedSection.style.display = "flex";
  });

  if (section.getAttribute("id") === "active_sobre") {
    section.addEventListener("click", () => {
      const sobreMiSections = document.querySelectorAll("#sobre_mi_2, #sobre_mi_3");
      sobreMiSections.forEach((section) => {
        section.style.display = "flex";
      });
    });
  }
});

const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
let currentLanguage = 'es'; // Variable para controlar el idioma actual ('es' para español, 'en' para inglés)

// Función para iniciar el chatbot
function startChatbot() {
  appendMessageWithAnimation('Chatbot', getWelcomeMessage());
  showCommunicationOptions();
}

// Saludo inicial del chatbot con animación
setTimeout(startChatbot, 500);

function sendMessage() {
  const message = userInput.value;
  if (message.trim() !== '') {
    appendMessageWithAnimation('Tú', message);
    respondToUser(message);
    userInput.value = '';
  }
}

function showCommunicationOptions() {
  appendMessageWithAnimation('Chatbot', getCommunicationQuestion());
  
  const whatsappButton = document.createElement('button');
  whatsappButton.innerText = currentLanguage === 'es' ? 'WhatsApp' : 'WhatsApp';
  whatsappButton.addEventListener('click', () => {
    window.open('https://wa.me/+573173457029', '_blank');
    closePopup();
  });
  chatBox.appendChild(whatsappButton);
  
  const correoButton = document.createElement('button');
  correoButton.innerText = currentLanguage === 'es' ? 'Correo' : 'Email';
  correoButton.addEventListener('click', () => {
    window.open('mailto:camilosol123@gmail.com', '_blank');
    closePopup();
  });
  chatBox.appendChild(correoButton);

  const languageButton = document.createElement('button');
  languageButton.innerText = currentLanguage === 'es' ? 'Cambiar Idioma' : 'Change Language';
  languageButton.addEventListener('click', () => {
    changeLanguage();
  });
  chatBox.appendChild(languageButton);
}

function changeLanguage() {
  // Cambiar el idioma actual
  currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
  
  // Mostrar mensaje de cambio de idioma
  const message = currentLanguage === 'es' ? 'Idioma cambiado a español.' : 'Language changed to English.';
  appendMessageWithAnimation('Chatbot', message);

  // Limpiar el chatBox y mostrar el mensaje de bienvenida y opciones de comunicación
  setTimeout(() => {
    clearChat();
    startChatbot();
  }, 2000);
}

function respondToUser(message) {
  let response;
  
  if (currentLanguage === 'es') {
    // Respuestas en español
    switch (message.toLowerCase()) {
      case 'hola':
        response = '¡Hola! ¿En qué puedo ayudarte?';
        break;
      case 'adios':
        response = '¡Adiós! Que tengas un buen día.';
        break;
      default:
        response = 'No comprendo lo que dices.';
        break;
    }
  } else {
    // Respuestas en inglés
    switch (message.toLowerCase()) {
      case 'hello':
        response = 'Hello! How can I help you?';
        break;
      case 'bye':
        response = 'Goodbye! Have a nice day.';
        break;
      default:
        response = 'I do not understand what you are saying.';
        break;
    }
  }
  
  appendMessageWithAnimation('Chatbot', response);
}

function appendMessageWithAnimation(sender, message) {
  const messageElement = document.createElement('p');
  messageElement.innerHTML = '<strong>' + sender + ':</strong> ' + message;
  messageElement.classList.add('fade-in');
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function clearChat() {
  chatBox.innerHTML = ''; // Limpiar el contenido del chatBox
}

function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function getWelcomeMessage() {
  return currentLanguage === 'es' ? '¡Bienvenido!' : 'Welcome!';
}

function getCommunicationQuestion() {
  return currentLanguage === 'es' ? '¿Cómo quieres comunicarte?' : 'How would you like to communicate?';
}

userInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
