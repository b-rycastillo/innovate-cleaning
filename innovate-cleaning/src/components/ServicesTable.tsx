import { useState, useEffect } from "react";

import "../styles/ServicesTable.scss"; // Import your CSS file here
interface TableData {
  columns: string[];
  data: string[][];
}
const ServicesTable: React.FC = () => {
  const [tableData, setTableData] = useState<TableData | null>(null);
  useEffect(() => {
    fetch("/data/servicesTable.json")
      .then((response) => response.json())
      .then((data: TableData) => setTableData(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);
  if (!tableData) return <p>Loading...</p>;
  return (
    <table className="services-table">
      <thead>
        <tr>
          {tableData.columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ServicesTable;