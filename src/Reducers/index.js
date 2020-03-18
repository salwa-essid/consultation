import {combineReducers} from 'redux'

import psyReducer from './psyReducer'
import patientReducer from './patientReducer'
import rdvReducer from './rdvReducer'

export default combineReducers({patientReducer,psyReducer,rdvReducer})
