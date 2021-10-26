const initialState = [];

export const devicesReducer = (state = initialState, action) => {

    switch (action.type) {
        case "devices/Info":
            return action.devices;
        default:
            return state;
    }
};
