var patients = [
//     {  Firstname:'Refka',
//    Lastname:' Messoudi ',Email:'refka.messoudi@gmail.com',
//   Phone:'27699896',numero:'1', Address:'khzema est', Password:'refka123'},
//   {  Firstname:'mohamed',
//   Lastname:'mohamed ',Email:'mohamed.mohamed@gmail.com',
//  Phone:'22254541',numero:'2', Address:'khzema est', Password:'salwa123'},
//  {  Firstname:'amna',
//  Lastname:'Mesoudi ',Email:'amna.messoudi@gmail.com',
// Phone:'98654123',numero:'3', Address:'khzema est', Password:'salwa123'}

  ];
  var patient = {};
  const patientReducer = (state = patients, action) => {
    switch (action.type) {

      case 'ADD_PATIENT':
        return (
          state.concat({ newpatient: action.newpatient.newpatient })
        )

      case 'EDIT_PATIENT':
        return (
          state.map(el => el.Id === action.editpatient.Id ? el = action.editpatient : el)
        )

      case 'REMOVE_PATIENT':
        return (
          state.filter(el => el.Id !== action.Id)
        )
      case 'PATIENT_INFO':
        return (
          state = action.patient
        )
      case 'UPDATE_PATIENT':
        return (
          state = action.patients
        )
      default:
        return state
    }
  }
  export default patientReducer
