import { TAB_TYPE, DEVICES_FILTER, SORTBY_TYPES } from './../../utils/constants';

const initialState = {
    activeTab: TAB_TYPE.DASHBOARD,
    filters: {
        sortBy: SORTBY_TYPES.SYSTEM_NAME,
        deviceType: DEVICES_FILTER.ALL
    }
};

export const panelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "panel/setActiveTab":
            return {...state, activeTab: action.tab };
        case "panel/Filter":
            return {...state, filters: {...state.filters, ...action.filter}}
        default:
            return state;
    }
};