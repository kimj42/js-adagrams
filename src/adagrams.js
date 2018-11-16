const Adagrams = {
  drawLetters() {
    const letter_bag = [
      "A", "A", "A", "A", "A", "A", "A", "A", "A",
      "B", "B",
      "C", "C",
      "D", "D", "D", "D",
      "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
      "F", "F",
      "G", "G", "G",
      "H", "H",
      "I", "I", "I", "I", "I", "I", "I", "I", "I",
      "J",
      "K",
      "L", "L", "L", "L",
      "M", "M",
      "N", "N", "N", "N", "N", "N",
      "O", "O", "O", "O", "O", "O", "O", "O",
      "P", "P",
      "Q",
      "R", "R", "R", "R", "R", "R",
      "S", "S", "S", "S",
      "T", "T", "T", "T", "T", "T",
      "U", "U", "U", "U",
      "V", "V",
      "W", "W",
      "X",
      "Y", "Y",
      "Z"]

      letter_bag.sort(() => Math.random() - 0.5);
      return letter_bag.slice(0, 10);
    },

    usesAvailableLetters(input, letters_in_hand) {
      const inputArray = input.toUpperCase().split("");
      let letter_hash = {};


      letters_in_hand.forEach((letter) => {
        if (letter_hash[letter]) {
          letter_hash[letter] += 1;
        }
        else {
          letter_hash[letter] = 1;
        }
      });

      for (let input of inputArray) {
        if (letter_hash[input] < 1) {
          return false;
        }
        else if (letter_hash[input] >= 1) {
            letter_hash[input] -= 1;
          }
          else {
            return false;
          }
      }
      return true;
    },

    scoreWord(input) {
      const letterScores = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10
    };

    let totalScore = 0;

    const letters = input.toUpperCase().split("");

    for (let letter of letters) {
      totalScore += letterScores[letter];
    }

    totalScore += letters.length > 6 ? 8 : 0

    return totalScore;
    },

    breakTie(incumbent, challenger) {
      if (incumbent.word.length == 10) {
        return incumbent;
      }
      else if (challenger.word.length == 10) {
        return challenger;
      }
      else if (challenger.word.length < incumbent.word.length) {
        return challenger;
      }
      else {
        return incumbent;
      }
    },

    highestScoreFrom(words) {
      // console.log(words);
      const scoreHashes = [];

      // for (let word of words) {
      //   // console.log(scoreHashes);
      //   scoreHashes["word"] = word;
      //   scoreHashes["score"] = this.scoreWord(word);
      // }

      for (let word of words) {
        // console.log(scoreHashes);
        scoreHashes.push({word: word, score: this.scoreWord(word)});
      }

      // console.log(scoreHashes);
      let winningHash = scoreHashes[0];
      // console.log(winningHash);
      for (let currentHash of scoreHashes) {
        if (currentHash.score > winningHash.score) {
          winningHash = currentHash;
        }
        else if (currentHash.score == winningHash.score) {
          winningHash = this.breakTie(winningHash, currentHash);
        }
      }

      return winningHash;
    },
  }


  // Do not remove this line or your tests will break!
  export default Adagrams;

//
//  const alphabetHash = {
//   A: 9, B: 2,
//   C: 2, D: 4,
//   E: 12, F: 2,
//   G: 3, H: 2,
//   I: 9, J: 1,
//   K: 1, L: 4,
//   M: 2, N: 6,
//   O: 8, P: 2,
//   Q: 1, R: 6,
//   S: 4, T: 6,
//   U: 4, V: 2,
//   W: 2, X: 1,
//   Y: 2, Z: 1
// }
