import React from 'react';
import './VinResultList.css'
import { type VinVariable } from '../../api/types'
import { Link } from 'react-router-dom';

interface VinResultListProps {
    results: VinVariable[];
}

const VinResultList: React.FC<VinResultListProps> = ({ results }) => {
    return (
        <ul className='vin-results'>
            {
                results
                    .filter((variable) => variable.Value !== null && variable.Value.trim() !== '')
                    .map((variable) => (
                        <li key={variable.VariableId}>
                            <Link
                                to={`/variables/${variable.VariableId}`}
                                className="vin-results__card card-clickable" 
                            >
                                <span className='vin-results__variable'>{variable.Variable}</span>
                                <span className='vin-results__value'>{variable.Value}</span>
                            </Link>
                        </li>
                    ))
            }

        </ul>
    );
}

export default VinResultList;