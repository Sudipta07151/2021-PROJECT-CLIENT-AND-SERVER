export default (state = [], action) => {
    console.log(state);
    switch (action.type) {
        case 'MY_BLOGS':
            return action.payload;
        case 'DELETE_BLOG':
            return state.filter(post => post._id.toString() != action.payload)
        default:
            return state;
    }
}