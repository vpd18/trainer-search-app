import { StyleSheet, Text, View, Pressable, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

export default function Home() {
  // Floating Animation
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -10,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 10,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Neon Glow Title */}
      <Text style={styles.title}>🔥 VED'S HOME 🔥</Text>

      {/* Floating Card */}
      <Animated.View
        style={[
          styles.card,
          { transform: [{ translateY: floatAnim }] },
        ]}
      >
        <Text style={styles.cardTitle}>WELCOME BACK</Text>
        <Text style={styles.cardText}>
          Your journey into mobile development is leveling up.
        </Text>
      </Animated.View>

      {/* Crazy Buttons */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>🚀 Start Exploring</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.secondaryButton]}>
        <Text style={styles.secondaryText}>💡 View Projects</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.glowButton]}>
        <Text style={styles.buttonText}>⚡ Skills Boost Mode</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0c29", // gradient base
    backgroundImage:
      "linear-gradient(45deg, #0f0c29, #302b63, #24243e)", // RN web fallback
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#fff",
    textShadowColor: "#8b5cf6",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    marginBottom: 30,
    textAlign: "center",
  },

  card: {
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    marginBottom: 25,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },

  cardText: {
    color: "#d1d5db",
    fontSize: 14,
    lineHeight: 20,
  },

  button: {
    width: "85%",
    backgroundColor: "#6d28d9",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",

    shadowColor: "#6d28d9",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryButton: {
    backgroundColor: "#1f2937",
    shadowColor: "#111827",
  },

  secondaryText: {
    color: "#cbd5e1",
    fontSize: 16,
    fontWeight: "600",
  },

  glowButton: {
    backgroundColor: "#8b5cf6",
    shadowColor: "#c084fc",
    shadowOpacity: 1,
    shadowRadius: 20,
  },
});
