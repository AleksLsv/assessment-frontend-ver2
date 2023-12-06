import React from "react";
import imgNotes from './../assets/images/notes.png';
import imgDelete from './../assets/images/delete.svg';
import {useNavigate} from "react-router-dom";
import s from './Table.module.css';



function TableRow({ship, onDelete}) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/form', { state: { ship } });
    }

    const handleDelete = ()=>{onDelete(ship.orderNo)};


    return (
        <tr key={ship.orderNo}>
            <td>{ship.orderNo}</td>
            <td>{ship.date}</td>
            <td>{ship.customer}</td>
            <td>{ship.trackingNo}</td>
            <td>{ship.status}</td>
            <td>{ship.consignee}</td>
            <td>
              <div className={s.table_btns}>
                <button onClick={handleClick}><img src={imgNotes} alt="notes"/></button>
                <button onClick={handleDelete}><img src={imgDelete} alt="delete"/></button>
              </div>
            </td>
        </tr>
    );
}

export default TableRow;