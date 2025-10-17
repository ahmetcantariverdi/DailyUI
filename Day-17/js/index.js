 const langBtn = document.getElementById("langToggle");
    const title = document.querySelector(".title-2");
    const subText = document.querySelector(".sub-text");
    const startBtn = document.getElementById("startBtn");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");

    let currentLang = "tr";

    langBtn.addEventListener("click", () => {
      if (currentLang === "tr") {
        currentLang = "en";
        langBtn.textContent = "English";
        langBtn.classList.remove("tr");
        langBtn.classList.add("en");

        title.textContent = "Unlimited movies, TV shows, and more";
        subText.innerHTML = `
          Starting at 189.99 TL. Cancel anytime.<br><br>
          Ready to watch? To sign in or create your account, enter your email and password below.
        `;
        emailInput.placeholder = "Email address";
        passwordInput.placeholder = "Password";
        startBtn.textContent = "Confirm";
      } else {
        currentLang = "tr";
        langBtn.textContent = "Türkçe";
        langBtn.classList.remove("en");
        langBtn.classList.add("tr");

        title.textContent = "Sınırsız film, dizi ve çok daha fazlası";
        subText.innerHTML = `
          189,99 TL ile başlayan fiyatlarla. İstediğiniz zaman iptal edebilirsiniz.<br><br>
          İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi ve şifrenizi girmek.
        `;
        emailInput.placeholder = "E-posta adresi";
        passwordInput.placeholder = "Şifre";
        startBtn.textContent = "Onayla";
      }
    });

    startBtn.addEventListener("click", () => {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const validPassword = "131525ah";

      if (email === "" || password === "") {
        alert(
          currentLang === "tr"
            ? "Lütfen e-posta adresinizi ve şifrenizi girin."
            : "Please enter your email and password."
        );
        return;
      }

  
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert(
          currentLang === "tr"
            ? "Geçerli bir e-posta adresi girin."
            : "Please enter a valid email address."
        );
        return;
      }

      if (password !== validPassword) {
        alert(
          currentLang === "tr"
            ? "Şifre veya e-posta hatalı."
            : "Incorrect password or email."
        );
        return;
      }

      alert(
        currentLang === "tr"
          ? "Doğru şekilde girdiniz! Yönlendiriliyorsunuz..."
          : "You entered correctly! Redirecting..."
      );

      // Redirect after short delay
      setTimeout(() => {
        window.location.href = "Netflix - Anasayfa.html";
      }, 2000);
    });