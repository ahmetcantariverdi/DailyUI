
  const boxes = document.querySelectorAll('.min-box');

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      // Önce tüm kutulardan active'i kaldır
      boxes.forEach(b => b.classList.remove('active'));
      // Tıklanan kutuya active ekle
      box.classList.add('active');
    });
  });

