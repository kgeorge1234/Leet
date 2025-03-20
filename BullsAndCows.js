function getHint(secret, guess) {
  let secretMap = new Map();
  let guessMap = new Map();

  let bullCount = 0;
  let cowCount = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bullCount += 1;
    } else {
      secretMap.set(secret[i], (secretMap.get(secret[i]) || 0) + 1);
      guessMap.set(guess[i], (guessMap.get(guess[i]) || 0) + 1);
    }
  }

  for (let [key, value] of secretMap) {
    cowCount += Math.min(value, guessMap.get(key) || 0);
  }

  return bullCount + "A" + cowCount + "B";
}

let x = getHint("1122", "1222");
console.log(x);
