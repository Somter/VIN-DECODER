import React from "react";
import { Link } from "react-router-dom";
import { type FullVariable } from '../../api/types';
import LeftIcon from '../../assets/arrow-left_icon.svg';
import './VariableDetailsCard.css';

interface VariableDetailsCardProps {
    variable: FullVariable;
}

const VariableDetailsCard: React.FC<VariableDetailsCardProps> = ({ variable }) => {
    return (
        <>
            <article className="variable-details-card">
                <section className="variable-details-card__section">
                    <h2 className="variable-details-card__label">DESCRIPTION</h2>
                    <div
                        className="variable-details-card__content"
                        dangerouslySetInnerHTML={{ __html: variable.Description }}
                    />
                </section>

                <section className="variable-details-card__section">
                    <h2 className="variable-details-card__label">DATA TYPE</h2>
                    <div className="variable-details-card__content">
                        {variable.DataType}
                    </div>
                </section>
            </article>
        </>
    );
}

export default VariableDetailsCard;