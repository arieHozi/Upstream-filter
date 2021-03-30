import React, { useState } from 'react'
import './App.css';
import { DataGrid } from "@material-ui/data-grid";
import Filter from './components/Filter';


const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "customer", headerName: "Customer", width: 130 },
  { field: "address", headerName: "Address", width: 130 },
  { field: "order", headerName: "Order", width: 130 },
  { field: "tax", headerName: "Tax", width: 130 },
  { field: "total", headerName: "Total", width: 130 },

];

function App() {
  const [filterdArray, setFilterdArray] = useState([])

  return (

    <div class="main-container">
      <Filter setFilterdA={setFilterdArray} />
      <DataGrid
        rows={filterdArray}
        columns={columns}
        pageSize={14}
      />

    </div >

  );
}

export default App;
