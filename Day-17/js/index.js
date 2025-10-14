
 const langBtn = document.getElementById("langToggle");
 const title = document.querySelector(".title-2");
 const subText = document.querySelector(".sub-text");
  const startBtn = document.getElementById("startBtn");
  const emailInput = document.getElementById("emailInput");

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
      Ready to watch? Enter your email to create or restart your membership.
    `;
    emailInput.placeholder = "Enter your email address";
    startBtn.textContent = "Get Started >";
  } else {
    currentLang = "tr";
    langBtn.textContent = "Türkçe";
    langBtn.classList.remove("en");
    langBtn.classList.add("tr");

    title.textContent = "Sınırsız film, dizi ve çok daha fazlası";
    subText.innerHTML = `
      189,99 TL ile başlayan fiyatlarla. İstediğiniz zaman iptal edebilirsiniz.<br><br>
      İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.
    `;
    emailInput.placeholder = "E-posta adresi";
    startBtn.textContent = "Başlayın";
 }
});
 // e-posta doğrulama yeri
startBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  // boş kontrol 
  if (email === "") {
    alert(
      currentLang === "tr"
        ? "Lütfen e-posta adresinizi girin."
        : "Please enter your email address."
    );
    return;
  }

  //!  e-posta kontrolü yeri (Basit olan)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert(
      currentLang === "tr"
        ? "Geçerli bir e-posta adresi girin."
        : "Please enter a valid email address."
    );
    return;
  }
});