import React, { useState, useEffect } from "react";
import { fetchVariableDataApi } from '../api/vpicApi'
import { type VariableData } from '../api/types';
import BookIcon from '../assets/book_icon.svg';
import LeftIcon from '../assets/arrow-left_icon.svg';
import VariableList from "../components/VariableList/VariableList";
import './css/VariablesPage.css'
import { Link } from 'react-router-dom';



const VariablesPage: React.FC = () => {
    const [variableData, setVariableData] = useState<VariableData | null>(null)

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchVariableDataApi();
            setVariableData(data);
        }
        loadData();
    }, [])


    return (
        <>
            <main className='variables-wrapper'>
                <Link to="/" className="variables-wrapper__back-link">
                    <img className='variables-wrapper__back-icon' src={LeftIcon} alt="" />
                    <span>Back to Decoder</span>
                </Link>

                <div className='variables-wrapper__header'>
                    <img src={BookIcon} alt="" className='variables-wrapper__icon' />
                    <h1 className="variables-wrapper__title">Vehicle Variables</h1>
                </div>

                {variableData ? (
                    <VariableList results={variableData.Results} />
                ) : (
                    <p>Loading...</p>
                )}
            </main>


        </>
    )
}

export default VariablesPage;