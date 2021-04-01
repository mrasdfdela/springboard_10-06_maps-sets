// hasDuplicate
const hasDuplicate = (arr) => {
  return new Set(arr).size === arr.length ? false : true;
}

console.log( hasDuplicate([1,3,2,1]) );// true
console.log( hasDuplicate([1,5,-1,4]) );// false

//vowelCount
const vowelCount = (str) => {
  const vowels = new Set('aeiou');
  const vowelCount = new Map();

  str.split('').forEach( letter => {
    if (vowels.has(letter)) {
      vowelCount.has(letter) ? vowelCount.set(letter, vowelCount.get(letter) + 1) : vowelCount.set(letter, 1);
    }
  })
  return vowelCount;
};

result = vowelCount('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// console.log( vowelCount('Colt') );// Map { 'o' => 1 }