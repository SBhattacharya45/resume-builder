const initialState = {
    templateId: null
}

const changeTemplate = (state, action) => {
    const updatedState = {
        templateId: action.id
    }

    return updatedState;
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'CHANGE_TEMPLATE': return changeTemplate(state, action);

        default:
            return state;
    }
};

export default reducer;