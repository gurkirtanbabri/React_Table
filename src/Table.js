import React from "react";
import isEmpty from "lodash.isempty";
import "./table.css";
const renderRow = (data, celldata) => {
  if (data?.valueGetter) {
    return data.valueGetter(celldata);
  }
  if (data.renderChild) {
    return data.renderChild(celldata);
  }
  if (data.field) {
    return celldata[data.field] || "-";
  } else {
  }

  return "-";
};

const Table = ({
  columnDefs,
  rowData,
  tableClass = "table",
  headersClass,
  rowClick
}) => {
  return (
    <table className={`table ${tableClass}`}>
      <tr className={`header ${headersClass || ""}`}>
        {!isEmpty(columnDefs) &&
          columnDefs.map((data, index) => (
            <th className={data.hedderClass || " "}>
              {data.headerName || index}
            </th>
          ))}
      </tr>

      {!isEmpty(rowData) &&
        rowData.map((celldata, index) => (
          <tr
            onClick={() => {
              rowClick(celldata);
            }}
          >
            {!isEmpty(columnDefs) &&
              columnDefs.map((data, index) => (
                <td className={`cell ${data.cellClass || ""}`}>
                  {renderRow(data, celldata)}
                </td>
              ))}
          </tr>
        ))}
    </table>
  );
};

export default Table;
