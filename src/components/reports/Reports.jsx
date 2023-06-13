import React from "react";
import css from './Reports.module.css'
import Header from "../header/Header";
import { useTable } from "react-table";
import fakeData from './MOCK.DATA.json'
import "./App.css"


const Reports = () => {
    const data = React.useMemo(() => fakeData, []);
    const columns = React.useMemo(
      () => [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "First Name",
          accessor: "first_name",
        },
        {
          Header: "Last Name",
          accessor: "last_name",
        },
        {
          Header: "Email",
          accessor: "email",
        },
        {
          Header: "Gender",
          accessor: "gender",
        },
        {
          Header: "University",
          accessor: "university",
        },
      ],
      []
    );
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });

      return (
        <div className="App">
            <Header />
            <h1 className={css.h1}>all reports</h1>
            <div className="container">
                <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                            {column.render("Header")}
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                            <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                        ))}
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>
            </div>
        );
        }

export default Reports