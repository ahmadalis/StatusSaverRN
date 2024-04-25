import NetInfo from '@react-native-community/netinfo';
import DeviceInfo from 'react-native-device-info';

let isConnected = false;
let networkType = null;
let cellularGeneration = null;
const listeners = [];

const handleConnectivityChange = async (state) => {
  isConnected = state.isConnected;
  networkType = state.type;
  
  if (state.isConnected && state.details) {
    if (state.details.isConnectionExpensive) {
      cellularGeneration = await getCellularGeneration();
    } else {
      cellularGeneration = null;
    }
  } else {
    cellularGeneration = null;
  }
  
  listeners.forEach((listener) => listener(isConnected, networkType, cellularGeneration));
};

const getCellularGeneration = async () => {
  try {
    const carrier = await DeviceInfo.getCarrier();
    if (carrier === 'AT&T' || carrier === 'T-Mobile') {
      return '4G';
    } else {
      return '3G';
    }
  } catch (error) {
    console.log('Error getting cellular generation:', error);
  }
  
  return null;
};

const NetworkManager = {
  addEventListener: (listener) => {
    listeners.push(listener);
    listener(isConnected, networkType, cellularGeneration);
  },

  removeEventListener: (listener) => {
    const index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  },

  initialize: () => {
    NetInfo.addEventListener(handleConnectivityChange);
    NetInfo.fetch().then(handleConnectivityChange);
  },

  isConnected: () => isConnected,

  getNetworkType: () => networkType,

  getCellularGeneration: () => cellularGeneration,
};

export default NetworkManager;
