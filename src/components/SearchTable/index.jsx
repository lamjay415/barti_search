import { Container, Button } from '@mui/material';
import {DataGrid} from '@mui/x-data-grid'

const SearchTable = ({selectedResults,setSelectedResults}) =>{
    
    //table setup
    const columns = [
        {field: 'firstName', headerName: 'First Name', width: 250},
        {field: 'lastName', headerName: 'Last Name', width: 250},
        {field: 'id', headerName: 'ID', width: 100},
    ]

    //reset state and remove local storage data
    const handleClick = () =>{
        setSelectedResults([]);
        localStorage.removeItem('searchedResults');
    }

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Container justify='center' maxWidth='md' style={{height:'400px', marginTop:'150px'}}>
                <DataGrid
                    rows={selectedResults}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </Container>
            <Button size ='small' variant='contained' onClick={()=>handleClick()}>Reset Search</Button>
        </div>
    )
}

export default SearchTable;