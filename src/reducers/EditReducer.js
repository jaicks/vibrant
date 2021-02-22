const initialstate = false;

export default function (state = initialstate, action) {
    switch (action.type) {
        case "EDIT_USER": 
            return action.payload;

        default:
            return state;
    }
}