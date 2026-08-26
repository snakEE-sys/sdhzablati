import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export const AuthError = ({ error }: { error: string }) => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Chyba</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};
export default AuthError;
