import "./styles.css";
import Table from "./Table";

const columnDefs = [
  {
    headerName: "_id",
    field: "_id",
    headersClass: "id",
    cellClass: "id cell"
  },

  {
    headerName: "name",
    field: "name",
    valueGetter: (data) => data.name.toUpperCase()
  },

  {
    headerName: "email",
    field: "email"
  },
  {
    headerName: "Submit",
    field: "email",
    renderChild: (data) => (
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        submit
      </button>
    )
  }
];

const rowData = [
  {
    _id: "2",
    name: "gurkirtan singh",
    email: "gurkirtans10@gmail.com",
    password: "tttt"
  },
  {
    _id: "1",
    name: "gurkirtan4",
    email: "gurkirtans10@gmail.com"
  },
  {
    _id: "1",
    name: "gurkirtan5",
    email: "gurkirtans10@gmail.com"
  }
];
export default function App() {
  return (
    <div className="App">
      <Table
        columnDefs={columnDefs}
        rowData={rowData}
        rowClick={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
}
