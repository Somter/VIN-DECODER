import React from 'react';
import './SearchHistory.css';
import repootIcon from '../../assets/reboot_icon.svg'

interface SearchHistoryProps {
    history: string[];
    onItemClick: (vin: string) => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ history, onItemClick }) => {
    if (history.length === 0) return null;

    return (
        <div className="search-history">
            <div className="search-history__header">
                <img src={repootIcon} alt='' className='search-history__icon' />
                <h3 className="search-history__title">RECENT SEARCHES</h3>
            </div>
            <ul className="search-history__list">
                {history.map((vin) => (
                    <li key={vin}>
                        <button
                            className="search-history__button"
                            onClick={() => onItemClick(vin)}
                        >
                            {vin}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchHistory;