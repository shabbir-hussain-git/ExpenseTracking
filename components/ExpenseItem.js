import { Text, StyleSheet,View, Pressable } from "react-native"
import getDateString from "../store/Util";
import { useNavigation } from "@react-navigation/native";
const ExpenseItem = (props)=>{
    /*
    {
        id:'1',
        title:'A Book',
        date:new Date(),
        expense:14.99
    }
    */
   const navigation = useNavigation();
    let eItem = props.item;
    if(!eItem){
        eItem = {}
    }
    const onItemPressed = ()=>{
        navigation.navigate('Edit Expense',{
            index:props.index
        })
    }
    return (
      <>
        <View style={styles.container}>
          <Pressable style={styles.btn} onPress={onItemPressed}>
            <View style={styles.descView}>
              <Text style={styles.titleStyle}>{eItem.title}</Text>
              <Text style={styles.dateStyle}>{eItem.date}</Text>
            </View>
            <View style={styles.expenseView}>
              <Text>{eItem.expense}</Text>
            </View>
          </Pressable>
        </View>
      </>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:60,
        borderRadius:5,
        backgroundColor:"#3944BC",
        justifyContent:'center',
        flexDirection:"row",
        paddingHorizontal:16
    },
    btn:{
        width:'100%',
        flexDirection:"row",
    },
    descView:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center',
    },
    titleStyle:{
        fontWeight:'bold',
        fontSize:18,
        paddingBottom:5
    },
    dateStyle:{

    },
    expenseView:{
        backgroundColor:"#fff",
        minWidth:70,
        padding:10,
        borderRadius:5,
        marginVertical:8,
        alignItems:'center',
        justifyContent:'center'
    }
  }); 

export default ExpenseItem;