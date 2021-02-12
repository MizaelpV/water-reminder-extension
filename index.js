var hidden, visibilityChange;
if (typeof document.hidden !== 'undefined') {
  // Opera 12.10 and Firefox 18 and later support
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}
document.addEventListener('click', async () => {
  await Notification.requestPermission();
  Notification.permission === 'granted'
    ? setTimeout(() => {
        return alert('Testing ');
      }, 500)
    : console.log('You do not have permission');
});
