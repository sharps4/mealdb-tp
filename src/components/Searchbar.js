import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SearchBar() {
    const navigate = useNavigate();
    const [search, setSearch] = React.useState('');
    const handleChange = (e) => setSearch(e.target.value);
    const handleSearch = (e) => {
        if (e.type === 'click' || (e.type === 'keydown' && e.code === 'Enter')) {
            if (search === '') {navigate('/');}
            else {navigate('/search/'+search);}
        }
    }
    return (
        <div className='search-container'>
            <input type='text' placeholder='Rechercher un plat...' value={search} onChange={handleChange} onKeyDown={handleSearch}></input>
            <Link to='/NewRecipe' className='header-btn'>Ajouter une recette</Link>
        </div>
    )
}

export default SearchBar;