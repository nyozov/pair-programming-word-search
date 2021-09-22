//Worked on by Nikolay Yozov and Sean Jin

const transpose = function (matrix) {
    let newArr = [];
    
    for (let i = 0; i < matrix[0].length; i++) {
      newArr.push([]);
      for (let j = 0; j < matrix.length; j++) {
        newArr[i].push(matrix[j][i]);
      }
    }
    return newArr;
  };

  const reverseArray = function (matrix){
      for (let arr of matrix){
          arr.reverse()
      }
      return matrix
  }

const wordSearch = (letters, word) => {
    //check to see if word is there horizontally
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    //check to see if word is there vertically
    const transposedLetters = transpose(letters)
    const verticalJoin = transposedLetters.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    // check to see if word is there horizontally backwards
    const reversedLetters = reverseArray(letters)
    const reversedJoin = reversedLetters.map(ls => ls.join(''))
    for (l of reversedJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch

// console.log(wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'FRANK'));

