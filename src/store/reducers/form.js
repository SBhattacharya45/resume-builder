
const initialState = {
    details: {
      formValues: [
        {
            id: 0,
            value: 'Soumyadeep',
            config: {
                type: 'text', 
                placeholder: 'First Name',
                label: 'First Name'
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
            value: 'Bhattacharya',
            config: {
                type: 'text', 
                placeholder: 'Last Name',
                label: 'Last Name'
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
            value: 'Kolkata',
            config: {
                type: 'text', 
                placeholder: 'City',
                label : 'City'
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
            value: 'West Bengal',
            config: {
                type: 'text', 
                placeholder: 'State',
                label : 'State'
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
            value: '700149',
            config: {
                type: 'text', 
                placeholder: 'Pincode',
                label: 'Pincode'
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
            value: 'test@mail.com',
            config: {
                type: 'email', 
                placeholder: 'Enter your mail',
                label : 'Email ID'
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
            value: '9898989898',
            config: {
                type: 'text', 
                placeholder: 'Enter your phone number',
                label : 'Phone Number'
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
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Enter your github link',
                label : 'GitHub'
            },
            validation: {
            },
            valid: false,
            touched : false
        },
        {
            id: 8,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Enter your linkedin link',
                label : 'LinkedIn'
            },
            validation: {
            },
            valid: false,
            touched : false
        },
        {
            id: 9,
            inputType: "textarea",
            value: 'I am Iron Man',
            config: {
                type: 'text', 
                placeholder: 'Enter your statement',
                label : 'About you'
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
    skills: [{
        skill: 'HTML'
    },{
        skill: 'CSS'
    },{
        skill : 'bootstrap'
    },{
        skill : 'bootstrap'
    },{
        skill : 'bootstrap'
    }],
    achivs: [{
        achiv: "Major weeb guy"
    }, {
        achiv: "200+ anime completed"
    }],
    proDetails: [{
        type: 'discount',
        name:'resume maker',
        description: 'hello',
        link: 'link'
    }],
    trainDetails: [],
    imageUrl: null,
    formIsValid: false,
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