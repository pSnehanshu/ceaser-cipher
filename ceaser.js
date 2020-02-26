module.exports = ceaser;

/**
 * Get the ceaser cipher of any text
 * @param {String} text The string to encrypt
 * @param {Number} key The ceaser key. Default = 5
 * @returns String
 */
function ceaser (text = '', key = 5) {
    let ceaserText = text.split('').map(t => getCeaser(t, key));
    return ceaserText.join('');
}

function getCeaser(t, key = 5) {
    let charSet = 'abcdedghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    if (!charSet.includes(t)) return t;
    let newKey = charSet.indexOf(t) + key;
    if (newKey >= charSet.length) {
        newKey = (newKey % charSet.length)
    }
    return charSet[newKey];
}

