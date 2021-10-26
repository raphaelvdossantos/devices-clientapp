import { DEVICES_FILTER, SORTBY_TYPES } from "./constants";

export function cleanHDDString(capacity) {
    const nonDigitRegex = /\D/g;
    const capacityValue = capacity.substring(0, capacity.search(nonDigitRegex)) || capacity;
    return capacityValue;
}

export function sortDevicesBy(filter, devicesList){
    if(filter === SORTBY_TYPES.SYSTEM_NAME) {
        return devicesList.sort((a, b) => {
            let firstName = a.system_name.toUpperCase();
            let nextName = b.system_name.toUpperCase()
            if( firstName< nextName) return -1;
            if( firstName > nextName) return 1
            return 0;
        })
    }

    if(filter === SORTBY_TYPES.HDD_CAPACITY) {
        return devicesList.sort((a, b) => a.hdd_capacity - b.hdd_capacity)
    }

}

export function filterDevices(filter, devicesList) {
    if(filter === DEVICES_FILTER.ALL) return devicesList;

    return devicesList.filter(device => device.type === filter);
}