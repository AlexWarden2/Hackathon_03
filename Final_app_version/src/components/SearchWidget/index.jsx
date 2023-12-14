import React, { useState, useEffect } from 'react';
import { SearchForm, ShowList } from '../';

export default function SearchWidget () {

    const [ratingOrder, setRatingOrder] = useState(false);
    const [englishOnly, setEnglishOnly] = useState(false);

    const [showData, setShowData] = useState([]);
    const [searchString, setSearchString] = useState("Archangel");

    useEffect(() => {

        async function searchAPI() {
            const response = await fetch(`https://www.superheroapi.com/api.php/6891348727638701/?q=${searchString}`);
            const rawData = await response.json();
            const data = rawData.map(s => s.show);
            setShowData(data);
        }

        searchAPI();

    }, [searchString]);

    function handleSearch(userInput){
        setSearchString(userInput);
    }

    return <>
        <SearchForm handleSearch={handleSearch} lastSearch={searchString}/>
        {<ShowList showData={showData} 
        // ratingOrder={ratingOrder} 
        // englishOnly={englishOnly} 
        // setRatingOrder={setRatingOrder} 
        // setEnglishOnly={setEnglishOnly}
        /> }
    </>
};
