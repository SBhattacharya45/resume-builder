export const changeTemplate = (templateId) => {
    return {
        type: 'CHANGE_TEMPLATE',
        id: templateId
    };
};

export const changeCase = (chosenCase) => {
    return {
        type: 'CHANGE_CASE',
        chosenCase: chosenCase
    };
};