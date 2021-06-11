export default (state = null, action) => {
    switch (action.type) {
        case 'SINGLE_BLOG': return action.payload;
        default: return state
    }
}

