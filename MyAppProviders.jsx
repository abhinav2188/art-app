import { TailwindProvider } from "tailwindcss-react-native";

function MyAppsProviders({ children }) {
    return <TailwindProvider>{children}</TailwindProvider>;
}

export default MyAppsProviders;