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
    let letter_hash = {}

    letters_in_hand.forEach(function(letter) {
      if (letter_hash[letter]) {
        letter_hash[letter] += 1;
      }
      else {
        letter_hash[letter] = 1;
      }
    })

  },
};

// Do not remove this line or your tests will break!
export default Adagrams;


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
