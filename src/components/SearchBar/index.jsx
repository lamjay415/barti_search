import { TextField } from "@mui/material"
import React, {useState, useEffect} from 'react';
import DropdownResults from "../DropdownResults";

const SearchBar = ({searchResults, setSearchResults, setSelectedResults}) => {

    const [search, setSearch] = useState("");

    //call api with url + search query
    const fetchData = async(url)=>{
        try {
            const response = await fetch(url);
            const json = await response.json();
            setSearchResults(json);
            console.log(searchResults);
        } catch (error) {
            console.log("error", error);
        }
    }

    //search input with api call if input is not empty
    //setTimeout on search to 1 second
    const handleSearch = (input) => {
        setSearch(input);
        // console.log(input);
        if(input.length > 0 ){
            setTimeout(()=>fetchData(`https://6195803474c1bd00176c6d9a.mockapi.io/api/v1/patient?search=${input}`),1000);
        }
    }

    //check if enter key is pressed and set results to state
    const handleEnter = (e) =>{
        if(e.keyCode===13){
            setSelectedResults(searchResults);
            console.log(searchResults);
        } 
    }
    
    return (
        <div style={{display:'flex', justifyContent:'center', marginTop:'150px'}}>
            <TextField label='Search Patients' variant='outlined' 
                value={search} onChange={(e)=>handleSearch(e.currentTarget.value)} 
                onKeyDown={(e)=>handleEnter(e)} style={{width:'300px'}}/>
            <DropdownResults results={searchResults} search={search} setSearch={setSearch} setSelectedResults={setSelectedResults}/>
        </div>
    )
}

export default SearchBar