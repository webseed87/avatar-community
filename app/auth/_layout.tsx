import { Link, router, Stack, useNavigation } from "expo-router";
import Foundation from "@expo/vector-icons/Foundation";
import { colors } from "@/constants";
import { TouchableOpacity } from "react-native";

export default function AuthLayout() {
  const navigation = useNavigation();
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "로그인",
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPressOut={() => {
                router.replace("/");
              }}
              style={{ paddingRight: 5 }}
            >
              <Foundation name="home" size={28} color={"black"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: "이메일 로그인",
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: "회원가입",
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
