self.addEventListener('push', function (event) {
  const payload = event.data ? event.data.text() : 'no payload';
  event.waitUntil(
    self.registration.showNotification('Serverless Lambda Pusher', {
      body: payload,
    })
  );
});
