import React from "react";
import s from './Table.module.css';
import TableRow from "./TableRow";

function ShipmentsTable(props) {
    const rows = props.data
        .map((ship) => <TableRow key={ship.orderNo} ship={ship} onDelete={props.onDelete}/>);

    return (
        <table id="my-table" className={s.table}>
            <thead>
            <tr>
                <th>ORDER NO</th>
                <th>DELIVERY DAY</th>
                <th>CUSTOMER</th>
                <th>TRACKING NO</th>
                <th>STATUS</th>
                <th>CONSIGNEE</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    );
}

export default ShipmentsTable;