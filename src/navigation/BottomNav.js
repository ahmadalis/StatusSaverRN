import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import StatusScreen from "../screens/BottomNavScreens/StatusScreen";
import SettingsScreen from "../screens/BottomNavScreens/SettingsScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, View } from "react-native";
import { colors } from "../themes/colors";
import Constant from "../utils/Constant";

const Tab = createBottomTabNavigator();


const BottomNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Status"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconColor = focused ? colors.seaGreen : colors.gray; // Change color based on focused state
                        return (
                            <Image
                                source={route.name === 'Status' ? Constant.statusIcon : Constant.settingsIcon}
                                style={{ width: 15, height: 15, tintColor: iconColor }}
                            />
                        );
                    },
                    tabBarLabel: ({ focused, color }) => {
                        return null; // Hide label
                    },
                    tabBarActiveTintColor: colors.seaGreen,
                    tabBarInactiveTintColor: colors.gray,
                    tabBarStyle: {
                        // Add styles to the tab bar container if needed
                    },
                })}
            >
                <Tab.Screen name="Status" component={StatusScreen} options={{ tabBarLabel: 'Status' }} />
                <Tab.Screen name="Setttings" component={SettingsScreen} options={{ tabBarLabel: 'Settings' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default BottomNav;

// screenOptions={({ route }) => ({
//     header: false,
//     tabBarIcon: ({ focused, color, size }) => {
//         // You can return any component here to customize the tab icon
//     },
//     tabBarLabel: ({ focused, color }) => {
//         false
//     },
//     tabBarActiveTintColor: 'tomato',
//     tabBarInactiveTintColor: 'gray',
//     tabBarStyle: {
//         // You can add styles to the tab bar container
//     },
// })}