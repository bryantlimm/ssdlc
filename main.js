// Case 1: User Authentication Validator

/**
 * Validates an email format (basic check for @ and .).
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
    if (typeof email !== 'string') return false;
    // Simple regex: checks for something@something.something
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates a password (min 8 chars, 1 uppercase, 1 number).
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    if (typeof password !== 'string') return false;
    if (password.length < 8) return false;

    if (!/[A-Z]/.test(password)) return false;

    if (!/[0-9]/.test(password)) return false;

    return true;
}

module.exports = {
    validateEmail,
    validatePassword
};