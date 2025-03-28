import { View, StyleSheet, ScrollView, } from "react-native";
import { Text, TextInput, Button, IconButton, Icon, Appbar } from "react-native-paper";

function ContactScreen(){
    return<View style={{flex:1}}>
        <Appbar.Header>
            <Appbar.Content title="Contatos"/>
            <Appbar.Action icon="dots-vertical"/>
        </Appbar.Header>
    </View>
};

const styles = StyleSheet.create({


});

export default ContactScreen;