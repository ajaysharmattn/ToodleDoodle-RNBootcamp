import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "../components/AppButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../utility/Navigator";
import { AppStrings, Colors, NavigatorScreenNames } from "../utility/Constants";

type HomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, NavigatorScreenNames.HOME>;

export default function HomeScreen({navigation}: HomeScreenNavigationProp) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{AppStrings.HOME_SCREEN_TITLE}</Text>
            <View style={styles.buttonColumn}>
                <AppButton text={AppStrings.ADD_TODO_BUTTON_TEXT} onPress={()=>navigation.navigate(NavigatorScreenNames.ADD_TODO)} />
                <AppButton text={NavigatorScreenNames.TODOS} onPress={()=>navigation.navigate(NavigatorScreenNames.TODOS)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 40,    
        margin: 20,         
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.TEXT_PRIMARY,
        padding: 10,               
    },
    buttonColumn: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    }
})
