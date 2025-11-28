import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen
                    name="OnboardingScreen"
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="index"
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="CaffeMocha"
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="FlatWhite"
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="modal"
                    options={{ presentation: "modal", headerShown: false }}
                />
            </Stack>

            <StatusBar style="auto" />
        </ThemeProvider>
    );
}
