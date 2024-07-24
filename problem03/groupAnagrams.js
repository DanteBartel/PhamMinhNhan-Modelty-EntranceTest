const groupAnagrams = (list) => {
    // Create a new dictionary, with key is the sorted string of each group, and value is the list that contain strings of that group
    const dictionary = new Map();

    // Sorting -> Create new key-list if found none, than append
    list.forEach(s => {
        const sorted = s.split('').sort().join('');
        if (!dictionary.has(sorted)) dictionary.set(sorted, []);
        dictionary.get(sorted).push(s);
    });

    // Returning a new list of lists
    return Array.from(dictionary.values());
}

module.exports = groupAnagrams;