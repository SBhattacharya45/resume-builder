const initialState = {
    templateId: null,
    chosenCase: 1
}

const changeTemplate = (state, action) => {
    const updatedState = {
        ...state,
        templateId: action.id
    }

    return updatedState;
}

const changeCase = (state, action) => {
    const updatedState = {
        ...state,
        chosenCase: action.chosenCase
    }
    return updatedState;
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'CHANGE_TEMPLATE': return changeTemplate(state, action);

        case 'CHANGE_CASE': return changeCase(state, action);
        
        default:
            return state;
    }
};

export default reducer;