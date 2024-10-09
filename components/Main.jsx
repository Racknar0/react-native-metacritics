import { StatusBar } from 'expo-status-bar';
import {
    View,
    ScrollView,
    ActivityIndicator,
    FlatList,
    Pressable,
} from 'react-native';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useEffect, useState } from 'react';
import { getLatestGames } from '../lib/metacritics';
import {
    useSafeAreaInsets,
    SafeAreaView,
} from 'react-native-safe-area-context';

import SvgComponent from './Logo';
import { AnimatedGameCard, GameCard } from './GameCard';
import { InfoIcon } from './Icons';

export function Main() {
    const [games, setGames] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        getLatestGames().then((data) => {
            setGames(data);
        });
    }, []);

    return (
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <View style={{ marginBottom: 10, marginTop: 10, marginLeft: 10 }}>
                <SvgComponent />
            </View>

            <Link asChild href="/about" className="text-blue-600">
                <Pressable
                    style={{
                        marginLeft: 10,
                    }}
                >
                    {/* <Text className='text-blue-600 mt-24'>Regresar</Text> */}
                    {/* <FontAwesome name="info-circle" size={24} color="white" /> */}
                    <InfoIcon />
                </Pressable>
            </Link>

            {games.length === 0 ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                // <ScrollView>
                //     {games.map((game) => (
                //         <GameCard key={game.slug} game={game} />
                //     ))}
                // </ScrollView>
                <FlatList
                    data={games} // Los datos que se van a renderizar
                    keyExtractor={(item) => item.slug} // Esta es la clave que identifica a cada item
                    renderItem={({ item, index }) => (
                        <AnimatedGameCard game={item} index={item.index} />
                    )} // El item es el objeto que se va a renderizar
                />
            )}
        </View>
    );
}
