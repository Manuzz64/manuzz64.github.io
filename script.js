document.addEventListener('DOMContentLoaded', function () {

document.addEventListener('DOMContentLoaded', function () {
    const musicButton = document.getElementById('music-button');
    if (musicButton) {
      musicButton.addEventListener('click', toggleAudio);
    }
  });
  console.log(document.getElementById('music-button'));

function playAudio() {
    const audio = document.querySelector('audio');
    audio.play();
  }
  
  // Hamburger menu functionality
  document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  });

  document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    if (audio) {
      audio.play().catch(error => {
        console.error('Autoplay was blocked:', error);
      });
    } else {
      console.error('Audio element not found!');
    }
  });

  function detectDevice() {
    const userAgent = navigator.userAgent;
  
    if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      return "Mobile";
    } else if (/Tablet|iPad/i.test(userAgent)) {
      return "Tablet";
    } else {
      return "Desktop";
    }
  }
  
  const deviceType = detectDevice();
  console.log(`Device type: ${deviceType}`);

  function addDeviceClass() {
    const deviceType = detectDevice(); // Get the device type
    document.body.classList.add(deviceType); // Add the device type as a class
  }
  
  // Call the function when the page loads
  window.onload = addDeviceClass;

  const sticker = document.querySelector('a[href="https://example.com/sticker"]');

if (sticker) {
  // Apply styles or move the sticker
  sticker.remove();

  const scripts = document.querySelectorAll('script');
scripts.forEach((script) => {
  if (script.src.includes('static.js')) {
    script.remove(); // Remove the script tag
  }
});
}

// Function to check if the screen width is for a mobile device
function isMobileWidth() {
    return window.innerWidth <= 767; // Adjust the breakpoint as needed
  }

i// Skip this code if the screen width is for a mobile device
if (!isMobileWidth()) {
    // Code to execute only on desktop devices
    const gameCanvas = document.getElementById('gameCanvas');
    const startButton = document.getElementById('startButton');
  
    startButton.addEventListener('click', () => {
      // Start the game or play music
      console.log('Game started!');
    });
  
    // Other game-related code
  }

  if (isMobileWidth()) {
    // Code to execute only on mobile devices
    console.log('This is a mobile device. Skipping game code.');
  } else {
    // Code to execute only on desktop devices
    console.log('This is a desktop device. Running game code.');
  }

  // Recheck the screen width when the window is resized
window.addEventListener('resize', () => {
    if (isMobileWidth()) {
      console.log('Screen width is now mobile.');
    } else {
      console.log('Screen width is now desktop.');
    }
  });

  function toggleAudio() {
    const audio = document.getElementById('audio');
    const button = document.getElementById('music-button');
    const icon = button.querySelector('i');

    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-stop');
        button.innerHTML = '<i class="fas fa-stop"></i> Stop Music';
    } else {
        audio.pause();
        audio.currentTime = 0; // Reset playback to the start
        icon.classList.remove('fa-stop');
        icon.classList.add('fa-play');
        button.innerHTML = '<i class="fas fa-play"></i> Play Music';
    }
}});