import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
  static async setValue(key, value, onSuccess, onError) {
    try {
      const valueToStore = JSON.stringify(value);
      await AsyncStorage.setItem(key, valueToStore);
      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    } catch (error) {
      console.log(`Error storing value for key ${key}:`, error);
      if (typeof onError === 'function') {
        onError(error);
      }
    }
  }

  static async getValue(key, onSuccess, onError) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        if (typeof onSuccess === 'function') {
          onSuccess(parsedValue);
        }
      } else {
        if (typeof onSuccess === 'function') {
          onSuccess(null);
        }
      }
    } catch (error) {
      console.log(`Error retrieving value for key ${key}:`, error);
      if (typeof onError === 'function') {
        onError(error);
      }
    }
  }

  static async removeValue(key, onSuccess, onError) {
    try {
      await AsyncStorage.removeItem(key);
      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    } catch (error) {
      console.log(`Error removing value for key ${key}:`, error);
      if (typeof onError === 'function') {
        onError(error);
      }
    }
  }

  static async clearAll(onSuccess, onError) {
    try {
      await AsyncStorage.clear();
      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    } catch (error) {
      console.log('Error clearing AsyncStorage:', error);
      if (typeof onError === 'function') {
        onError(error);
      }
    }
  }
}

export default LocalStorage;
