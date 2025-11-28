import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function CaffeMocha() {
    const router = useRouter();

    const [size, setSize] = useState("M");
    const basePrice = 4.53;
    const price = size === "S" ? basePrice - 0.5 : size === "L" ? basePrice + 0.5 : basePrice;

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.back}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Detail</Text>
                <Text style={styles.heart}>♡</Text>
            </View>

            <Image source={require("../assets/mocha.png")} style={styles.img} />

            <View style={styles.inner}>
                <Text style={styles.name}>Caffe Mocha</Text>
                <Text style={styles.sub}>Ice/Hot</Text>

                <Text style={styles.sectionTitle}>Size</Text>
                <View style={styles.sizeRow}>
                    {["S", "M", "L"].map(s => (
                        <TouchableOpacity key={s} onPress={() => setSize(s)}>
                            <Text style={[styles.sizeBox, size === s && styles.sizeActive]}>{s}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.footer}>
                    <View>
                        <Text style={styles.priceLabel}>Price</Text>
                        <Text style={styles.price}>$ {price.toFixed(2)}</Text>
                    </View>

                    <TouchableOpacity style={styles.buyBtn}>
                        <Text style={styles.buyText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff" },
    header: {
        paddingTop: 40, paddingHorizontal: 20,
        flexDirection: "row", justifyContent: "space-between", alignItems: "center"
    },
    back: { fontSize: 26 },
    heart: { fontSize: 22 },
    headerTitle: { fontSize: 20, fontWeight: "700" },

    img: { width: "90%", height: 220, borderRadius: 20, alignSelf: "center", marginTop: 20 },

    inner: { padding: 20 },
    name: { fontSize: 28, fontWeight: "700" },
    sub: { color: "#aaa", marginTop: 4 },

    sectionTitle: { fontSize: 20, fontWeight: "700", marginTop: 20 },

    sizeRow: { flexDirection: "row", marginTop: 10 },
    sizeBox: {
        paddingVertical: 10,
        paddingHorizontal: 22,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 12,
        fontSize: 16
    },
    sizeActive: {
        backgroundColor: "#d8b499",
        borderColor: "#b46a40",
        color: "#fff"
    },

    footer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    priceLabel: { color: "#777" },
    price: { fontSize: 26, fontWeight: "700" },

    buyBtn: {
        backgroundColor: "#b46a40",
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 20
    },
    buyText: { color: "#fff", fontSize: 16, fontWeight: "700" }
});
