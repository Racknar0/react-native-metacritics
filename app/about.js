import { Pressable, ScrollView, Text } from "react-native";
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { HomeIcon } from "../components/Icons";

export default function About() {

    return (
        <ScrollView className="flex-1 bg-black pt-24">

            <Link asChild href="/" >
                <Pressable>
                    {/* <Text className='text-blue-600 mt-24'>Regresar</Text> */}
                    {/* <FontAwesome name="home" size={24} color="white" /> */}
                    {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
                    
                </Pressable>
            </Link>

            <Text className="text-white text-2xl">Acerca del proyecto</Text>

            <Text className="text-white text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis rerum in iusto amet rem repudiandae, laborum laboriosam, commodi maiores odit minima. Quaerat corrupti id commodi odit? Animi dicta sint dolore!
                Quasi nemo quod molestiae tenetur ad. Deserunt quo, dolor explicabo incidunt enim, distinctio laudantium dicta sit at molestiae dolor
            </Text>

            <Text className="text-white text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis rerum in iusto amet rem repudiandae, laborum laboriosam, commodi maiores odit minima. Quaerat corrupti id commodi odit? Animi dicta sint dolore!
                Quasi nemo quod molestiae tenetur ad. Deserunt quo, dolor explicabo incidunt enim, distinctio laudantium dicta sit at molestiae dolor
            </Text>

            <Text className="text-white text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis rerum in iusto amet rem repudiandae, laborum laboriosam, commodi maiores odit minima. Quaerat corrupti id commodi odit? Animi dicta sint dolore!
                Quasi nemo quod molestiae tenetur ad. Deserunt quo, dolor explicabo incidunt enim, distinctio laudantium dicta sit at molestiae dolor
            </Text>

            <Text className="text-white text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis rerum in iusto amet rem repudiandae, laborum laboriosam, commodi maiores odit minima. Quaerat corrupti id commodi odit? Animi dicta sint dolore!
                Quasi nemo quod molestiae tenetur ad. Deserunt quo, dolor explicabo incidunt enim, distinctio laudantium dicta sit at molestiae dolor
            </Text>
        </ScrollView>
    )
}