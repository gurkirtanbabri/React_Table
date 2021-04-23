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
  }

  if (data.count) {
    return data.count;
  }

  return "-";
};

const getHeader = (data, index, count) => {
  return (
    <th key={index} className={data.hedderClass || " "}>
      {data.headerName || index}
    </th>
  );
};

const Table = ({
  columnDefs,
  rowData,
  tableClass = "table",
  headersClass,
  rowClick,
  showCount
}) => {
  return (
    <table className={`table ${tableClass}`}>
      <tr className={`header ${headersClass || ""}`}>
        {showCount && getHeader({ headerName: "#" }, "#")}
        {!isEmpty(columnDefs) &&
          columnDefs.map((data, index) => getHeader(data, index, showCount))}
      </tr>

      {!isEmpty(rowData) &&
        rowData.map((celldata, index) => (
          <tr
            key={index}
            onClick={() => {
              rowClick(celldata);
            }}
          >
            {showCount && (
              <td key={index} className="count">
                {index + 1}
              </td>
            )}

            {!isEmpty(columnDefs) &&
              columnDefs.map((data, index) => (
                <td key={index} className={`cell ${data.cellClass || ""}`}>
                  {renderRow(data, celldata)}
                </td>
              ))}
          </tr>
        ))}
    </table>
  );
};

export default Table;
