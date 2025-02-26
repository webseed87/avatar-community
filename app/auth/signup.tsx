import { StyleSheet, View } from "react-native";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import PasswordConfirmInput from "@/components/PasswordConfirmInput";
import FixedBottomCTA from "@/components/FixedBottomCTA";
import useAuth from "@/hooks/queries/useAuth";

type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function SignupScreen() {
  const { signupMutation } = useAuth();
  const signupForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (formValues) => {
    const { email, password } = formValues;
    signupMutation.mutate(
      { email, password },
      {
        onError: (error) => {
          console.error("Signup error:", error);
        },
        onSuccess: (data) => {
          console.log("Signup success:", data);
        },
      }
    );
  };

  return (
    <FormProvider {...signupForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput submitBehavior="submit" />
        <PasswordConfirmInput />
      </View>
      <FixedBottomCTA
        label="회원가입하기"
        onPress={signupForm.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
