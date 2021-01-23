import { Assets } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

import Dot from '../../components/Dot'
import SizeBottons from '../../components/SizeBottons'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

export default function Detail({ navigation }) {
    navigation.setOptions({
        headerTitle: "Nike Downshifter 10"
    })

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                resizeMode='cover'
                source={require('../../assets/detail.png')}
            />
            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24 }]}>
                        R$ 280,90
                    </Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 24 }]}>
                        Nike Downshifter 10
                    </Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color='#2379f4' />
                    <Dot color='#fb6e53' />
                    <Dot color='#ddd' />
                    <Dot color='#000' />
                </View>

                <View style={{ flexDirection: 'row', width: '100%', }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeBottons bgColor='#17181a' color='#fff'>35</SizeBottons>
                        <SizeBottons>37</SizeBottons>
                        <SizeBottons>39</SizeBottons>
                        <SizeBottons>40</SizeBottons>
                        <SizeBottons>42</SizeBottons>
                    </ScrollView>
                </View>

                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Nike Downshifter 10
                    </Text>
                    <Text style={styles.textContent}>
                        O Nike Downshifter 10 traz suporte e amortecimento atualizados. Seu design leve e acolchoado ajuda a manter você se movimentando enquanto corre.
                    </Text>
                    <Text style={styles.textList}>
                        - Categoria: Amortecimento
                    </Text>
                    <Text style={styles.textList}>
                        - Material: Mesh
                    </Text>
                </View>

                <Button />

                <View style={styles.line} />

                <Footer />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: 2,
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%',
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%',
    },
    textTitle: {
        fontSize: 22,
        marginVertical: '2%',
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
    },
    line: {
        borderWidth: 1,
        borderBottomColor: '#ddd',
        marginVertical: '2%',
    }
})