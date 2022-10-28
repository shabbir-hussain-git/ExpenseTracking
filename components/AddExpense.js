import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { Button, Text , StyleSheet ,View,Dimensions} from "react-native"
import PositiveBtn from './Buttons/PositiveBtn'

const AddExpense = (props)=>{

    const navigation = useNavigation();

    useEffect(()=>{
       
    },[])
   
    return (
      <>
        <View style={styles.container}>
          <View style={styles.btnContainer}>
            <PositiveBtn
              bgColor={'#EDEADE'}
              pColor={'#F9F6EE'}
              title={'Cancel'}></PositiveBtn>

            <PositiveBtn
              bgColor={'#710193'}
              pColor={'#A32CC4'}
              title={'Add'}></PositiveBtn>
          </View>
        </View>
      </>
    );
}

const width = Dimensions.get('screen').width;
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
  
export default AddExpense;