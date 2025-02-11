import { Stack } from "expo-router";
import './global.css'
export default function RootLayout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="index"
            />
            <Stack.Screen 
                name="sign-in"
            />
            <Stack.Screen 
                name="/app/auth/sign-up.tsx"
            />
        </Stack> 
    )
}
