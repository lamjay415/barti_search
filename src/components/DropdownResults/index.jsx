import { MenuItem, Select } from "@mui/material"
import React, { useEffect, useState } from "react";


const DropdownResults = ({results, setSearch, setSelectedResults}) => {

    const [patientName, setPatient] = useState("");

    //map all search patients to menu item
    const searchPatients = results.map((pat) => (
            <MenuItem value={pat.fullName} key={`${pat.id}`}>
                {pat.fullName}
            </MenuItem>
        )
    );
    
    //find patient under selected name
    //set state to patient
    //store searched patients to local storage
    const handleSelect = (value) => {
        const patient = results.filter((p) => p.fullName.includes(value));
        setPatient(patient); 
        setSearch(value);
        setSelectedResults(patient);
        localStorage.setItem('searchedResults', JSON.stringify(patient));
    }

    return (
        <div>
            <Select
                value={patientName}
                onChange={(e)=>{handleSelect(e.target.value);}}
                style={{width:'300px'}}
            >
            {searchPatients}
            </Select>
        </div>
    )
}

export default DropdownResults;