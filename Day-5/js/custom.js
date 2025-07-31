 document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
      if (box.classList.contains('active')) {
        box.classList.remove('active');
      } else {
        document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));
        box.classList.add('active');
      }
    });
  });