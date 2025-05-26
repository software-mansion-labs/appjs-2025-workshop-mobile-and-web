import { Alert } from "react-native";
import { AppAlertType } from "./types";

export function showAlert({
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: AppAlertType) {
  Alert.alert(title, message, [
    {
      text: cancelText,
      onPress: () => onCancel(),
      style: "cancel",
    },
    { text: confirmText, onPress: () => onConfirm() },
  ]);
}
