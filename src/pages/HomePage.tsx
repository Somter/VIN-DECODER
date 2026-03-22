import React, { useState, useEffect } from 'react';
import './css/HomePage.css';
import carIcon from '../assets/car1.svg';
import { fetchVinDataApi } from '../api/vpicApi';
import { type VinData } from '../api/types';
import VinForm from '../components/VinForm/VinForm';
import VinResultList from '../components/VunResultList/VinResultList';
import SearchHistory from '../components/SearchHistory/SearchHistory';

const HomePage: React.FC = () => {
    const [vinData, setVinData] = useState<VinData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [history, setHistory] = useState<string[]>([]);
    const [selectedVin, setselectedVin] = useState<string>('');


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
        setselectedVin(vin);
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
            <main className='home-wrapper'>
                <div className='home-wrapper__title'>
                    <h1>VIN Decoder</h1>
                    <p className='home-wrapper__subtitle'>Decode your vehicle identification number instantly</p>
                </div>
                <VinForm onDecode={handleDecode} isLoading={isLoading} isMessage={vinData?.Message || ''} initialValue={selectedVin} />

                <SearchHistory history={history} onItemClick={handleDecode} />
                <div>
                    {(vinData || isLoading) && (
                        <div className="home-wrapper__specs-header">
                            <img src={carIcon} alt="" className="home-wrapper__specs-icon" />
                            <h2 className="home-wrapper__specs-title">Vehicle Specifications</h2>

                            {vinData && (
                                <button className="home-wrapper__view-all">View all variables</button>
                            )}
                        </div>
                    )}
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : vinData ? (
                        <>
                            {/* <div>
                                {vinData.Count} - {vinData.SearchCriteria}
                            </div> */}
                            <VinResultList results={vinData.Results} />
                        </>
                    ) : null}
                </div>
            </main>
        </>
    );
};

export default HomePage;