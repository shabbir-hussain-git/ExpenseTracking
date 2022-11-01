import Input from "./Input";
import { StyleSheet,View,Text } from "react-native";
import { GlobalStyles } from "../../store/GlobalStyles";
import { useState,useEffect } from "react";
const ExpenseFormData = ({type,expData,onExpenseChange})=>{
 
    const [expDataTemp, expDataHandler] = useState({
      title:'',
      date:'',
      expense:0,
      validAmount:true
    });
   
    useEffect(()=>{
      let e =   (expData.expense ) ? expData.expense+"" : "";
      let valid = (expData.expense  && (!isNaN(expData.expense)))? true : false;
        expDataHandler({
            ...expData,
            expense:e,
            validAmount:valid
        })
    },[expData])
    const onInputHandlerChange = (param,data)=>{
      let valid = true;
      if(param == 'expense'){
        valid = false;
      }
        let newObj = {
            ...expDataTemp,
            [param]:data,
            validAmount:valid
        }
        expDataHandler(newObj)
        onExpenseChange(newObj);
        
    }
    return (
      <>
        <View style={styles.container}>
          <View>
            <Text 
            style={styles.title}
            >Your Expenses</Text>
          </View>
          <View style={styles.amtContainer}>
            <Input
              style={styles.flex1}
              label="Amount"
              isValid={expDataTemp.validAmount}
              inputConfig={{
                keyboardType: 'number-pad',
                onChangeText: onInputHandlerChange.bind(this,'expense'),
                value:expDataTemp.expense,
              }}></Input>
            <Input
              style={styles.flex1}
              label="Date"
              inputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: onInputHandlerChange.bind(this,'date'),
                value:expDataTemp.date
                
              }}></Input>
          </View>

          <Input
            label="Description"
            inputConfig={{
              multiline: true,
              onChangeText: onInputHandlerChange.bind(this,'title'),
              value:expDataTemp.title
            }}></Input>
        </View>
      </>
    );
}

const styles=StyleSheet.create({
    container:{
        marginTop:40
    },
    title:{
        textAlign:'center',
        color:GlobalStyles.colors.primary100,
        fontSize:18,
        padding:10,
        fontWeight:'bold'
    },
    amtContainer:{
        flexDirection:"row"
    },
    flex1:{ 
        flex:1
    }
})

export default ExpenseFormData;