import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_NAME} from '../Constant/storage';

export async function saveToken(token: string) {
  try {
    await AsyncStorage.setItem(TOKEN_NAME, token);
    return true;
  } catch (error) {}

  return false;
}
export async function getToken() {
  try {
    const value = await AsyncStorage.getItem(TOKEN_NAME);
    return value;
  } catch (error) {}

  return '';
}
