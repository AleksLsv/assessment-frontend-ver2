import React from "react";
import img from './../assets/img/notes.png'
import {useNavigate} from "react-router-dom";

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
                <button onClick={handleClick}><img src={img} alt="notes"/></button>
                <button onClick={handleDelete} > x </button>
            </td>
        </tr>
    );
}

export default TableRow;