document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuLink = document.querySelector('a.mobile');
  const navElement = document.getElementById('nav');

  mobileMenuLink.addEventListener('click', (event) => {
    event.preventDefault();

    if (navElement.classList.contains('show')) {
      navElement.classList.remove('show');
    } else {
      navElement.classList.add('show');
    }
  });
});


// Custom Capcha
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.captcha').forEach(function (captchaContainer) {
    const captchaQuestion = captchaContainer.querySelector('.captchaQuestion');
    const captchaAnswer = captchaContainer.querySelector('.captchaAnswer');
    const resultMessage = captchaContainer.querySelector('.resultMessage');
    const captchaForm = captchaContainer.querySelector('.captchaForm');

    // Generate random alphanumeric string for CAPTCHA
    function generateCaptcha() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let captchaString = '';
      for (let i = 0; i < 6; i++) {
        captchaString += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      
      // Render CAPTCHA string with strikethrough and make it non-selectable
      captchaQuestion.innerHTML = captchaString
        .split('')
        .map(char => `<span style="text-decoration: line-through;">${char}</span>`)
        .join('');
        
      captchaQuestion.style.userSelect = 'none'; // Prevent copy-pasting
      return captchaString;
    }

    let correctAnswer = generateCaptcha();

    // Validate the CAPTCHA answer
    captchaForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const userAnswer = captchaAnswer.value.trim();

      if (userAnswer === correctAnswer) {
        resultMessage.textContent = "Точно! Прифатена CAPTCHA.";
        resultMessage.style.color = "green";
      } else {
        resultMessage.textContent = "Неточен одговор. Обидете се повторно.";
        resultMessage.style.color = "red";
        correctAnswer = generateCaptcha(); // Reset the CAPTCHA
      }

      captchaAnswer.value = ''; // Clear input field
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const lastChild = document.body.lastElementChild;

  // Is the last element on the page a "popup"
  if (lastChild && lastChild.classList.contains('popup')) {
    const observer = new MutationObserver(() => {
      // Check if the popup has the class "hidden"
      if (lastChild.classList.contains('hidden')) {
        document.body.classList.remove('overflow');
      } else {
        document.body.classList.add('overflow');
      }
    });

    // Check for changes in the last element
    observer.observe(lastChild, { attributes: true, attributeFilter: ['class'] });

    // Initially, check for the hidden class on load
    if (!lastChild.classList.contains('hidden')) {
      document.body.classList.add('overflow');
    }
  }
});