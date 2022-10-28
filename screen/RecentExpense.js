import { Text } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecentComponent from "../components/RecentComponent";
import AddExpense from "../components/AddExpense";
import Header from "../components/Header/Header";
import { getHeaderTitle } from '@react-navigation/elements';
import EditExpense from "../components/EditExpense";

const Stack = createNativeStackNavigator();


const RecentExpense = ()=>{
    return (
      <>
        <Stack.Navigator
         initialRouteName="Recent"
         screenOptions={{
           header:({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <Header title={title} style={options.headerStyle} />;
          }
         }}>
          <Stack.Screen name="Recent" component={RecentComponent} />
          <Stack.Screen name="Add Expense" component={AddExpense} />
          <Stack.Screen name="Edit Expense" component={EditExpense} />
        </Stack.Navigator>
      </>
    );
}

export default RecentExpense;