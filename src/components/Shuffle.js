function Shuffle(array) {
    const shuffledArray= [...array];
    for(let i = shuffledArray.length - 1; i > 0; i--)    {
        const swapIndex = Math.floor(Math.random() * (i + 1));
        const temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[swapIndex];
        shuffledArray[swapIndex] = temp
    }
 return shuffledArray

}

/*function Shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }*/
 


export default Shuffle;