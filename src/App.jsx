import {CssBaseline, Typography, Container} from '@mui/material'
import React, {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import SearchTable from './components/SearchTable';

const App = () =>{

    const [searchResults, setSearchResults] = useState([]);
    const [selectedResults, setSelectedResults] = useState([]);

    //on mount, check local storage for previous search results
    //if there are previous results, set results to state
    useEffect(()=>{
        const previousData = localStorage.getItem('searchedResults');
        if(previousData){
            setSelectedResults(JSON.parse(previousData));
            console.log('parsed' + searchResults);
        }
    }, [searchResults]);

    return (
        <div>
            <CssBaseline/>
            <Typography variant='h4'>Barti Challenge</Typography>
            <Container>
                    <SearchBar searchResults={searchResults} setSearchResults={setSearchResults} setSelectedResults={setSelectedResults}/>
                    <SearchTable selectedResults={selectedResults} setSelectedResults={setSelectedResults}/>
                
            </Container>
        </div>
    )
}

export default App;