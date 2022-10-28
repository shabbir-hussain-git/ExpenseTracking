import {Text, View,StyleSheet, Pressable} from "react-native"

const PositiveBtn = ({title,onPress,bgColor='rgb(210, 230, 255)',pColor="white"})=>{

    return (
        <>
            <View style={styles.positiveContainer}>
                <Pressable 
                android_ripple={"#A32cc4"}
                style={({ pressed }) => [
                    {
                      backgroundColor: pressed
                        ? bgColor
                        : pColor
                    },
                    styles.wrapperCustom
                  ]}>
                    <Text style={styles.textStyle}>{title}</Text>
                </Pressable>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    positiveContainer: {
      overflow:"hidden",
      minWidth:100
    },
    textStyle:{
        textAlign:'center',
        fontSize:16,
        color:"black"
    },
    wrapperCustom:{
        padding:20,
        borderRadius:10,
    }
  });
  

export default PositiveBtn;