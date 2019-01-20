const addStatus = (status) => (message) => ({ message, status });

const data = [
  ...[
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
  ].map(addStatus("good")),

  ...[
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
  ].map(addStatus("unknown")),

  ...[
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ].map(addStatus("bad")),
]

const randInt = (max) => Math.round(Math.random() * max);
const chooseRandom = (arr) => arr[randInt(arr.length)];

module.exports = {
  getRandomMessage() {
    return chooseRandom(data)
  }
}