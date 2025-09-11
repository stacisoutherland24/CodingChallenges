function reverseSentence(sentence) {


const word = sentence.trim().split(" ").filter(word => word !== "");

const reversedSentence = word.reverse()

  console.log(reversedSentence.join(' '));
    return reversedSentence.join(' ');
}
 reverseSentence("world hello")
