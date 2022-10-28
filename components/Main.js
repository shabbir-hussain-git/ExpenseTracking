import { Text, View,Button } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import RecentExpense from "../screen/RecentExpense";
import AllExpense from "../screen/AllExpense";

import Icon from 'react-native-vector-icons/AntDesign';
import { getHeaderTitle } from '@react-navigation/elements';
import Header from "./Header/Header";
const Main = ()=>{

    
//
    return (
      <>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Recent Screen"
            screenOptions={{
              tabBarActiveTintColor: '#edde09',
              tabBarBackground: () => (
                <View style={{backgroundColor: '#221bf2', flex: 1}}></View>
              ),
            
            }}>
            <Tab.Screen
              name="Recent Screen"
              component={RecentExpense}
              options={{
                tabBarLabel: 'Recent',
                tabBarIcon: ({color, size}) => (
                  <Icon name="hourglass" color={color} size={size} />
                ),
                headerShown:false
              }}
            />
            <Tab.Screen
              name="All"
              component={AllExpense}
              options={{
                tabBarLabel: 'All',
                tabBarIcon: ({color, size}) => (
                  <Icon name="calendar" color={color} size={size} />
                ),
                header:({ navigation, route, options }) => {
                  const title = getHeaderTitle(options, route.name);
                  return <Header title={title} style={options.headerStyle} />;
                }
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
}

export default Main;