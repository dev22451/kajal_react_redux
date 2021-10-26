import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'
// imported reducer
const store = configureStore({
        reducer:reducer
});

export default store;
