import { StyleSheet, Text, View } from "react-native";

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tarefas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#1a1a1a',
        padding: 24,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 30,
    },
});



const handleCheckTask = async (id, finished, token) => {
    try {
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const requestBody = JSON.stringify({ finished });
      const requestOptions = {
        method: 'PATCH',
        headers: headers,
        body: requestBody,
      };
      const response = await fetch(`/task/${id}`, requestOptions);
      if (response.ok) {
        console.log(`Atividade com ID ${id} marcada como concluída.`);
      } else {
        console.error(`Erro ao marcar a atividade com ID ${id} como concluída.`);
      }
    } catch (error) {
      console.error('Ocorreu um falha ao marcar a atividade como concluída:', error);
    }
  };