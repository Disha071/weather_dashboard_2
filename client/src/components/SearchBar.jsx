import Rect, { useState} from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.trim()) {
            onSearch(city);
        }
    };
    return(
        <form onSubmit={handleSubmit} className="search-bar">
            <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            />
            <button type="submit">Search</button>
        </form>
    );
};
export default SearchBar;