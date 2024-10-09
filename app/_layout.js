import { Text, View } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
    return (
        <View className="flex-1 bg-black justify-center items-center">
            {/* <Text className="text-white text-2xl">Hello Worldx</Text> */}
            <Slot />
        </View>
    )
}