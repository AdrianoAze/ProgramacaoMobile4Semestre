import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {
    const [cep, setCEP] = useState('');
    const [infos, setInfos] = useState({
        cep: '',
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: ''
    });

    async function buscarCEP() {
        try {
            const result = await axios.get(
                `https://viacep.com.br/ws/${cep}/json/`
            );
            setInfos({
                cep: result.data.cep,
                bairro: result.data.bairro,
                localidade: result.data.localidade,
                logradouro: result.data.logradouro,
                uf: result.data.uf
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="CEP"
                style={styles.input}
                keyboardType="numeric"
                value={cep}
                onChangeText={(text) => setCEP(text)}
            />
            <Button title='Buscar' onPress={buscarCEP} />
            {infos && <Text>{JSON.stringify(infos)}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        backgroundColor: '#ababab',
        padding: 20
    }
});