import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView, View, Platform } from 'react-native';

import { colors } from '../themes/colors';
import { styles } from '../themes/styles';

const BaseScreen = ({
  children,
  backgroundColor = colors.white,
  statusBarColor = colors.appColor,
  barStyle = 'light-content',

}) => {

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(statusBarColor);
    }
    StatusBar.setBarStyle(barStyle);
  }, [statusBarColor]);

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.appColor }} />
      <SafeAreaView style={[styles.main_container, { backgroundColor }]}>
        <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default BaseScreen;
