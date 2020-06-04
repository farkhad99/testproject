import dialogues from './data';

const delay = 1000;

const fetch = (data, time = 0) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, time);
});

export const getDialogues = () => fetch(dialogues, delay);
export const getDialogue = (id) => fetch(dialogues.data.find((item) => item.id === id), delay);
export const postMessage = (message) => fetch(message, delay);
