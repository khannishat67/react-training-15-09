import React, { useEffect, useState } from 'react';
import { useQueryParams } from '../hooks/custom-hooks';
const SearchResults = () => {
    const [searchValue, setSearchValue] = useState('');
    const queryParams = useQueryParams();
    useEffect(() => {
        console.log(queryParams);
        const val = queryParams['search']
        console.log(val);
        setSearchValue(val);
    }, [])
    return (
        <h1>Search Results</h1>
    )
}
export default SearchResults