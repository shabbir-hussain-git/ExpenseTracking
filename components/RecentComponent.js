import { Text } from "react-native"
import { useSelector } from "react-redux";
import ExpenseItem from "./ExpenseItem";

const RecentComponent = (props)=>{
    const expenseData = useSelector((store)=>store.expenses);
    return (
        <>
            <ExpenseItem item={expenseData.expenseArr[0]}></ExpenseItem>
        </>
    )
}

export default RecentComponent;