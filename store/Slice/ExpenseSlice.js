import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalExpense:0,
    expenseArr:[],
    totalExpense:0
}
const getTotalExpense = (arr)=>{
    let data = 0;
    arr.forEach(ele => {
        data += ele.expense;
    });
    return parseFloat(data.toFixed(2));
}
const expenseSlice = createSlice({
    name:'expenseSlice',
    initialState,
    reducers:{
        addExpense:(state,action)=>{
            console.log(typeof JSON.parse(action.payload))
            state.expenseArr = [...state.expenseArr,JSON.parse(action.payload)]
            state.totalExpense = getTotalExpense(state.expenseArr);
        }
    }
});

export default expenseSlice.reducer;
export const {addExpense}  = expenseSlice.actions;