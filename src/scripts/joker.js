import joker from "one-liner-joke";
import joker from "give-me-a-joke";

console.log(joker.getRandomJoke().body);

export function dadJoke() {
  return new Promise(function(resolve, reject) {
    joker.getRandomDadJoke(resolve);
  })
}
