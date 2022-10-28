import { Text ,StyleSheet, View,FlatList} from "react-native"


const ExpenseDesc = ({title,total})=>{

    return (
        <>
         <View style={styles.daysView}>
                    <Text style={styles.first}>{title}</Text>
                    <Text style={{fontWeight:'bold'}}>${total}</Text>
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
    }
})

export default ExpenseDesc