'use strict'
import { useNavigation } from "@react-navigation/native";
import { useEffect} from "react";
import { Button, Text , StyleSheet ,View,Dimensions, Pressable} from "react-native"
import { useDispatch } from "react-redux";
import PositiveBtn from "./Buttons/PositiveBtn";
import { useRoute } from '@react-navigation/native';
import {updateExpense,deleteExpense} from '../store/Slice/ExpenseSlice';
import Icon from 'react-native-vector-icons/AntDesign';

const EditExpense = ()=>{
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();

    const updateExpenseMethod = () => {
      dispatch(updateExpense(route.params));
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
        paddingHorizontal:width/6
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
