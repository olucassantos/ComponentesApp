import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./app/Home";
import Fotos from "./app/Fotos";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{ title: "Página Inicial" }}
                />

                <Stack.Screen 
                    name="Fotos" 
                    component={Fotos} 
                    options={{ title: "Galeria de Fotos" }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}