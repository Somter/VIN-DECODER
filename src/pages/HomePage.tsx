import React, { useState, useEffect } from 'react';
import { fetchVinDataApi } from '../api/vpicApi';
import { type VinData } from '../api/types';
import VinForm from '../components/VinForm';
import VinResultList from '../components/VinResultList';

const HomePage: React.FC = () => {
    const [vinData, setVinData] = useState<VinData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [history, setHistory] = useState<string[]>([]);

    useEffect(() => {
        const savedHistory = localStorage.getItem('vin_history');
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('vin_history', JSON.stringify(history));
    }, [history]);

    const handleDecode = async (vin: string) => {
        setIsLoading(true);
        try {
            const data = await fetchVinDataApi(vin);
            setVinData(data);

            setHistory((prevHistory) => {
                const filtered = prevHistory.filter((item) => item !== vin);
                const newHistory = [vin, ...filtered];
                return newHistory.slice(0, 3);
            });
        } catch (error) {
            console.error('Error fetching VIN data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <VinForm onDecode={handleDecode} isLoading={isLoading} />

            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : vinData ? (
                    <>
                        <div>
                            {vinData.Count} - {vinData.Message} - {vinData.SearchCriteria}
                        </div>
                        <VinResultList results={vinData.Results} />
                    </>
                ) : null}
            </div>

            <div>
                <h3>Search History</h3>
                <ul>
                    {history.map((item) => (
                        <li key={item}>
                            <button onClick={() => handleDecode(item)}>{item}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default HomePage;