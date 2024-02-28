import AsyncStorage from '@react-native-async-storage/async-storage'
import { AUTH_STORAGE } from './storageConfig'

type StorageAuthTokenProps = {
  token: string
}

export async function storageAuthTokenSave({ token }: StorageAuthTokenProps) {
  await AsyncStorage.setItem(AUTH_STORAGE, JSON.stringify({ token }))
}
