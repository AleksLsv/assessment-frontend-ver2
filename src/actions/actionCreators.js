import {AppActionType} from './actionTypes';
import {fetchShipments, fetchShipmentsFromFile} from '../api/api';


export function fetchShipmentsRequest() {
    return {
        type: AppActionType.FETCH_SHIPMENTS_REQUEST,
    };
}

export function fetchShipmentsSuccess(shipments) {
    return {
        type: AppActionType.FETCH_SHIPMENTS_SUCCESS,
        shipments,
    };
}

export function loadedFromFile(shipments) {
    return {
        type: AppActionType.LOADED_FROM_FILE,
        shipments,
    };
}

export function fetchShipmentsFailure(error) {
    return {
        type: AppActionType.FETCH_SHIPMENTS_FAILURE,
        error,
    };
}

export const deleteShipment = (orderNo) => ({type: AppActionType.DELETE_SHIPMENT, orderNo});
export const addShipment = (ship) => ({type: AppActionType.ADD_SHIPMENT, payload: ship});



// thunkCreator, returns a thunk
export function fetchShipmentsData() {
    return (dispatch) => {
        dispatch(fetchShipmentsRequest());
        return fetchShipments()
            .then((response) => {
                dispatch(fetchShipmentsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchShipmentsFailure(error));
                dispatch(loadedFromFile(fetchShipmentsFromFile()));
            })
            .catch(error => {
                dispatch(fetchShipmentsFailure(error));
                });
    };
}








