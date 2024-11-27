import { ActionSheetProvider, useActionSheet } from "@expo/react-native-action-sheet";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";

export default function ActionSheet() {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();
  const pathname = usePathname();

  const optionsList = ["Sair", "Sobre", "Cancelar"];
  const optionsAbout = ["Sair", "Cancelar"];
  const isAboutPage = pathname === "/about";
  const options = isAboutPage ? optionsAbout : optionsList;


  const destructiveButtonIndex = 0; 
  const cancelButtonIndex = options.length - 1;


  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0: 
            router.replace("/login"); 
            break;
          case 1: 
            if (!isAboutPage) {
              router.push("/about"); 
            }
            break;
          default:
            break; 
        }
      }
    );
  };

  return (
    <TouchableOpacity style={styles.menu} onPress={handleOpen}>
      <Ionicons name="menu" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menu: {
    padding: 15,
  },
});
