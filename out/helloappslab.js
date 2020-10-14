function isPalindrome(word) {
    var palindrome = true;
    for (var i = 0; i < word.length; i++) {
        if (word[i] != word[word.length - 1 - i]) {
            palindrome = false;
        }
    }
    return palindrome;
}
console.log(isPalindrome("oko"));
//# sourceMappingURL=helloappslab.js.map