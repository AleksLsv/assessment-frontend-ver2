import axios from 'axios';


const instance = axios.create({
    //withCredentials: false,
    baseURL: 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0'
    });

export function fetchShipments() {
    return instance.get('')
}

// is also a working version
/*export function fetchShipments() {
    const url = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
    return axios.get(url);
}*/

export function fetchShipmentsFromFile() {
    return require('../assets/data/shipments.json');
}
