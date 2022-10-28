import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from './Slice/ExpenseSlice'

const store = configureStore({
    reducer:{
        expenses:expenseReducer
    }
});


export default store;