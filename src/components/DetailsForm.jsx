import React, { useState } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function DetailsForm({ onAddShipment, onDelete }) {
  const { state } = useLocation();
  const { ship } = state;

  const [formData, setFormData] = useState({
    orderNo: ship.orderNo,
    date: ship.date,
    customer: ship.customer,
    trackingNo: ship.trackingNo,
    consignee: ship.consignee,
    status: ship.status
  });


  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.currentTarget.value });
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


  return (
    <div className={styles.details}>
      <botton className={styles.details_btn_back} onClick={handleClick}>
        back to Table
      </botton>


      <form className={styles.form}>
        <h2>SHIPMENT DETAILS</h2>
        <ul className={styles.form_list}>
          <li className={styles.form__list_item} key="orderNo">
            <label htmlFor="orderNo">Order No</label>
            <input type="text" id="orderNo" value={formData.orderNo}
              onChange={(e) => handleChange(e, "orderNo")}>
            </input>
          </li>

          <li className={styles.form__list_item} key="date">
            <label htmlFor="date">Date</label>
            <input type="text" id="date" value={formData.date}
              onChange={(e) => handleChange(e, "date")}>
            </input>
          </li>

          <li className={styles.form__list_item} key="customer">
            <label htmlFor="customer">Customer</label>
            <input type="text" id="customer" value={formData.customer}
              onChange={(e) => handleChange(e, "customer")}>
            </input>
          </li>

          <li className={styles.form__list_item} key="trackingNo">
            <label htmlFor="trackingNo">tracking No</label>
            <input type="text" id="trackingNo" value={formData.trackingNo}
              onChange={(e) => handleChange(e, "trackingNo")}>
            </input>
          </li>

          <li className={styles.form__list_item} key="consignee">
            <label htmlFor="consignee">Consignee</label>
            <input type="text" id="consignee" value={formData.consignee}
              onChange={(e) => handleChange(e, "consignee")}>
            </input>
          </li>

          <li className={styles.form__list_item} key="status">
            <label htmlFor="status">Status</label>
            <input type="text" id="status" value={formData.status}
              onChange={(e) => handleChange(e, "status")}>
            </input>
          </li>

        </ul>

        <button className={styles.form_btn} type="submit" onClick={onUpdate}> Update data</button>
        <button className={styles.form_btn} type="submit" onClick={onAdd}> Add data</button>
      </form>

    </div>
  );
}

export default DetailsForm;