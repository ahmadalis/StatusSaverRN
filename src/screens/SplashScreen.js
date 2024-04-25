import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from 'react';
import Constant from "../utils/Constant";
import BaseScreen from "./BaseScreen";
import { colors } from "../themes/colors";
import { useNavigation } from '@react-navigation/native';
import { RFValue } from "react-native-responsive-fontsize";
import LocalStorage from "../utils/LocalStorage";




const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
      LocalStorage.getValue('BaseUrl', async (value) => {
        Constant.BASE_URL = value
      }, (error) => {
        console.error('Error retrieving boolean value:', error);
      });
        const timeout = setTimeout(async () => {
            // navigation.replace('Login');
           
            fetchData();

        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    const fetchData = async () => {
        try {
          LocalStorage.getValue(
            "user",
            (storedUser) => {
              console.log("Retrieved object:", storedUser);
              if (storedUser) {
                console.log(' checking user:', "User  Exist");
                navigation.replace('DrawerScreen');    
              } else {
                navigation.replace('Login');
                console.log(' checking user:', "User Not Exist");        
              }
            },
            (error) => {
              console.log('Error checking user:', error);
              navigation.replace('Login');
              }
          );
        } catch (e) {
          console.log(e);
          navigation.replace('Login');
        }
      };

    return (
        <BaseScreen>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Constant.appLogo} style={{ width: 200, height: 200 }} />
                <Text style={{ color: colors.appColor, fontSize: RFValue(22), fontWeight: 'bold' }}>
                    Stock Control
                </Text>


            </View>
        </BaseScreen>
    );
};
const styles = StyleSheet.create({

});
export default SplashScreen;