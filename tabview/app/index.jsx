import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      {/* Top Profile Banner */}
      <LinearGradient
        colors={["#0A66C2", "#003b73"]}
        style={styles.header}
      >
        <Text style={styles.badge}>Open to opportunities</Text>

        <Text style={styles.name}>Ved Pranav Das</Text>
        <Text style={styles.title}>
          Aspiring Software Developer • React Native • Java
        </Text>
        <Text style={styles.location}>
          <Ionicons name="location-outline" size={13} /> India • Remote friendly
        </Text>

        <View style={styles.headerBtns}>
          <TouchableOpacity style={styles.primaryBtn}>
            <Ionicons name="person-add-outline" size={16} />
            <Text style={styles.primaryBtnText}>Connect</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn}>
            <Ionicons name="mail-outline" size={16} />
            <Text style={styles.secondaryBtnText}>Message</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* About / Summary card */}
      <View style={styles.card}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.cardTitle}>About</Text>
          <Feather name="edit-3" size={16} color="#9CA3AF" />
        </View>
        <Text style={styles.cardText}>
          I’m a student / self-taught dev focusing on{" "}
          <Text style={styles.highlight}>React Native</Text>,{" "}
          <Text style={styles.highlight}>Android</Text> and{" "}
          <Text style={styles.highlight}>Modern UI design</Text>. I enjoy
          building clean, modern interfaces and shipping small but real
          projects.
        </Text>

        <View style={styles.tagRow}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>#ReactNative</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>#AndroidDev</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>#DSA</Text>
          </View>
        </View>
      </View>

      {/* Quick stats */}
      <View style={styles.card}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.cardTitle}>Stats</Text>
          <MaterialIcons name="analytics" size={18} color="#9CA3AF" />
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>130+</Text>
            <Text style={styles.statLabel}>DSA solved</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Tech stacks</Text>
          </View>
        </View>
      </View>

      {/* Featured Project */}
      <View style={styles.card}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.cardTitle}>Featured Project</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Qala – Sustainable Fashion</Text>
          <Text style={styles.featureSubtitle}>React Native • Node.js</Text>
          <Text style={styles.featureText}>
            A platform to repair, redesign, and upcycle clothing instead of
            throwing it away. Focused on sustainability and circular fashion.
          </Text>

          <View style={styles.featureBtns}>
            <TouchableOpacity style={styles.primaryBtnSmall}>
              <Feather name="github" size={15} />
              <Text style={styles.primaryBtnSmallText}>Code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryBtnSmall}>
              <Ionicons name="open-outline" size={15} />
              <Text style={styles.secondaryBtnSmallText}>Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Navigation hints */}
      <View style={[styles.card, styles.lastCard]}>
        <Text style={styles.cardTitle}>Explore more</Text>
        <View style={styles.navRow}>
          <View style={styles.navChip}>
            <Ionicons name="folder-outline" size={16} color="#93C5FD" />
            <Text style={styles.navChipText}>Projects Tab →</Text>
          </View>
          <View style={styles.navChip}>
            <Ionicons name="call-outline" size={16} color="#A5B4FC" />
            <Text style={styles.navChipText}>Contact Tab →</Text>
          </View>
        </View>
        <Text style={styles.cardText}>
          Check out the Projects tab to see what I’ve been building and use the
          Contact tab if you want to collaborate or just say hi.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 26,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(15,118,110,0.9)",
    color: "#CCFBF1",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 11,
    marginBottom: 8,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },

  title: {
    color: "#D0E3FF",
    fontSize: 13,
    marginTop: 4,
  },

  location: {
    color: "#E5F3FF",
    fontSize: 12,
    marginTop: 6,
  },

  headerBtns: {
    flexDirection: "row",
    gap: 10,
    marginTop: 14,
  },

  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 999,
  },
  primaryBtnText: {
    fontSize: 13,
    fontWeight: "600",
  },

  secondaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: "#D1E4FF",
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 999,
  },
  secondaryBtnText: {
    color: "#E3E7FF",
    fontSize: 13,
  },

  card: {
    backgroundColor: "#0B1020",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  lastCard: {
    marginBottom: 24,
  },

  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },

  cardText: {
    color: "#A0A7C0",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 6,
  },

  highlight: {
    color: "#93C5FD",
    fontWeight: "600",
  },

  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },
  tag: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "rgba(59,130,246,0.2)",
  },
  tagText: {
    color: "#BFDBFE",
    fontSize: 11,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  statBox: {
    flex: 1,
    alignItems: "center",
  },

  statNumber: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  statLabel: {
    color: "#9CA3AF",
    fontSize: 11,
    marginTop: 2,
  },

  featureCard: {
    marginTop: 6,
    backgroundColor: "#050816",
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(148,163,184,0.4)",
  },

  featureTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  featureSubtitle: {
    color: "#93C5FD",
    fontSize: 12,
    marginTop: 2,
  },

  featureText: {
    color: "#CBD5F5",
    fontSize: 13,
    marginTop: 6,
    lineHeight: 18,
  },

  featureBtns: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },

  primaryBtnSmall: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
  },
  primaryBtnSmallText: {
    fontSize: 12,
    fontWeight: "600",
  },

  secondaryBtnSmall: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: "#3D4460",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
  },
  secondaryBtnSmallText: {
    color: "#E3E7FF",
    fontSize: 12,
  },

  linkText: {
    color: "#93C5FD",
    fontSize: 12,
  },

  navRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    marginBottom: 6,
  },

  navChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(15,23,42,0.9)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(148,163,184,0.5)",
  },

  navChipText: {
    color: "#E5E7EB",
    fontSize: 12,
  },
});
