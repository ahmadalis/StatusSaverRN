import React from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';
import Constant from '../utils/Constant';
import { colors } from '../themes/colors';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const CustomAlertVersionDialog = (props) => {
  const { visible, title, version, instanceName, onPress } = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <Image source={Constant.appLogo} style={styles.logo} />
          </View>
          <Text style={styles.version}>App Version: {version}</Text>
          {/* <Text style={styles.version}>App Version: 2.0.6</Text> */}
          {/* <Text style={styles.instanceName}>   Checkki linked to: {instanceName}   </Text> */}
          {/* <Text style={styles.instanceName}>Checkki linked to: {instanceName} sub domain</Text> */}
          <TouchableOpacity style={styles.btnSubmit} onPress={onPress}>
            <Text style={styles.btnSubmitText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 130,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  version: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
    fontWeight:'bold'
  },
  instanceName: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
    fontWeight:'bold'

  },
  btnSubmit: {
    backgroundColor: colors.appColor,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'stretch',
    width:widthPercentageToDP(80)
  },
  btnSubmitText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    // fontWeight: 'bold',

  },
});

export default CustomAlertVersionDialog;
