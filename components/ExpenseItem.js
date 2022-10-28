import { Text, StyleSheet } from "react-native"


const ExpenseItem = (props)=>{
    /*
    {
        id:'1',
        title:'A Book',
        date:new Date(),
        expense:14.99
    }
    */
    let eItem = props.item;
    if(!eItem){
        eItem = {}
    }
    return (
        <>
            <Text>{eItem.title}</Text>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1338BE"
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:32,
        marginHorizontal:width/6
    }
  }); 

export default ExpenseItem;