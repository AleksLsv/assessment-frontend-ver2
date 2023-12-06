import React from "react";
import s from './Table.module.css';
import TableRow from "./TableRow";

function ShipmentsTable(props) {

  const { shipments, error, loadedFromFile } = props;

  const rows = shipments
    .map((ship) => <TableRow key={ship.orderNo} ship={ship} onDelete={props.onDelete} />);


  return (
    <div className={s.loaded}>

      {(error && !loadedFromFile) ? (
        <p className={s.errorNoData}>Error: {error.message} </p>
      ) : (
        <div className='loaded__data-got'>
          {(loadedFromFile) ? (
            <p className={s.fromFile}>
              Error: {error.message} - Data are loaded from file </p>
          ) : (
            <p className={s.fromServer}>
              Connection successful - Data are loaded from server</p>
          )}


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