
const initialState = {
    details: {
        formValues: [
          {
            id: 0,
            value: 'Soumya',
            config: {
              type: 'text',
              placeholder: 'First Name'
            }
          },
          {
            id: 1,
            inputType: 'input',
            value: 'Bhattachraya',
            config: {
              type: 'text',
              placeholder: 'Last Name'
            }
          },
          {
            id: 2,
            inputType: 'input',
            value: 'Kolkata',
            config: {
              type: 'text',
              placeholder: 'City'
            }
          },
          {
            id: 3,
            inputType: 'input',
            value: 'West Bengal',
            config: {
              type: 'text',
              placeholder: 'State'
            }
          },
          {
            id: 4,
            inputType: 'input',
            value: '700149',
            config: {
              type: 'text',
              placeholder: 'Pincode'
            }
          },
          {
            id: 5,
            inputType: 'input',
            value: 'test@test.mail.com',
            config: {
              type: 'email',
              placeholder: 'Enter your mail'
            }
          },
          {
            id: 6,
            inputType: 'input',
            value: '99999999',
            config: {
              type: 'text',
              placeholder: 'Enter your phone number'
            }
          },
          {
            id: 7,
            inputType: 'textarea',
            value: 'i am iron man',
            config: {
              type: 'text',
              placeholder: 'Enter your statement'
            }
          }
        ],
        eduDetails: [
          {
            qualification: 'B.Tech',
            institute: 'Heritage Institute of Technology',
            field: 'Electronics',
            passout: '2022',
            grade: '9'
          }
        ],
        expDetails: [
          {
            type: 'Internship',
            organization: 'OrangeInk',
            position: 'Web Developer',
            duration: '2 months'
          }
        ],
        skills: [
          {
            skill: 'python'
          },
          {
            skill: 'python'
          }
        ],
        achivs: [
          {
            achiv: 'Topped in 3rd sem'
          }
        ],
        imageUrl: 'blob:http://localhost:3000/09349018-13e3-4756-9ec4-759cefa29e83'
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