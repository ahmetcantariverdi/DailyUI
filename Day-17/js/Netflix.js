// YouTube IFrame API için global player
let player;

// Buton durumları
let isPlaying = true;
let isMuted = true;

// İkon dosyaların
const playIcon = 'icons/pause-fill.svg';         // oynat ikonu
const pauseIcon = 'icons/caret-right-fill.svg';       // durdur ikonu
const muteIcon = 'icons/volume-fill.svg';         // sessiz ikonu
const unmuteIcon = 'icons/volume-up.svg';     // sesli ikonu

// Buton elementleri
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');

// YouTube Player API hazır olduğunda
function onYouTubeIframeAPIReady() {
  player = new YT.Player('fragman', {
    height: '100%',
    width: '100%',
    videoId: '__2bjWbetsA', // fragman ID'si
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: '__2bjWbetsA',
      controls: 0,
      mute: 1,
      modestbranding: 1
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

// Player hazır olduğunda
function onPlayerReady() {
  player.mute();
  player.playVideo();
  // Başlangıç ikonları
  playPauseBtn.src = pauseIcon;
  muteBtn.src = muteIcon;
}

// Play/Pause butonu
playPauseBtn.addEventListener('click', () => {
  if (!player) return;

  if (isPlaying) {
    player.pauseVideo();
    playPauseBtn.src = playIcon;
  } else {
    player.playVideo();
    playPauseBtn.src = pauseIcon;
  }

  isPlaying = !isPlaying;
});

// Mute/Unmute butonu
muteBtn.addEventListener('click', () => {
  if (!player) return;

  if (isMuted) {
    player.unMute();
    muteBtn.src = unmuteIcon;
  } else {
    player.mute();
    muteBtn.src = muteIcon;
  }

  isMuted = !isMuted;
});

// E-posta formu
const joinBtn = document.getElementById('joinBtn');
const emailInput = document.getElementById('emailInput');
const emailMessage = document.getElementById('emailMessage');

joinBtn.addEventListener('click', () => {
  const email = (emailInput.value || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    emailMessage.textContent = 'Onaylandı!';
    setTimeout(() => {
      emailMessage.textContent = '';
    }, 2000);
  } else {
    emailMessage.textContent = 'Lütfen geçerli bir e-posta adresi girin!';
  }
});
