import React, { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import magnifyingGlass from '../../assets/magnifying_glass.svg';
import { validateVin } from '../../utils/vinValidator';
import './VinForm.css';

interface VinFormProps {
    onDecode: (vin: string) => void;
    isLoading: boolean;
    isMessage?: string;
    initialValue?: string;
}

const VinForm: React.FC<VinFormProps> = ({ onDecode, isLoading, isMessage, initialValue }) => {
    const [vinInput, setVinInput] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (initialValue) {
            setVinInput(initialValue)
        }
    }, [initialValue])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVinInput(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setError('');

        const validationError = validateVin(vinInput);

        if (validationError) {
            setError(validationError);
            return;
        }

        const cleanVin = vinInput.trim().toUpperCase();
        onDecode(cleanVin);
    }

    return (
        <form className='vin-form' onSubmit={handleSubmit}>
            <div className='vin-form__content'>
                <div className='vin-form__input-group'>
                    <img src={magnifyingGlass} alt='' />
                    <input
                        type='text'
                        value={vinInput}
                        onChange={handleInputChange}
                        placeholder='ENTER VIN CODE...'
                        disabled={isLoading}
                        className='vin-form__input'
                    />
                    <button className='vin-form__decode-button' type='submit' disabled={isLoading || !vinInput}>
                        {isLoading ? 'Loading...' : 'Decode'}
                    </button>
                </div>

                {error && <p className='vin-form__error'>{error}</p>}
                {isMessage && <p className='vin-form__message'><span>API Message: </span>{isMessage}</p>}
            </div>
        </form>
    )
}

export default VinForm;