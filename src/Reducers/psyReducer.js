var psys = [

/*
  {  Firstname:'Refka',
  Lastname:' Messoudi ',Email:'refka.messoudi@gmail.com',
 Phone:'27699896',numero:'1', Address:'khzema est', Password:'refka123'},
 {  Firstname:'mohamed',
 Lastname:'mohamed ',Email:'mohamed.mohamed@gmail.com',
Phone:'22254541',numero:'2', Address:'khzema est', Password:'salwa123'},
{  Firstname:'amna',
Lastname:'Mesoudi ',Email:'amna.messoudi@gmail.com',
Phone:'98654123',numero:'3', Address:'khzema est', Password:'salwa123'} */
];
var psy = {};
const psyReducer = (state = psys, action) => {
  switch (action.type) {

    case 'ADD_PSY':
      return (
        state.concat({ newpsy: action.newpsy.newpsy })
      )

    case 'EDIT_PSY':
      return (
        state.map(el => el.Id === action.editpsy.Id ? el = action.editpsy : el)
      )

    case 'REMOVE_PSY':
      return (
        state.filter(el => el.Id !== action.Id)
      )
    case 'PSY_INFO':
      return (
        state = action.psy
      )
    case 'UPDATE_PSY':
      return (
        state = action.psys
      )
    default:
      return state
  }
}
export default psyReducer
