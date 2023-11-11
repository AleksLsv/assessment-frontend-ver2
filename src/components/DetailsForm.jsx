import React, {useState} from "react";
import styles from "./Form.module.css";
import {useNavigate} from "react-router-dom";
import {useLocation} from 'react-router-dom';

function DetailsForm({onAddShipment, onDelete}) {
    const {state} = useLocation();
    const {ship} = state;

    const [formData, setFormData] = useState({
        orderNo: ship.orderNo,
        date: ship.date,
        customer: ship.customer,
        trackingNo: ship.trackingNo,
        consignee: ship.consignee,
        status: ship.status
    });


    const handleChange = (e, field) => {
        setFormData({...formData, [field]: e.currentTarget.value});
    };


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const onUpdate = (e) => {
        onDelete(ship.orderNo);
        onAddShipment(formData);
        alert(`Data for order No ${formData["orderNo"]} has been updated. To return to the main table, click the button <<Back>>. You will see the changes at the bottom of the table.`);
        e.preventDefault();
    };

    const onAdd = (e) => {
        onAddShipment(formData);
        alert(`New data with order No ${formData["orderNo"]} has been added. To return to the main table, click the button <<Back>>. You will see the changes at the bottom of the table.`);
        e.preventDefault();
    };


    const formFields = [
        {label: "Order No", field: "orderNo"},
        {label: "Date", field: "date"},
        {label: "Customer", field: "customer"},
        {label: "Tracking No", field: "trackingNo"},
        {label: "Consignee", field: "consignee"},
        {label: "Status", field: "status"}
    ];


    return (
        <div>
            <h4>SHIPMENT DETAILS</h4>
            <form className={styles.form}>
                {formFields.map((formField) => (
                    <div className={styles.formField} key={formField.field}>
                        <label htmlFor={formField.field}>{formField.label}</label>
                        <input
                            type="text"
                            id={formField.field}
                            value={formData[formField.field]}
                            onChange={(e) => handleChange(e, formField.field)}
                        />
                    </div>
                ))}
                <button className={styles.button2} type="submit" onClick={onUpdate}> Update data</button>
                <button className={styles.button3} type="submit" onClick={onAdd}> Add data</button>
            </form>


            <button className={styles.button} onClick={handleClick}>
                Back
            </button>


        </div>
    );
}

export default DetailsForm;