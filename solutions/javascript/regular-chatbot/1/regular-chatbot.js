export function isValidCommand(command) {
  const regex = /^chatbot.*/i;
  return /^chatbot.*/i.test(command);
}

export function removeEmoji(message) {
  const regex = /emoji\d{4}/g;
  return message.replaceAll(/emoji\d{4}/g, '');
}

export function checkPhoneNumber(number) {
  return /^\(\+\d{2}\)\s\d{3}\-\d{3}\-\d{3}$/.test(number)
    ? 'Thanks! You can now download me to your phone.'
    : `Oops, it seems like I can't reach out to ${number}`;
}

export function getURL(userInput) {
  return userInput.match(/[a-zA-Z0-9-\_]+\.[a-zA-Z]{2,}/ig)
}

export function niceToMeetYou(fullName) {
  return `Nice to meet you, ${fullName.replace(fullName.match(/^.*?(?=[,\s])/g) + ', ', '')} ${fullName.replace(`, ${fullName.match(/(?<=(,\s)).+/g)}`, '')}`;
}
