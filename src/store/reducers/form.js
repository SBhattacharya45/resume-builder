
const initialState = {
    details: {
      formValues: [
        {
            id: 0,
            value: '',
            config: {
                type: 'text', 
                placeholder: 'First Name',
            },
            validation: {
                required: true
            },
            valid: false,
            touched : false
        },
        {
            id: 1,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Last Name'
            },
            validation: {
                required: true
            },
            valid: false,
            touched : false
        },            
        {
            id: 2,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'City'
            },
            validation: {
                required: true
            },
            valid: false,
            touched : false
        },            
        {
            id: 3,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'State'
            },
            validation: {
                required: true
            },
            valid: false,
            touched : false
        },            
        {
            id: 4,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Pincode'
            },
            validation: {
                required: true
            },
            valid: false,
            touched : false
        },            
        {
            id: 5,
            inputType: 'input',
            value: '',
            config: {
                type: 'email', 
                placeholder: 'Enter your mail'
            },
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched : false
        },            
        {
            id: 6,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Enter your phone number'
            },
            validation: {
                required: true,
                isNumeric: true
            },
            valid: false,
            touched : false
        },
        {
            id: 7,
            inputType: "textarea",
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Enter your statement'
            },
            validation: {
                required: true
            },
            valid: false,
            touched : false
        }
    ],
    eduDetails: [{
        qualification: "B.Tech",
        institute: 'Heritage Institute of Technology',
        field: 'Electronics',
        passout: '2022',
        grade: '9'
    }],
    expDetails: [{
        type: 'Internship',
        organization: 'OrangeInk',
        position: 'Web Developer',
        duration: '2 months'
    }],
    skills: [],
    achivs: [],
    imageUrl: null,
    formIsValid: false
      }
}

const updateDetails = (state, action) => {
    const updatedState = {
        ...state,
        details: action.userDetails
    }

    return updatedState
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'UPDATE_DETAILS': return updateDetails(state, action);

        default:
            return state;
    }
};

export default reducer;