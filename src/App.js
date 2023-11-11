import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {addShipment, deleteShipment, fetchShipmentsData} from './actions/actionCreators';
import {Route, Routes} from "react-router-dom";
import ShipmentsTable from "./components/ShipmentsTable";
import DetailsForm from "./components/DetailsForm";
import Preloader from "./components/common/Preloader";


class App extends React.Component {


    componentDidMount() {
        this.props.fetchShipmentsData();
    }


    render() {
        const {error, loading, shipments, loadedFromFile} = this.props;

        if (loading) {
            return <Preloader/>
        }

        if (error && !loadedFromFile) {
            return <div>
                <h4>Error: {error.message} </h4>
            </div>;
        }

        return (
            <div className="App">

                {(loadedFromFile) ? (
                    <h4>Error: {error.message} - Data loaded from file </h4>
                ) : (
                    <h4>Connection successful - Data loaded from server</h4>
                )}

                <Routes>
                    <Route path="/" element={<ShipmentsTable data={shipments}
                                                             onDelete={this.props.deleteShipment}/>}/>
                    <Route path="/form" element={<DetailsForm onDelete={this.props.deleteShipment}
                                                              onAddShipment={this.props.addShipment}/>}/>
                </Routes>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {error, loading, shipments, loadedFromFile} = state.shipments;
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


