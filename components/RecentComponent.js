import { Text ,StyleSheet, View,FlatList} from "react-native"
import { useSelector } from "react-redux";
import ExpenseDesc from "./ExpenseDesc";
import ExpenseItem from "./ExpenseItem";

const RecentComponent = (props)=>{
    const expenseData = useSelector((store)=>store.expenses);
   
    const getItem = (itemData)=>{
        let item = itemData.item;
        let index = itemData.index;
        return (
        <View style={styles.expContainer}>
            <ExpenseItem index={index} item={item}></ExpenseItem>
        </View>
        )

    }
    return (
        <>
            <View style={styles.container}>
                <ExpenseDesc title="Last 7 days" total={expenseData.totalExpense}></ExpenseDesc>
                <FlatList
                data={expenseData.expenseArr}
                renderItem={getItem}
                keyExtractor={(item,index)=>("exp-"+index)
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

export default RecentComponent;