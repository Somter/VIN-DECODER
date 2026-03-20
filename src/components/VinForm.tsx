import React, { useState, type ChangeEvent, type FormEvent } from 'react';

interface VinFormProps {
    onDecode: (vin: string) => void;
    isLoading: boolean;
}

const VinForm: React.FC<VinFormProps> = ({ onDecode, isLoading }) => {
    const [vinInput, setVinInput] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVinInput(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (vinInput.trim() === '') {
            setError('VIN code cannot be empty');
            return;
        }

        if (vinInput.length > 17) {
            setError('VIN code cannot be longer than 17 characters');
            return;
        }

        const allowedCharsRegex = /^[A-HJ-NPR-Z0-9]+$/i;
        if (!allowedCharsRegex.test(vinInput)) {
            setError('VIN code can only contain letters (except I, O, Q) and numbers');
            return;
        }

        onDecode(vinInput.toUpperCase());
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={vinInput}
                onChange={handleInputChange}
                placeholder='Enter the VIN code'
                disabled={isLoading}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type='submit' disabled={isLoading || !vinInput}>
                {isLoading ? 'Loading...' : 'Decode VIN'}
            </button>
        </form>
    )
}

export default VinForm;