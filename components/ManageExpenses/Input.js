import { View,Text,TextInput,StyleSheet } from "react-native";
import { GlobalStyles } from "../../store/GlobalStyles";

const Input = ({label,style=null,inputConfig={},isValid=true})=>{
    
    let inputStyle = [styles.input];
    let labelStyle = [styles.label];
    let viewStyle = [styles.inputContainer,style]
    if(inputConfig.multiline){
        inputStyle.push(styles.multiLine)
    }
    if(!isValid){
        console.log('Hahaha')
        inputStyle.push(styles.errorText)
        labelStyle.push(styles.errorLabel)
        // viewStyle.push(styles.errorText)
    }
    return (
        <>  
            <View style={viewStyle}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput  style={inputStyle} {...inputConfig}/>
            </View>
        
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal:4,
        marginVertical:8
    },
    label:{
        fontSize:12,
        color:GlobalStyles.colors.primary100,
        marginBottom:4
    },
    input:{
        padding:6,
        borderRadius:6,
        fontSize:18,
        backgroundColor:GlobalStyles.colors.primary100,
        color:GlobalStyles.colors.primary700
    },
    multiLine:{
        textAlignVertical:"top",
        minHeight:100
    },
    errorLabel:{
        color:"red"
    },
    errorText:{
        borderColor:"red"
    }
})
export default Input;