import React from "react";
import { type FullVariable } from '../../api/types';
import './VariableList.css'

interface VariableListProps {
    results: FullVariable[];
}

const VariableList: React.FC<VariableListProps> = ({ results }) => {
    return (
        <ul className='variable-results'>
            {results.map((result) => (
                <li key={result.ID} className="variable-results__card">
                    <div className='variable-results__title'>
                        <strong className="variable-results__name">{result.Name}</strong>
                        <span className="variable-results__id">ID: {result.ID}</span>
                    </div>
                    <div
                        className="variable-results__description"
                        dangerouslySetInnerHTML={{ __html: result.Description }}
                    />
                </li>
            ))}
        </ul>
    );
}

export default VariableList;