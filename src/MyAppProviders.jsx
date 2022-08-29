import { TailwindProvider } from "tailwindcss-react-native";
import UserProvider from "./context/UserProvider";

function MyAppsProviders({ children }) {
  return (
    <TailwindProvider>
      <UserProvider>{children}</UserProvider>
    </TailwindProvider>
  );
}

export default MyAppsProviders;
