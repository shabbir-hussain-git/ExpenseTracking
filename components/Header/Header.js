import { Text,StyleSheet,View, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";


const Header = (props)=>{
    const navigation = useNavigation();

    const addPressed = ()=>{
        navigation.navigate('Add Expense');
    }
    return (
      <>
        <View style={styles.container}>
          <View style={styles.headerText}>
            <Text style={styles.textStyle}>{props.title}</Text>
          </View>
          <View style={styles.headerIcon}>
            <Pressable>
                <Icon onPress={addPressed} name="plus" color={'#fff'} size={22} />
            </Pressable>
          </View>
        </View>
    
      </>
    );
}



const styles = StyleSheet.create({
    container:{
        height:40,
        width:"100%",
        backgroundColor:'#221bf2',
        flexDirection:'row'
    },
    headerIcon:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingEnd:20
    },
    headerText:{
        width:"80%",
        justifyContent:'center',
        alignItems:'center',
        paddingStart:100
    },
    textStyle:{
        fontSize:18,
        color:"#fff"
    }
  });

export default Header;