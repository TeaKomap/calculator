function isPalindrome(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
          } 
       }
return true;
    }

const arr1 = [1, 2, 3, 3, 2, 1];
const arr2 = [2, 4, 1, 6, 8, 5];

console.log(isPalindrome(arr1));
console.log(isPalindrome(arr2));





