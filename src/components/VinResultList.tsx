import React from 'react';
import { type VinVariable } from '../api/types'

interface VinResultListProps {
    results: VinVariable[];
}

const VinResultList: React.FC<VinResultListProps> = ({ results }) => {
    return (
        <ul>
            {
                results
                    .filter((variable) => variable.Value !== null && variable.Value.trim() !== '')
                    .map((variable) => (
                        <li key={variable.VariableId}>
                            {variable.Variable}: {variable.Value}
                        </li>
                    ))
            }

        </ul>
    );
}

export default VinResultList;