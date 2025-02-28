import {useState} from "react"
import { Text, Button, StyleSheet } from "react-native";

function Titulo(props) {
  return <Text>{props.children}</Text>
}



function App() {
  const [estado, setEstado] = useState(0);
  return(
<>

  <Titulo>Meu App</Titulo>
  <Text style={styles.Titulo}>BraveShop</Text>
  <Text style={styles.Titulo}>{estado}</Text>
  <Button title="Clique aqui" onPress={() => setEstado(estado + 1)}></Button>
</>
 );
}

const styles = StyleSheet.create({
  fontSize: 32,
  paddingTop: 34
})

export default App;

