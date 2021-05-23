export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_BOOKS': return [...state, action.payload];
        default: return state;
    }
}