import React from "react";
import TableRow from "./TableRow";
import { Link } from 'react-router-dom';
import s from './Table.module.css';

function ShipmentsTable(props) {

  const { shipments, error, loadedFromFile } = props;

  const rows = shipments
    .map((ship) => <TableRow key={ship.orderNo} ship={ship} onDelete={props.onDelete} />);

  return (
    <div className={s.loaded}>

      {(error && !loadedFromFile) ? (
        <p className={s.errorNoData}>Error: {error.message} </p>
      ) : (
        <div className="loaded__Data">
          <div className={s.loadedTextAndBotton}>

            {(loadedFromFile) ? (
              <p className={s.fromFile}>
                Error: {error.message} - Data loaded from a file </p>
            ) : (
              <p className={s.fromServer}>
                Connection successful - Data loaded from the server</p>
            )}
            <Link to="/form" className={s.add_data}>add new data</Link>
          </div>


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

        </div>
      )}
    </div>
  );
}

export default ShipmentsTable;