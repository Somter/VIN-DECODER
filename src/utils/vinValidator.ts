export const validateVin = (vin: string): string | null => {
    const trimmedVin = vin.trim();

    if (trimmedVin === '') {
        return 'VIN code cannot be empty';
    }

    if (trimmedVin.length > 17) {
        return 'VIN code cannot be longer than 17 characters';
    }

    const allowedCharsRegex = /^[A-HJ-NPR-Z0-9]+$/i;
    if (!allowedCharsRegex.test(trimmedVin)) {
        return 'VIN code can only contain letters (except I, O, Q) and numbers';
    }

    return null; 
};