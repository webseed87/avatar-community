import { Link, router, Stack } from "expo-router";
import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function PostLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="write"
        options={{
          title: "글쓰기",
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPressOut={() => {
                router.replace("/");
              }}
              style={{ paddingRight: 5 }}
            >
              <Feather name="arrow-left" size={28} color={"black"} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="update/[id]"
        options={{
          title: "수정",
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPressOut={() => {
                router.back();
              }}
              style={{ paddingRight: 5 }}
            >
              <Feather name="arrow-left" size={28} color={"black"} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
