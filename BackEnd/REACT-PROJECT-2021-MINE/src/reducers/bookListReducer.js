export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_IMAGES': return [...state, action.payload];
        default: return state;
    }
}