import MyAppsProviders from "./src/MyAppProviders";
import AppNavigator from "./src/navigators/AppNavigator";

export default function App() {
  return (
    <MyAppsProviders>
      <AppNavigator />
    </MyAppsProviders>
  );
}
