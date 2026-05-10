// This script handles the z-index adjustment for the tracklist dropdown
window.addEventListener('message', function(event) {
  if (event.data.type === 'tracklist') {
    const playerIframe = document.querySelector('iframe[src="player.html"]');
    if (event.data.action === 'open') {
      playerIframe.style.zIndex = '5000';
    } else if (event.data.action === 'close') {
      playerIframe.style.zIndex = '100';
    }
  }
});
// nothing else here for now