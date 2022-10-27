import { Text } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecentComponent from "../components/RecentComponent";
import AddExpense from "../components/AddExpense";
const Stack = createNativeStackNavigator();


const RecentExpense = ()=>{
    return (
      <>
        <Stack.Navigator
         initialRouteName="Recent"
         screenOptions={{
            headerShown:false
         }}>
          <Stack.Screen name="Recent" component={RecentComponent} />
          <Stack.Screen name="Add Expense" component={AddExpense} />
        </Stack.Navigator>
      </>
    );
}

export default RecentExpense;