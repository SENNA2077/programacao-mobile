import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from "react-native";

const mensagens = [
  {
    id: 1,
    avatar: "https://picsum.photos/200?random1",
    nome: "Mecânico",
    texto: "Manda o pix",
    horario: "01/01/2025 00:01",
  },
  {
    id: 2,
    avatar: "https://picsum.photos/200?random5",
    nome: "pai",
    texto: "Me empresta 50tão",
    horario: "01/01/2025 00:02",
  },
  {
    id: 3,
    avatar: "https://picsum.photos/200?random3",
    nome: "Mãe",
    texto: "Pagou a internet?",
    horario: "01/01/2025 00:03",
  },
];

function Conversas() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.appBar}>
          <Text style={styles.appTitle}>Conversas</Text>
        </View>
        <FlatList
          data={mensagens}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.conversation}>
                <Image style={styles.avatar} source={{ uri: item.avatar }} />
                <View style={{ flex: 1 }}>
                  <View style={styles.contact}>
                    <Text>{item.nome}</Text>
                    <Text>{item.horario}</Text>
                  </View>
                  <View>
                    <Text>{item.texto}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    appBar: {
      height: 64,
      backgroundColor: "blue",
      padding: 16,
      justifyContent: "center",
      marginBottom: 8,
      elevation: 3,
    },
    appTitle: {
      fontSize: 24,
      color: "white",
    },
    conversation: {
      height: 56,
      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
      padding: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    avatar: {
      height: 48,
      width: 48,
      borderRadius: 48,
      marginRight: 16,
    },
    contact: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
  
export default Conversas;
