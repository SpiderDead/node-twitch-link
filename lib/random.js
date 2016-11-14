
/**
 * Generate a random number between low and high
 * @param {Number} low
 * @param {Number} high
 * @return {Promise}
 */
function random (low, high) {
    return Math.random() * (high - low) + low;
}

module.exports = random;
