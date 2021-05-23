export default (state = null, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'SELECT_BOOK': return 'COOLSDSD';
        default: return state
    }
}