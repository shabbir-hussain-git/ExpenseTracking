
import { Text ,StyleSheet, View,FlatList} from "react-native"
import { useSelector } from "react-redux";
import ExpenseDesc from "./ExpenseDesc";
import ExpenseItem from "./ExpenseItem";

const ExpenseMaster = ({route})=>{
    const expenseData = useSelector((store)=>store.expenses);
    let arr = expenseData.expenseArr;
    let title = `Last 7 days`;
    let total = expenseData.lastSevenExpense;
    let pre = "last7-";
    if(route == 'All'){
        arr = expenseData.expenseArr
        title = `All Expenses`;
        total = expenseData.totalExpense
        pre = "all-";
    }
    const getItem = (itemData)=>{
        let item = itemData.item;
        let index = itemData.index;
        if(route != 'All' && index >= 7){
            return null;
        }
        return (
        <View style={styles.expContainer}>
            <ExpenseItem index={index} item={item}></ExpenseItem>
        </View>
        )

    }
    return (
        <>
            <View style={styles.container}>
                <ExpenseDesc title={title} total={total}></ExpenseDesc>
                <FlatList
                data={arr}
                renderItem={getItem}
                keyExtractor={(item,index)=>(pre+index)
                }></FlatList>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    expContainer:{
        marginVertical:8
    },
    first:{
        flex:1
    },
    daysView:{
        marginBottom:8,
        flexDirection:'row',
        backgroundColor:'#E39FF6',
        padding:10,
        borderRadius:5
    },
    container:{
        flex:1,
        backgroundColor:"#1520AF",
        paddingHorizontal:32,
        paddingTop:8
    }
})

export default ExpenseMaster;