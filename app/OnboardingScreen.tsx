import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
    const router = useRouter();

    return (
        <ImageBackground
            source={require("../assets/coffee.png")}
            style={styles.bg}
            imageStyle={{ opacity: 0.9 }}
        >
            <View style={styles.overlay} />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Fall in Love with{"\n"}Coffee in Blissful{"\n"}Delight!
                </Text>

                <Text style={styles.subtitle}>
                    Welcome to our cozy coffee corner, where{"\n"}
                    every cup is a delightful for you.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push("/")}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        justifyContent: "flex-end",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.45)",
    },
    content: {
        paddingHorizontal: 30,
        paddingBottom: 70,
    },
    title: {
        color: "#fff",
        fontSize: 34,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 16,
    },
    subtitle: {
        color: "#dcdcdc",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 22,
        marginBottom: 30,
    },
    button: {
        backgroundColor: "#d98c4a",
        paddingVertical: 16,
        borderRadius: 16,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
    },
});
