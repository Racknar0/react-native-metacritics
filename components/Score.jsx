import { Text } from "react-native";
import { View } from "react-native";


export function Score({ score, maxScore }) {

    const getColors = () => {
        const percentage = (score / maxScore) * 100;
        if (percentage < 50) {
            return "bg-red-500";
        } else if (percentage < 99) {
            return "bg-yellow-500";
        } else {
            return "bg-green-500";
        }
    }

    const className = getColors();

    return (
        <View 
            className={`mb-2 w-8 h-8 rounded-full justify-center items-center ${className}`}
        >
            <Text
                className="text-white text-lg font-bold"
            >{score}</Text>
        </View>
    )

}