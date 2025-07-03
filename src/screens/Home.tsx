import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "../components/AppButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../utility/Navigator";

type HomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeScreen({navigation}: HomeScreenNavigationProp) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to ToodleDoodle 😊</Text>
            <View style={styles.buttonColumn}>
                <AppButton text="Add Todo" onPress={()=>navigation.navigate('AddTodo')} />
                <AppButton text="View Todos" onPress={()=>navigation.navigate('Todos')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6dcdc',
        borderRadius: 40,    
        margin: 20,         
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1b1616',        
        padding: 10,               
    },
    buttonColumn: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    }
})
