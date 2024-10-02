import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ComponentIcon } from "lucide-react";

export default function Placeholder() {
  return (
    <Alert>
      <ComponentIcon className="h-4 w-4" />
      <AlertTitle>Component coming soon</AlertTitle>
      <AlertDescription>
        <p>Mockups, illustrations and more are under development.</p>
        <a className="underline" href="https://www.mikolajdobrucki.com/jupiter">
          Join waitlist
        </a>
      </AlertDescription>
    </Alert>
  );
}
