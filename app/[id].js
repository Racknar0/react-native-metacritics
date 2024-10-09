import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Detail() {
    return (
        <View className="flex-1 justify-center items-center">
            <View>
                <Text className="text-white text-2xl mb-8">Detalle del juego</Text>
                <Link href="/"><Text className="text-blue-600">Regresar</Text></Link>
            </View>
        </View>
    )
}