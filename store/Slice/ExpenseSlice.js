import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalExpense:0,
    expenseArr:[{
        id:'1',
        title:'A Book',
        date:new Date(),
        expense:14.99
    }],
    totalExpense:0
}
const getTotalExpense = (arr)=>{
    let data = 0;
    arr.forEach(ele => {
        data += ele.expense;
    });
}
const expenseSlice = createSlice({
    name:'expenseSlice',
    initialState,
    reducers:{
        addExpense:(state,action)=>{
            state.expenseArr = [...state.expenseArr,action.payload.expense]
            state.totalExpense = getTotalExpense(state.expenseArr);
        }
    }
});

export default expenseSlice.reducer;
export const {addExpense}  = expenseSlice.actions;