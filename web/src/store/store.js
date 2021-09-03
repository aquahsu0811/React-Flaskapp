import { createStore } from 'redux';
import imgReducer from './imgReducer';

const store = createStore(imgReducer);

export default store;