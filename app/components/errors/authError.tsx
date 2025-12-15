import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export const AuthError = (error: Error) => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Chyba</AlertTitle>
      <AlertDescription>{error?.message}</AlertDescription>
    </Alert>
  );
};
export default AuthError;
