import { StyleSheet } from 'react-native';
import { colors } from './colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 16,
    fontFamily: "Roboto-Bold"
  },
  box: {
    shadowColor: '#000',
    backgroundColor:colors.white,
    borderColor:'lightgrey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 15,
    flex: 1,
    padding:5,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin:50,
    borderRadius:5,
    borderWidth:2
  },
  text: {
    color:colors.black,
    fontFamily: "Roboto-Bold",
    fontSize: 30
  },
  textItem: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
  main_container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding:0
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: 
  {
    flex: 1,
  },
  toggleButton: {
    paddingEnd: 5,
  },
  password_container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    marginTop: 5,
    marginHorizontal: 1,
    height:hp('5%')

  },
  input_password: {
    flex: 1,
    fontSize: 14,
    color: colors.black,
    padding:5

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
   
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.appColor,
    marginTop: 10,
  },
  formContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  label_bold: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 10,
  },
  label: {
    fontSize: RFValue(14),
    color: colors.black,
    marginTop: 10,
    alignItems:'center'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    fontSize: 14,
    color: colors.black,
    marginTop: 5,
    marginHorizontal: 1,
    height:hp('5%'),
    padding:5,
  },
  domain: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
  },
  disable_field: {
    backgroundColor: '#f2f2f2',
    borderColor: '#C5C5C5',
    borderWidth: 1,
    borderRadius: 8,
    color:colors.black
  },
  view_end: {
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    justifyContent: 'flex-end'
  },

  blue_background_button: {
    backgroundColor: colors.appColor,
    borderColor: colors.appColor,
    borderRadius: 8,
    alignItems: 'center',
    padding:12,
    marginTop:25
    
  },
  button_text:{
    color:colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },

  center_Container: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
    diaolg_container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  diaolg_title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color:colors.black
  },
  diaolg_description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color:colors.black
  },
  diaolg_input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    color: colors.black,
    padding: 10,
    marginBottom: 20,
  },
  diaolg_buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  diaolg_button: {
    backgroundColor: colors.appColor,
    padding: 10,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    justifyContent:'center',
    height:50
  },
  diaolg_buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight:'bold'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.appColor,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    color: colors.white,
    marginLeft: 10,
  },   

  version_text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color:colors.white,
  },
  version_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:hp('10%'),
    backgroundColor:colors.white
  },
});

export { styles }