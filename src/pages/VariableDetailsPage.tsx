import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchVariableDataApi } from '../api/vpicApi';
import { type FullVariable } from '../api/types';
import VariableDetailsCard from '../components/VariableDetailsCard/VariableDetailsCard';
import LeftIcon from '../assets/arrow-left_icon.svg';
import { Link } from 'react-router-dom';
import './css/VariableDetailsPage.css'



const VariableDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [variable, setVariable] = useState<FullVariable | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchVariableDataApi();
                const found = data.Results.find(item => item.ID === Number(id));
                setVariable(found || null);
            } catch (error) {
                console.error("Error details:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!variable) return <div>Variable not found.</div>;

    return (
        <main className="variable-details">
            <Link to="/" className="secondary-link">
                <img className='variables-wrapper__back-icon' src={LeftIcon} alt="" />
                <span>Back to Decoder</span>
            </Link>
            <div className='text-overline'>VARIABLE ID: {variable.ID}</div>
            <strong className="variable-details__name">{variable.Name}</strong>
            <VariableDetailsCard variable={variable} />
        </main>
    );
};

export default VariableDetailsPage;