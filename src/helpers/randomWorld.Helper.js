function getRandomWord() {
  const words = ['popular', 'fullstack', 'Pro', 'script'];
  return words[Math.floor(Math.random() * words.length)];
}

export { getRandomWord };
