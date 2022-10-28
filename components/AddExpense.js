import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffectm,useId } from "react";
import { Button, Text , StyleSheet ,View,Dimensions} from "react-native"
import PositiveBtn from './Buttons/PositiveBtn'
import { useDispatch } from "react-redux";
import {addExpense} from '../store/Slice/ExpenseSlice'
import getDateString from '../store/Util';
const AddExpense = (props)=>{

    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(()=>{
       
    },[])
   
    const addExpenseMethod = ()=>{
      dispatch(addExpense(JSON.stringify({
        id:'2',
        title:'Another Book',
        date:getDateString(new Date()),
        expense:18.59
      })));
      cancel();
    }
    const cancel = ()=>{
      navigation.goBack()
    }
    return (
      <>
        <View style={styles.container}>
          <View style={styles.btnContainer}>
            <PositiveBtn
              onPress={cancel}
              bgColor={'#EDEADE'}
              pColor={'#F9F6EE'}
              title={'Cancel'}></PositiveBtn>

            <PositiveBtn
              onPress={addExpenseMethod}
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