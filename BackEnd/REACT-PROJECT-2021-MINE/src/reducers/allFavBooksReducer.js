export default (state = [], action) => {
    switch (action.type) {
        case 'MY_BOOKS': return [action.payload];
        default: return state;
    }
}