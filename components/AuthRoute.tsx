import React, { ReactNode } from "react";
import { router, useFocusEffect } from "expo-router";
import { SafeAreaView, Text } from "react-native";
import useAuth from "@/hooks/queries/useAuth";

interface AuthRouteProps {
  children: ReactNode;
}

function AuthRoute({ children }: AuthRouteProps) {
  const { auth } = useAuth();

  useFocusEffect(() => {
    !auth.id && router.replace("/auth");
  });
  return <>{children}</>;
}

export default AuthRoute;
