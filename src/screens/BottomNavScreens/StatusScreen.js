import { Image, Text, View, TouchableOpacity } from "react-native"
import BaseScreen from "../BaseScreen";
import Constant from "../../utils/Constant";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../../themes/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function ImagesScreen() {

    const imagesListRender = ({ item }) => {
        return (
            <TouchableOpacity
                // onPress={() => handleFlatClicks(item)}
                style={{
                    backgroundColor: colors.white,
                    elevation: 2,
                    borderRadius: 5,
                    marginVertical: 8,
                    flex: 1,
                    marginHorizontal: 8
                }}>
                <View style={{
                    flex: 1
                }}>
                    <Image source={item.icon} style={{ width: 50, height: 50, marginTop: 5, tintColor: colors.appColor }} />
                    {/* <Text numberOfLines={1} style={{ color: colors.black, fontSize: RFValue(12), marginTop: 5 }}>
                        {item.name}
                    </Text>
                    <Text numberOfLines={1} style={{ color: colors.black, fontSize: RFValue(14), fontWeight: 'bold', marginTop: 10 }}>
                        {item.count}
                    </Text> */}

                </View>
            </TouchableOpacity>

        );
    };


    const imagesListData = [
        { id: 1, icon: Constant.statusIcon },
        { id: 2, icon: Constant.settingsIcon },
        { id: 3, icon: Constant.statusIcon },
    ]

    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Text>Images</Text>
        // </View>

        <BaseScreen>
            <GestureHandlerRootView>
                <View style={{ flex: 1 }}>

                    <FlatList
                        data={imagesListData}
                        style={{ flexGrow: 0 }}

                        renderItem={imagesListRender}
                        keyExtractor={item => item.id}
                        numColumns={3}
                    />
                </View></GestureHandlerRootView>
        </BaseScreen>

    );
}

function VideosScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Videos</Text>
        </View>
    );
}

function SavedScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Saved</Text>
        </View>
    );
}


const Tab = createMaterialTopTabNavigator();

const StatusScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Images" component={ImagesScreen} />
            <Tab.Screen name="Videos" component={VideosScreen} />
            <Tab.Screen name="Saved" component={SavedScreen} />
        </Tab.Navigator>



    );
}

export default StatusScreen;