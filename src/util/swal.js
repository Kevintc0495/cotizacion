import Swal from "sweetalert2";

export const MessageUtil = (
  icon,
  title,
  text,
  confirmText,
  showConfirmButton = true,
  timer
) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    confirmButtonText: confirmText,
    confirmButtonColor: "#0063ad",
    showConfirmButton: showConfirmButton,
    timer: timer || undefined,
  });
};
