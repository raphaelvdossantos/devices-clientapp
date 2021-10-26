import axios from 'axios';

export const setDevices = (devices) => (
    {
        type: "devices/Info",
        devices
    }
);


export const fetchDevices = async () => {
    const response = await axios.get(process.env.REACT_APP_DEVICES);
    return response.data;
};

export const getDevices = () =>
    async (dispatch) => {
        const devices = await fetchDevices();
        dispatch(setDevices(devices));
    };

export const deleteDevice = (deviceID) =>
    async (dispatch) => {
        await axios.delete(`${process.env.REACT_APP_DEVICES}/${deviceID}`);
        dispatch(getDevices());
    };

export const updateDevice = (deviceID, deviceData) =>
    async (dispatch) => {
        await axios.put(`${process.env.REACT_APP_DEVICES}/${deviceID}`, {
            system_name: deviceData.name, 
            type: deviceData.type, 
            hdd_capacity: deviceData.HDD 
        });
        dispatch(getDevices());
    };

export const postDevice = (deviceData) => 
    async(dispatch) => {
        await axios.post(process.env.REACT_APP_DEVICES, {
            system_name: deviceData.name,
            type: deviceData.type,
            hdd_capacity:deviceData.HDD 
        });

        dispatch(getDevices());
    }