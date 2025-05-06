import { useMutation } from "@tanstack/react-query";

import { Register } from "../_action/register-action";
import { RegisterInputs } from "@/lib/schemes/auth-schemes";
import { toast } from "sonner";
import { useRouter } from "next/router";

export default function useRegister() {
  const handleSuccess = () => {
    toast.success("Register success");
    setTimeout(() => {
      window.location.href = "/auth/login";
    }, 1000);
  };
  const handleError = (error: Error) => {
    toast.error(error.message);
  };

  const { isPending, error, mutate } = useMutation({
    mutationFn: async (registerInputs: RegisterInputs) =>
      await Register(registerInputs),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const register = (Inputs: RegisterInputs) => {
    mutate(Inputs);
  };
  return { error, register, isPending };
}
