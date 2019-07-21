/* eslint-disable no-multiple-empty-lines */

const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  return Math.random() < 0.2;
};

function sample(array) {
  // return a sample element in an array
  return array[Math.floor(Math.random() * array.length)];
}
function Message(sender,subject) {
  this.sender = sender;
  this.subject = subject;
}

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  var senders = ["GitHub Team Eric", "Arnold Schwarzenegger"];
  var subjects = ["Welcome to GitHub", "I'm Back"];
  //  Math.floor(Math.random() * this.length)
  var message = new Message(sample(senders),sample(subjects));
  return message;
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (hasNewMessage()) {
    var message = newMessage();
    appendMessageToDom(message);}
};



// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
