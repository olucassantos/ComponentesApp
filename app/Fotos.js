import { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function App() {
    const [imagem, setImagem] = useState(null);

    return (
        <View style={styles.container}>
            <Text>Meus Bichinhos</Text>

            <Image source={imagem} style={{ width: 200, height: 200 }} />

            <View>
                <Button
                    title="Cabra 🐐"
                    onPress={() =>
                        setImagem(require("../assets/images/cabra.jpg"))
                    }
                />

                <Button
                    title="Canguru 🦘"
                    onPress={() =>
                        setImagem(require("../assets/images/canguru.png"))
                    }
                />

                <Button title="Cobra 🐍" onPress={() => {}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
