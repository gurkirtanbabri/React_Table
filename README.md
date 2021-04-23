simmple react table

you have to pass data add reder table

props : - 
                                                    // column defs //

const columnDefs = [
  
  1.simple field
  
  {
    headerName: "_id",
    field: "_id"
    headersClass: "id",
    cellClass: "id cell"
  },



  2. field with valueGetter

  {
    headerName: "name",
    field: "name",
    valueGetter: (data) => data.name.toUpperCase()
  },


  3. field for render child


  {
    headerName: "Submit",
    field: "email",
    renderChild: (data) => (
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("button");
          console.log(data);
        }}
      >
        submit
      </button>
    )
  }
];


                                             // component//

      <Table
        columnDefs={columnDefs}
        rowData={rowData}  //data
        rowClick={(data) => {
          console.log(data);     row click function
        }}
        showCount               for show count column
      />
