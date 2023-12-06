import './App.css';
import Header from './components/Header';
import React from 'react';
import { connect } from 'react-redux';
import { addShipment, deleteShipment, fetchShipmentsData } from './actions/actionCreators';
import { Route, Routes } from "react-router-dom";
import ShipmentsTable from "./components/ShipmentsTable";
import DetailsForm from "./components/DetailsForm";
import Preloader from "./components/common/Preloader";


class App extends React.Component {


  componentDidMount() {
    this.props.fetchShipmentsData();
  }


  render() {
    const { loading, ...restProps } = this.props;

    return (

      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>

        <div className='container'>

          {(loading) ? (
            <Preloader />
          ) : (
            <Routes>
              
              <Route path="/" element={<ShipmentsTable {...restProps}
                onDelete={this.props.deleteShipment} />} />

              <Route path="/form" element={<DetailsForm onDelete={this.props.deleteShipment}
                onAddShipment={this.props.addShipment} />} />

            </Routes>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { error, loading, shipments, loadedFromFile } = state.shipmentsR;
  return {
    error,
    loading,
    shipments,
    loadedFromFile,
  };
}

export default connect(mapStateToProps, {
  fetchShipmentsData,
  deleteShipment,
  addShipment
})(App);


