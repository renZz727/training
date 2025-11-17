function displayNotification(notifications) {
  const promises = notifications.map((noti) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(noti);
      }, 2000);
    });
  });
  return promises;
}
async function displayNotifications(notifications) {
    const promises = await displayNotifications(notifications);
    promises.forEach((promise) => {
        console.log(promise)
    })
}
const notifications = ["Welcome!", "Profile updated", "New message received"];
console.log(displayNotifications(notifications));
