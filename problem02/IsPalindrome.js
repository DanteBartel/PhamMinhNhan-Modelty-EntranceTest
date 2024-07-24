const isPalindrome = (s) => {
    // Helper function
    const filterAlphanumeric = (s) => {
        // Normalize characters like "à" to "a"
        let ts = s.normalize('NFD');
        // Remove characters that are not alphabet or numeric
        return ts.replace(/[^a-zA-Z0-9]/g, '');
    }

    // Checking Palindrome
    let ts = filterAlphanumeric(s).toLowerCase();
    let reverse = ts.split('').reverse().join('');
    if (ts === reverse) return true;
    else return false;
}

module.exports = isPalindrome;