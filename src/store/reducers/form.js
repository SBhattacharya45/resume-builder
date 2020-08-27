import * as actionTypes from '../actions/actions';


const initialState = {
    formValues: [
        {
            id: 0,
            value: '',
            config: {
                type: 'text', 
                placeholder: 'First Name',
            },
            label: 'First Name'
        },
        {
            id: 1,
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Last Name'
            },
            label: 'Last Name'
        },            
        {
            id: 2,
            value: '',
            config: {
                type: 'text', 
                placeholder: 'City'
            },
            label: 'City'
        },            
        {
            id: 3,
            value: '',
            config: {
                type: 'text', 
                placeholder: 'State'
            },
            label: 'State'
        },            
        {
            id: 4,
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Pincode'
            },
            label: 'Pincode'
        },            
        {
            id: 5,
            value: '',
            config: {
                type: 'email', 
                placeholder: 'Enter your mail'
            },
            label: 'E-mail'
        },            
        {
            id: 6,
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Enter your phone number'
            },
            label: 'Phone'
        }
    ],
    eduDetails: [{
        qualification: "BTech",
        institute: 'Heritage',
        field: 'ECE',
        passout: "2022"
    }],
    expDetails: [{
        type: 'Internship',
        organization: 'OrangeInk',
        position: 'Web Developer',
        duration: '2 months'
    }],
    skills: []
}


const eduSubmitHandler = (state, action) => {

}

                


const reducer = (state = initialState,  action) => {
    switch(action.type){
        case actionTypes.EDU_SUBMIT_HANDLER : 
            return eduSubmitHandler;
        default:
            return state;
    }

}

export default reducer;