// Name to avoid name collision with "Alert" from `react-native`
type AppAlertType = {
  title: string;
  message: string;
  confirmText: string;
  onConfirm: () => void;
  cancelText: string;
  onCancel: () => void;
};

export type { AppAlertType };
