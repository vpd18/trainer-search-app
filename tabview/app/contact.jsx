import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Contact() {
  // 🔹 your real details
  const email = "vpdviking18@gmail.com";
  const phone = "+919234896122"; // change this to your real number if you want calling
  const linkedinUrl = "https://www.linkedin.com"; // put your real LinkedIn when ready
  const githubUrl = "https://github.com/vpd18";
  const leetcodeUrl = "https://leetcode.com/u/PNAo9C3Q1k/";

  const openLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "Cannot open this link: " + url);
      }
    } catch (err) {
      Alert.alert("Error", "Something went wrong while opening the link.");
    }
  };

  const handleEmail = () => {
    openLink(`mailto:${email}`);
  };

  const handlePhone = () => {
    openLink(`tel:${phone}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Top gradient header */}
      <LinearGradient
        colors={["#0A66C2", "#003b73"]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.textBlock}>
            <Text style={styles.greeting}>Let’s Connect 👋</Text>
            <Text style={styles.name}>Ved Pranav Das</Text>
            <Text style={styles.title}>
              Aspiring Developer • React Native • Java
            </Text>
          </View>

          {/* Avatar */}
          <View style={styles.avatarWrapper}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
              }}
              style={styles.avatar}
            />
          </View>
        </View>
      </LinearGradient>

      {/* Card: Quick contact buttons */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Reach out</Text>
        <Text style={styles.cardSubtitle}>
          I’m open to internships, freelance gigs, and collabs.
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.primaryBtn} onPress={handleEmail}>
            <Ionicons name="mail-outline" size={18} />
            <Text style={styles.primaryBtnText}>Email me</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn} onPress={handlePhone}>
            <Feather name="phone" size={18} />
            <Text style={styles.secondaryBtnText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Card: Contact details */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contact details</Text>

        <TouchableOpacity style={styles.infoRow} onPress={handleEmail}>
          <Ionicons name="mail-outline" size={20} />
          <View style={styles.infoTextWrapper}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{email}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoRow} onPress={handlePhone}>
          <Feather name="phone" size={20} />
          <View style={styles.infoTextWrapper}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>{phone}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={20} />
          <View style={styles.infoTextWrapper}>
            <Text style={styles.infoLabel}>Location</Text>
            <Text style={styles.infoValue}>India (Open to remote)</Text>
          </View>
        </View>
      </View>

      {/* Card: Social links */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Find me online</Text>

        <TouchableOpacity
          style={styles.socialRow}
          onPress={() => openLink(linkedinUrl)}
        >
          <Ionicons name="logo-linkedin" size={22} />
          <View style={styles.infoTextWrapper}>
            <Text style={styles.infoLabel}>LinkedIn</Text>
            <Text style={styles.infoValue}>Add your LinkedIn here</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialRow}
          onPress={() => openLink(githubUrl)}
        >
          <Feather name="github" size={22} />
          <View style={styles.infoTextWrapper}>
            <Text style={styles.infoLabel}>GitHub</Text>
            <Text style={styles.infoValue}>github.com/vpd18</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialRow}
          onPress={() => openLink(leetcodeUrl)}
        >
          <MaterialCommunityIcons name="code-tags" size={22} />
          <View style={styles.infoTextWrapper}>
            <Text style={styles.infoLabel}>LeetCode</Text>
            <Text style={styles.infoValue}>
              leetcode.com/u/PNAo9C3Q1k/
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Card: Message / summary */}
      <View style={[styles.card, styles.lastCard]}>
        <Text style={styles.cardTitle}>Why contact me?</Text>
        <Text style={styles.cardSubtitle}>
          I’m currently learning React Native and Android development.{"\n"}
          I love building UIs and I’m actively working on projects (check the
          Projects tab 👀).
        </Text>

        <TouchableOpacity
          style={styles.primaryWideBtn}
          onPress={handleEmail}
        >
          <Text style={styles.primaryWideBtnText}>Send a quick message</Text>
        </TouchableOpacity>
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
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: "hidden",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textBlock: {
    flex: 1,
    paddingRight: 16,
  },
  greeting: {
    color: "#E5F3FF",
    fontSize: 14,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "700",
    marginTop: 6,
  },
  title: {
    color: "#D0E3FF",
    fontSize: 13,
    marginTop: 6,
  },
  avatarWrapper: {
    width: 70,
    height: 70,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  card: {
    backgroundColor: "#0B1020",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  lastCard: {
    marginBottom: 24,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  cardSubtitle: {
    color: "#A0A7C0",
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 4,
  },
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
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
    borderColor: "#3D4460",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
  },
  secondaryBtnText: {
    color: "#E3E7FF",
    fontSize: 13,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  infoTextWrapper: {
    marginLeft: 10,
    flex: 1,
  },
  infoLabel: {
    color: "#7D86A5",
    fontSize: 11,
  },
  infoValue: {
    color: "#E3E7FF",
    fontSize: 13,
    marginTop: 2,
  },
  socialRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  primaryWideBtn: {
    marginTop: 14,
    backgroundColor: "#0A66C2",
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: "center",
  },
  primaryWideBtnText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
});
