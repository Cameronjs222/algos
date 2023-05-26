/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s;
    }

    let longest = '';

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes
        let oddPal = expandAroundCenter(s, i, i);
        if (oddPal.length > longest.length) {
            longest = oddPal;
        }

        // Check for even-length palindromes
        let evenPal = expandAroundCenter(s, i, i + 1);
        if (evenPal.length > longest.length) {
            longest = evenPal;
        }
    }

    return longest;
};

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return s.substring(left + 1, right);
}

//Old code, too inefficent 


// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) { 
//     var currentString = '';
//     var longestString = ''
//     for (let i = 0; i<s.length; i++) {
//         currentString = s[i]
//         if (currentString.length > longestString.length){
//             longestString = currentString
//         }
//         for (let j = i+1; j<s.length; j++){
//             currentString += s[j]
//             // console.log(currentString)
//             // console.log(currentString.split('').reverse().join(''))
//             if (s[j] == s[i] && currentString == currentString.split('').reverse().join('') && currentString.length > longestString.length) {
//                 longestString = currentString
//                 // console.log("changed here")
//             }
//         }
//     }   
//     return longestString
// };