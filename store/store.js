import { createStore} from '../assets/libs/redux/redux.min.js'
import rootReducer from './reducers/index.js'

export default createStore(rootReducer)