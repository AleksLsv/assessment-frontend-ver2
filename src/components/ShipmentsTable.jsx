import React from "react";
import s from './Table.module.css';
import TableRow from "./TableRow";
import { useNavigate } from "react-router-dom";

function ShipmentsTable(props) {

  const { shipments, error, loadedFromFile } = props;

  const rows = shipments
    .map((ship) => <TableRow key={ship.orderNo} ship={ship} onDelete={props.onDelete} />);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };


  return (
    <div className={s.loaded}>

      <botton className="add_data" onClick={handleClick}>
        Add new data
      </botton>


      {(error && !loadedFromFile) ? (
        <p className={s.errorNoData}>Error: {error.message} </p>
      ) : (
        <div className='loaded__data-got'>
          {(loadedFromFile) ? (
            <p className={s.fromFile}>
              Error: {error.message} - Data loaded from a file </p>
          ) : (
            <p className={s.fromServer}>
              Connection successful - Data loaded from the server</p>
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