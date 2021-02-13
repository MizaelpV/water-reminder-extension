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

const sendNotification = () => {
  const notification = new Notification(
    'New message from notifications desktop',
    {
      body: 'I am very happy with this',
    }
  );
  return notification;
};

document.addEventListener('click', async () => {
  await Notification.requestPermission();
  Notification.permission === 'granted'
    ? // ? chrome.notifications.create({
      //     title: 'Just wanted to notify you',
      //     message: 'How great it is!',
      //     iconUrl: '/robot-face_1f916.png',
      //     type: 'basic',
      //   })
      console.log(sendNotification())
    : console.log('You do not have permission');
});
