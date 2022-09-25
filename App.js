import MyAppsProviders from "./src/MyAppProviders";
import AppNavigator from "./src/screens/AppNavigator";

export default function App() {
  return (
    <MyAppsProviders>
      <AppNavigator />
    </MyAppsProviders>
  );
}
