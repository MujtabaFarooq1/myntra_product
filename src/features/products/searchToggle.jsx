import React, { useState } from 'react';
import '../../sass/components/_searchToggle.scss';


const SearchToggle = ({ customStyles }) => {
    const [searchOpen, setSearchOpen] = useState(false);

    let placeHolderText = "Search here";
    const handleSearchToggle = () => {
        setSearchOpen((prev) => {
            if (prev === true) {
                return false
            } else {
                return true
            }
        })
    }

    return (
        <div className='sideBarItemSearchWrapper'>

            {
                searchOpen ? (<form className='sideBarItemSearchForm' action="#">
                    <input className='sideBarItemSearch' type="text" placeholder={placeHolderText} style={customStyles} />
                </form>) : <div>&nbsp;</div>
            }


            <button className='sideBarItemSearchBtn' onClick={handleSearchToggle}> {searchOpen ? <i class="fas fa-times search_toggle_icons"></i> : <i class="fas fa-search search_toggle_icons"></i>} </button>
        </div>

    );
};

export default SearchToggle;