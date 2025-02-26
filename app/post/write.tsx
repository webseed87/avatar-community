import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FormProvider, useForm } from "react-hook-form";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DescriptionInput from "@/components/DescriptionInput";
import TitleInput from "@/components/TitleInput";
import useCreatePost from "@/hooks/queries/useCreatePost";
import { ImageUri } from "@/types";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import CustomButton from "@/components/CustomButton";

type FormValues = {
  title: string;
  description: string;
  imageUris: ImageUri[];
};

export default function PostWriteScreen() {
  const navigation = useNavigation();
  const createPost = useCreatePost();
  const postForm = useForm<FormValues>({
    defaultValues: {
      title: "",
      description: "",
      imageUris: [],
    },
  });

  const onSubmit = (formValues: FormValues) => {
    createPost.mutate(formValues, {
      onError: (error) => {
        console.error("Failed to create post:", error);
      },
      onSuccess: (data) => {
        console.log("Post created successfully:", data); // data 값을 출력하여 확인
      },
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton
          label="저장"
          size="medium"
          variant="standard"
          onPress={postForm.handleSubmit(onSubmit)}
        />
      ),
    });
  }, []);

  return (
    <FormProvider {...postForm}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <TitleInput />
        <DescriptionInput />
        <TouchableOpacity
          onPress={postForm.handleSubmit(onSubmit)}
          style={{
            backgroundColor: "orange",
            padding: 16,
            borderRadius: 8,
            marginTop: 16,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            테스트 저장
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    gap: 16,
  },
});
