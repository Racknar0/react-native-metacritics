import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Score } from './Score';
import { Link } from 'expo-router';

export const GameCard = ({ game }) => {
    return (
        <Link asChild href={`/${game.slug}`}>
            <Pressable>
                {({ pressed }) => (
                    <>
                        <View
                            className={`p-4 rounded-2xl m-3 flex-row ${
                                pressed ? 'bg-red-500' : 'bg-gray-800'
                            }`}
                            key={game.slug}
                        >
                            <Image
                                source={{ uri: game.image }}
                                style={styles.image}
                            />
                            <View className="flex-shrink">
                                <Text style={styles.title}>{game.title}</Text>
                                <Score score={game.score} maxScore={100} />
                                <Text
                                    style={styles.description}
                                    numberOfLines={10}
                                >
                                    {game.description.slice(0, 150)}...
                                </Text>
                            </View>
                        </View>
                    </>
                )}
                {/* <View 
                    className={`p-4 rounded-2xl m-3 flex-row ${pressed ? 'bg-red-500' : 'bg-gray-800'}`} 
                    key={game.slug}
                >
                    <Image source={{ uri: game.image }} style={styles.image} />
                    <View>
                        <Text style={styles.title}>{game.title}</Text>
                        <Score score={game.score} maxScore={100} />
                        <Text style={styles.description} numberOfLines={2}>
                            {game.description.slice(0, 100)}...
                        </Text>
                    </View>
                </View> */}
            </Pressable>
        </Link>
    );
};

export function AnimatedGameCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 100,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <GameCard className="bg-red-500" game={game} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 107,
        height: 147,
        borderRadius: 10,
        marginEnd: 10,
    },
    textContainer: {
        width: '70%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
        color: '#fff',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        color: '#eee',
        // flex: 1,
    },
    score: {
        fontSize: 25,
        color: 'green',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingBottom: 10,
    },
    text: {
        color: '#fff',
    },
});
