'use strict'
import { useNavigation } from "@react-navigation/native";
import { useEffect,useState} from "react";
import { Button, Text , StyleSheet ,View,Dimensions, Pressable} from "react-native"
import { useDispatch,useSelector } from "react-redux";
import PositiveBtn from "./Buttons/PositiveBtn";
import { useRoute } from '@react-navigation/native';
import {updateExpense,deleteExpense} from '../store/Slice/ExpenseSlice';
import Icon from 'react-native-vector-icons/AntDesign';
import ExpenseFormData from './ManageExpenses/ExpenseFormData'
const EditExpense = ()=>{
    const data = useSelector((store)=>(store.expenses.expenseArr))
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();

    const [expData,expDataHandler] = useState({
      id:'2',
      title:'',
      date:'',
      expense:0
    });
    const onExpenseChange = (data)=>{
      expDataHandler(data);
    }
    useEffect(()=>{
      expDataHandler(data[route.params.index]);
    },[route.params.index])

    const updateExpenseMethod = () => {
      expData.expense = parseFloat(expData.expense);
      dispatch(updateExpense({index:route.params.index,data:expData}));
      cancel();
    };
    const cancel = () => {
      navigation.goBack();
    };

    const onDeleteClick = ()=>{
        dispatch(deleteExpense(route.params));
        cancel();
    }
    return (
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
              onPress={updateExpenseMethod}
              bgColor={'#710193'}
              pColor={'#A32CC4'}
              title={'Update'}></PositiveBtn>
          </View>
          <View style={styles.borderStyle}></View>
          <View style={styles.deleteStyle}>
            <Pressable onPress={onDeleteClick}>
                <Icon name="delete" color={"#A1045A"} size={30} />
            </Pressable>
          </View>

        </View>
    )

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
        marginVertical:32
        
    },
    borderStyle:{
        borderBottomWidth:3
    },
    deleteStyle:{
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    }
  });   
  
export default EditExpense;
