const sections = document.querySelectorAll("#sections li");
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
let currentLanguage = 'es'; // 'es' para español, 'en' para inglés

// Establece el estado inicial de la sección activa
document.getElementById('active_sobre').classList.add('active');
sections.forEach((section) => section.addEventListener("click", handleSectionClick));

function handleSectionClick() {
  const sectionId = this.getAttribute("value");
  if (sectionId === "contactos") {
    openPopup();
    return;
  }

  // Ocultar todas las secciones y mostrar la seleccionada
  document.querySelectorAll("section").forEach((section) => {
    section.style.display = section.id === sectionId ? "flex" : "none";
  });

  // Actualizar la clase 'active' en las secciones
  sections.forEach((s) => s.classList.remove('active'));
  this.classList.add('active');

  // Hacer scroll hacia arriba
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (sectionId === 'sobre-mi') {
    document.getElementById("sobre_mi_2").style.display = "flex";
    document.getElementById("sobre_mi_3").style.display = "flex";
  }
}

// Función para iniciar el chatbot
function startChatbot() {
  appendMessage('Chatbot', getWelcomeMessage());
  showCommunicationOptions();
}

setTimeout(startChatbot, 500);

userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message) {
    appendMessage('Tú', message);
    respondToUser(message);
    userInput.value = '';
  }
}

function appendMessage(sender, message) {
  const messageElement = document.createElement('p');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  messageElement.classList.add('fade-in');
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showCommunicationOptions() {
  appendMessage('Chatbot', getCommunicationQuestion());

  createButton('WhatsApp', 'es', 'https://wa.me/+573173457029');
  createButton('Correo', 'es', 'mailto:camilosol123@gmail.com');
  createLanguageButton();
}

function createButton(textKey, languageKey, link) {
  const button = document.createElement('button');
  button.innerText = currentLanguage === 'es' ? textKey : textKey;
  button.addEventListener('click', () => {
    window.open(link, '_blank');
    closePopup();
  });
  chatBox.appendChild(button);
}

function createLanguageButton() {
  const languageButton = document.createElement('button');
  languageButton.innerText = currentLanguage === 'es' ? 'Cambiar Idioma' : 'Change Language';
  languageButton.addEventListener('click', changeLanguage);
  chatBox.appendChild(languageButton);
}

function changeLanguage() {
  currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
  const message = currentLanguage === 'es' ? 'Idioma cambiado a español.' : 'Language changed to English.';
  appendMessage('Chatbot', message);

  setTimeout(() => {
    clearChat();
    startChatbot();
  }, 2000);
}

function respondToUser(message) {
  let response;
  const messages = {
    'es': {
      'hola': '¡Hola! ¿En qué puedo ayudarte?',
      'adios': '¡Adiós! Que tengas un buen día.',
      'default': 'No comprendo lo que dices.'
    },
    'en': {
      'hello': 'Hello! How can I help you?',
      'bye': 'Goodbye! Have a nice day.',
      'default': 'I do not understand what you are saying.'
    }
  };

  response = messages[currentLanguage][message.toLowerCase()] || messages[currentLanguage]['default'];
  appendMessage('Chatbot', response);
}

function clearChat() {
  chatBox.innerHTML = '';
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
