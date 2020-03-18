var rdvs = [
      {  Firstname:'Refka',
     Lastname:' Messoudi ',Email:'refka.messoudi@gmail.com',
   numero:'1', Address:'khzema est', Password:'refka123',date:'08/11/2019'},
    {  Firstname:'mohamed',
    Lastname:'mohamed ',Email:'mohamed.mohamed@gmail.com',
   Phone:'22254541',numero:'2', Address:'khzema est', Password:'salwa123',date:'10/10/2019'},
   {  Firstname:'amna',
   Lastname:'Mesoudi ',Email:'amna.messoudi@gmail.com',
  Phone:'98654123',numero:'3', Address:'khzema est', Password:'salwa123',date:'12/10/2019'},
  {  Firstname:'salwa',
   Lastname:'Essid ',Email:'salwa.essid@gmail.com',
  Phone:'927699896',numero:'4', Address:'hamem sousse', Password:'salwa123',date:'12/10/2019'}

    ];
    var rdv = {};
    const rdvReducer = (state = rdvs, action) => {
      switch (action.type) {

        case 'ADD_RDV':
          return (
            state.concat({ newrdv: action.newrdv.newrdv })
          )

        case 'EDIT_RDV':
          return (
            state.map(el => el.Id === action.editrdv.Id ? el = action.editrdv : el)
          )

        case 'REMOVE_RDV':
          return (
            state.filter(el => el.Id !== action.Id)
          )
        case 'RDV_INFO':
          return (
            state = action.rdv
          )
        case 'UPDATE_RDV':
          return (
            state = action.rdvs
          )
        default:
          return state
      }
    }
    export default rdvReducer
