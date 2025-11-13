const { validateEmail, validatePassword } = require('./main');

// --- Tests for validateEmail ---

describe('validateEmail', () => {
    test('should return true for a correctly formatted email', () => {
        expect(validateEmail('test.user@domain.com')).toBe(true);
    });

    test('should return false if the email is missing the @ symbol', () => {
        expect(validateEmail('invalid-email.com')).toBe(false);
    });
});

// --- Tests for validatePassword ---
describe('validatePassword', () => {
    test('should return true for a strong password (min 8, 1 uppercase, 1 number)', () => {
        expect(validatePassword('StrongP@ss123')).toBe(true);
    });

    test('should return false if the password is too short (less than 8 characters)', () => {
        expect(validatePassword('short')).toBe(false);
    });
});

// --- Intentional Break Test (Fails on Purpose) ---

describe('Intentional Fail Test', () => {
    // 5. Intentional Break Test (Fails on Purpose)
    test('should fail because the expected outcome is intentionally wrong', () => {
        // We know 'StrongP@ss123' is a valid password (returns true), but we expect it to be false.
        // This forces a test failure, thus failing the CI workflow.
        expect(validatePassword('StrongP@ss123')).toBe(false); // <--- This line causes the intentional failure!
    });
});