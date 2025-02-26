import * as SecureStore from "expo-secure-store";

export async function getSecureStore(key: string): Promise<string | null> {
  return await SecureStore.getItemAsync(key);
}

export async function setSecureStore(
  key: string,
  value: string
): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}

export async function deleteSecureStore(key: string): Promise<void> {
  await SecureStore.deleteItemAsync(key);
}

// 추가: saveSecureStore 함수 정의
export async function saveSecureStore(
  key: string,
  value: string
): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}
