import { AppAlertType } from "./types";

function showAlert({
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: AppAlertType) {
  const dialog = document.createElement("dialog");

  dialog.id = "simple-alert";
  document.body.appendChild(dialog);

  const dialogTitle = document.createElement("h2");
  dialogTitle.textContent = title;
  dialog.appendChild(dialogTitle);

  const dialogMessage = document.createElement("p");
  dialogMessage.textContent = message;
  dialog.appendChild(dialogMessage);

  const cancelDialogButton = document.createElement("button");
  cancelDialogButton.id = "cancelDialogButton";
  cancelDialogButton.textContent = cancelText;
  dialog.appendChild(cancelDialogButton);

  cancelDialogButton.addEventListener("click", () => {
    onCancel();
    dialog.close();
  });

  const confirmDialogButton = document.createElement("button");
  confirmDialogButton.id = "confirmDialogButton";
  confirmDialogButton.textContent = confirmText;
  dialog.appendChild(confirmDialogButton);

  confirmDialogButton.addEventListener("click", () => {
    onConfirm();
    dialog.close();
  });

  dialog.showModal();
}

export { showAlert };
