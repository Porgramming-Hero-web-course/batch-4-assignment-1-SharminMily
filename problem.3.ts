// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

function countWordOccurrences (sentences: string, word:string): number{
   
    const lowerCaseSentence = sentences.toLowerCase();
    // console.log(lowerCaseSentence)

    const lowerCaseWord = word.toLowerCase();
    // console.log(lowerCaseWord)

    const wordsArray = lowerCaseSentence.split(" ");
    // console.log(wordsArray)

    const occurrences = wordsArray.filter(w => w === lowerCaseWord).length;
  
    return occurrences;

}
// console.log(countWordOccurrences("I love typescript", "typescript"))
