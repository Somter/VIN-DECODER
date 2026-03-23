import React, { useState, useEffect } from "react";
import { fetchVariableDataApi } from '../api/vpicApi'
import { type VariableData } from '../api/types';
import BookIcon from '../assets/book_icon.svg';
import LeftIcon from '../assets/arrow-left_icon.svg';
import VariableList from "../components/VariableList/VariableList";
import './css/VariablesPage.css'
import { Link } from 'react-router-dom';



const VariablesPage: React.FC = () => {
    const [variableData, setVariableData] = useState<VariableData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await fetchVariableDataApi();
                setVariableData(data);
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Failed to load variables. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, []);

    return (
        <main className='variables-wrapper'>
            <Link to="/" className="secondary-link">
                <img className='variables-wrapper__back-icon' src={LeftIcon} alt="" />
                <span>Back to Decoder</span>
            </Link>

            <div className='variables-wrapper__header'>
                <img src={BookIcon} alt="" className='variables-wrapper__icon' />
                <h1 className="variables-wrapper__title">Vehicle Variables</h1>
            </div>

            {error ? (
                <div className="error-message-globa">{error}</div>
            ) : isLoading ? (
                <p>Loading...</p>
            ) : (
                variableData && <VariableList results={variableData.Results} />
            )}
        </main>
    );
}

export default VariablesPage;