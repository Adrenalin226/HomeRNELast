import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
    const router = useRouter();

    return (
        <ScrollView style={styles.container}>
            {/* top section */}
            <View style={styles.topSection}>
                <Text style={styles.locationLabel}>Location</Text>
                <Text style={styles.location}>Bilzen, Tanjungbalai ▼</Text>

                <TextInput
                    placeholder="Search coffee"
                    placeholderTextColor="#888"
                    style={styles.search}
                />
            </View>

            {/* Promo */}
            <Image source={require("../assets/promo.png")} style={styles.promoBanner} />

            {/* Tabs */}
            <ScrollView horizontal style={styles.tabs} showsHorizontalScrollIndicator={false}>
                <Text style={[styles.tab, styles.activeTab]}>All Coffee</Text>
                <Text style={styles.tab}>Macchiato</Text>
                <Text style={styles.tab}>Latte</Text>
                <Text style={styles.tab}>Americano</Text>
            </ScrollView>

            {/* Cards */}
            <View style={styles.cardContainer}>
                {/* CARD 1 */}
                {/* CARD 1 */}
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => router.push("/CaffeMocha")}
                >
                    <Image source={require("../assets/mocha.png")} style={styles.cardImg} />
                    <Text style={styles.cardTitle}>Caffe Mocha</Text>
                    <Text style={styles.cardSub}>Deep Foam</Text>
                    <Text style={styles.cardPrice}>$ 4.53</Text>
                </TouchableOpacity>

                {/* CARD 2 */}
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => router.push("/FlatWhite")}
                >
                    <Image source={require("../assets/flatwhite.png")} style={styles.cardImg} />
                    <Text style={styles.cardTitle}>Flat White</Text>
                    <Text style={styles.cardSub}>Espresso</Text>
                    <Text style={styles.cardPrice}>$ 3.53</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },

    topSection: { padding: 20, backgroundColor: "#2b2b2b" },
    locationLabel: { color: "#ccc" },
    location: { color: "#fff", fontSize: 18, fontWeight: "600", marginBottom: 15 },

    search: {
        backgroundColor: "#3b3b3b",
        padding: 12,
        borderRadius: 12,
        color: "#fff",
    },

    promoBanner: {
        width: "100%",
        height: 180,
        marginVertical: 15,
        borderRadius: 16,
        resizeMode: "cover",
    },

    tabs: { flexDirection: "row", paddingHorizontal: 20 },
    tab: { marginRight: 20, fontSize: 16, color: "#777" },
    activeTab: { fontWeight: "700", color: "#000" },

    cardContainer: {
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },

    card: {
        width: "48%",
        backgroundColor: "#f5f5f5",
        padding: 12,
        borderRadius: 16,
    },

    cardImg: { width: "100%", height: 120, borderRadius: 16 },

    cardTitle: { fontSize: 16, fontWeight: "700", marginTop: 10 },
    cardSub: { color: "#888", marginVertical: 4 },
    cardPrice: { fontSize: 18, fontWeight: "700", marginTop: 4 },
});
