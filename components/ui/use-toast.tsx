//create uitoast hook
import { useState } from "react";
import { Toast } from "@/components/ui/toast";
// import { ToastProps } from "@/components/ui/toast/toast";
import { ToastContainer } from "@/components/ui/toast/toast-container";
import { ToastContainerProps } from "@/components/ui/toast/toast-container";

type ToastProps = {
  id: string;
  message: string;
  type: "success" | "error";
};

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: ToastProps) => {
    setToasts((prevToasts) => [...prevToasts, toast]);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const toastContainerProps: ToastContainerProps = {
    toasts,
    removeToast,
  };

  return { addToast, toastContainerProps };
};
//create toast hook to use toast component
