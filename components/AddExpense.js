import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffectm,useId } from "react";
import { Button, Text , StyleSheet ,View,Dimensions} from "react-native"
import PositiveBtn from './Buttons/PositiveBtn'
import { useDispatch } from "react-redux";
import {addExpense} from '../store/Slice/ExpenseSlice'
import getDateString from '../store/Util';
import ExpenseFormData from "./ManageExpenses/ExpenseFormData";
import { useState } from "react";
const AddExpense = (props)=>{

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [expData,expDataHandler] = useState({
      id:'2',
      title:'',
      date:'',
      expense:0
    })

    const onExpenseChange = (data)=>{
      expDataHandler(data);
    }
   
    const addExpenseMethod = ()=>{
      expData.expense = parseFloat(expData.expense);
      dispatch(addExpense(JSON.stringify(expData)));
      cancel();
    }
    const cancel = ()=>{
      navigation.goBack()
    }
    return (
      <>
        <View style={styles.container}>
          <View>
              <ExpenseFormData onExpenseChange={onExpenseChange} expData={expData} type="Add"></ExpenseFormData>
          </View>
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
        backgroundColor:"#1338BE",
        paddingHorizontal:width/16
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:32,
       
    }
  });   
  
export default AddExpense;