import React from "react";
import Home from "./Home";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  StatusBar,
  Linking,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const LINKEDIN_BLUE = "#0A66C2";

// Import your local image
import vedPhoto from "./assets/ved.jpg";

/* ---------- Reusable Header ---------- */
function LinkedInHeader({ title = "Profile"}){
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

/* ---------- PROFILE SCREEN ---------- */
function ProfileScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <LinkedInHeader />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.banner} />

          <View style={styles.profileRow}>
            {/* Your local image */}
            <Image source={vedPhoto} style={styles.avatar} />

            <View style={styles.profileTextWrap}>
              <Text style={styles.name}>Ved Pranav Das</Text>
              <Text style={styles.headline}>
                Aspiring Mobile Developer | React Native • Kotlin • Java
              </Text>
              <Text style={styles.location}>
                Bangalore, Karnataka, India · Student
              </Text>
            </View>
          </View>

          <View style={styles.actionsRow}>
            <Pressable style={[styles.chipButton, styles.primaryButton]}>
              <Text style={styles.primaryButtonText}>Connect</Text>
            </Pressable>
            <Pressable style={[styles.chipButton, styles.secondaryButton]}>
              <Text style={styles.secondaryButtonText}>Message</Text>
            </Pressable>
            <Pressable style={[styles.chipButton, styles.secondaryButton]}>
              <Text style={styles.secondaryButtonText}>More</Text>
            </Pressable>
          </View>
        </View>

        {/* About */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.sectionBody}>
            First-year dev figuring out how to break and build apps on purpose.
            Passionate about Android, React Native, and turning random ideas
            into working prototypes. Learning fast, shipping messy, and
            improving with every build.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Experience</Text>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Self-Taught Mobile Developer</Text>
            <Text style={styles.itemSubTitle}>Indie • Part-time</Text>
            <Text style={styles.itemMeta}>Jan 2025 – Present · Remote</Text>
            <Text style={styles.itemBody}>
              • Building practice apps using React Native{"\n"}
              • Experimenting with UI clones of popular apps{"\n"}
              • Learning Git, app architecture, and clean code habits
            </Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>University Projects (WIP)</Text>
            <Text style={styles.itemSubTitle}>CS / IT Stream</Text>
            <Text style={styles.itemMeta}>2025 – Present · Academic</Text>
            <Text style={styles.itemBody}>
              • Collaborating with classmates on small projects{"\n"}
              • Exploring APIs, authentication, and database basics{"\n"}
              • Focusing on turning documentation into working features
            </Text>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsRow}>
            <Text style={styles.skillPill}>React Native</Text>
            <Text style={styles.skillPill}>Java</Text>
            <Text style={styles.skillPill}>Kotlin</Text>
          </View>
          <View style={styles.skillsRow}>
            <Text style={styles.skillPill}>Android Studio</Text>
            <Text style={styles.skillPill}>Expo</Text>
            <Text style={styles.skillPill}>Git & GitHub</Text>
          </View>
        </View>

        {/* Endorsements */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Endorsements</Text>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>React Native</Text>
            <Text style={styles.endorseText}>Endorsed by 5 colleagues</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Java</Text>
            <Text style={styles.endorseText}>Endorsed by 3 colleagues</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Kotlin</Text>
            <Text style={styles.endorseText}>Endorsed by 2 classmates</Text>
          </View>
        </View>

        {/* Certifications */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Certifications</Text>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Google Android Basics</Text>
            <Text style={styles.itemMeta}>Issued 2025 · Online</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Meta React Native Basics</Text>
            <Text style={styles.itemMeta}>Issued 2025 · Coursera</Text>
          </View>
        </View>

        {/* Contact / Links */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Contact</Text>

          <Pressable
            onPress={() =>
              Linking.openURL("mailto:vedpranav.das.dev+random@outlook.com")
            }
          >
            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.linkText}>
                vedpranav.das.dev+random@outlook.com
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() =>
              Linking.openURL("https://linkedin.com/in/ved-pranav-das-9x7rdev")
            }
          >
            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>LinkedIn</Text>
              <Text style={styles.linkText}>
                linkedin.com/in/ved-pranav-das-9x7rdev
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() =>
              Linking.openURL("https://leetcode.com/u/PNAo9C3Q1k/")
            }
          >
            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>LeetCode</Text>
              <Text style={styles.linkText}>leetcode.com/u/PNAo9C3Q1k</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() =>
              Linking.openURL("https://your-portfolio-link.com")
            }
          >
            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>Portfolio</Text>
              <Text style={styles.linkText}>
                Coming soon · Building my first case studies
              </Text>
            </View>
          </Pressable>
        </View>

        <Text style={styles.footerText}>
          Mock LinkedIn-style profile · React Native · Dark Mode
        </Text>
      </ScrollView>
    </View>
  );
}

/* ---------- NETWORK SCREEN ---------- */
function NetworkScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <LinkedInHeader title="My Network" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>People you may know</Text>

          {["Frontend Dev", "Android Dev", "UI/UX Designer"].map((role, i) => (
            <View key={i} style={[styles.item, { marginBottom: 10 }]}>
              <Text style={styles.itemTitle}>Random Person {i + 1}</Text>
              <Text style={styles.itemSubTitle}>{role}</Text>
              <Text style={styles.itemMeta}>Bangalore · 2nd degree</Text>
              <Pressable
                style={[
                  styles.chipButton,
                  styles.primaryButton,
                  { marginTop: 6, alignSelf: "flex-start" },
                ]}
              >
                <Text style={styles.primaryButtonText}>Connect</Text>
              </Pressable>
            </View>
          ))}
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Invitations</Text>
          <Text style={styles.sectionBody}>
            No pending invitations right now.{"\n"}
            Go connect with more devs and designers 👀
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

/* ---------- JOBS SCREEN ---------- */
function JobsScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <LinkedInHeader title="Jobs" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Recommended for Ved</Text>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>React Native Intern</Text>
            <Text style={styles.itemSubTitle}>Stealth Startup · Remote</Text>
            <Text style={styles.itemMeta}>Actively hiring · 10 applicants</Text>
            <Text style={styles.itemBody}>
              • Work on mobile UI screens{"\n"}
              • Learn from senior devs{"\n"}
              • Ship features to real users
            </Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Android Developer – Fresher</Text>
            <Text style={styles.itemSubTitle}>Tech Co · Bangalore</Text>
            <Text style={styles.itemMeta}>On-site · Full-time</Text>
            <Text style={styles.itemBody}>
              • Kotlin / Java basics{"\n"}
              • MVVM, REST APIs{"\n"}
              • Collaboration with product & design team
            </Text>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Job alerts</Text>
          <Text style={styles.sectionBody}>
            Turn on alerts for:{"\n"}
            • “React Native Intern”{"\n"}
            • “Android Developer Fresher”{"\n"}
            • “Junior Mobile Engineer”
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

/* ---------- MAIN APP WITH TABS ---------- */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#020617",
            borderTopColor: "#1f2937",
          },
          tabBarActiveTintColor: LINKEDIN_BLUE,
          tabBarInactiveTintColor: "#6b7280",
        }}
      >
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarLabel: "Profile" }}
        />
        <Tab.Screen
          name="Network"
          component={NetworkScreen}
          options={{ tabBarLabel: "Network" }}
        />
        <Tab.Screen
          name="Jobs"
          component={JobsScreen}
          options={{ tabBarLabel: "Jobs" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    height: 54,
    backgroundColor: "#111827",
    paddingHorizontal: 16,
    justifyContent: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#1f2937",
  },
  headerTitle: {
    color: LINKEDIN_BLUE,
    fontSize: 20,
    fontWeight: "800",
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    paddingBottom: 32,
    backgroundColor: "#020617",
  },
  profileCard: {
    backgroundColor: "#020617",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#1f2937",
    marginBottom: 12,
  },
  banner: {
    height: 70,
    backgroundColor: "#1f2937",
  },
  profileRow: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingTop: -24,
    paddingBottom: 8,
    marginTop: -24,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: LINKEDIN_BLUE,
    backgroundColor: "#111827",
    marginRight: 12,
  },
  profileTextWrap: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    color: "#f9fafb",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 2,
  },
  headline: {
    color: "#e5e7eb",
    fontSize: 13,
    marginBottom: 4,
  },
  location: {
    color: "#9ca3af",
    fontSize: 12,
  },
  actionsRow: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingBottom: 10,
    paddingTop: 4,
  },
  chipButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  primaryButton: {
    backgroundColor: LINKEDIN_BLUE,
  },
  primaryButtonText: {
    color: "#f9fafb",
    fontSize: 13,
    fontWeight: "600",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#4b5563",
    backgroundColor: "#020617",
  },
  secondaryButtonText: {
    color: "#e5e7eb",
    fontSize: 13,
    fontWeight: "500",
  },
  sectionCard: {
    backgroundColor: "#020617",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#1f2937",
  },
  sectionTitle: {
    color: "#e5e7eb",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  sectionBody: {
    color: "#d1d5db",
    fontSize: 13,
    lineHeight: 18,
  },
  item: {
    marginTop: 8,
  },
  itemTitle: {
    color: "#e5e7eb",
    fontSize: 14,
    fontWeight: "600",
  },
  itemSubTitle: {
    color: "#9ca3af",
    fontSize: 12,
    marginTop: 2,
  },
  itemMeta: {
    color: "#6b7280",
    fontSize: 11,
    marginTop: 2,
  },
  itemBody: {
    color: "#d1d5db",
    fontSize: 12,
    marginTop: 4,
    lineHeight: 18,
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
  },
  skillPill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: "#1f2937",
    color: "#e5e7eb",
    fontSize: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  contactRow: {
    marginTop: 6,
  },
  contactLabel: {
    color: "#9ca3af",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  linkText: {
    color: "#60a5fa",
    fontSize: 13,
    marginTop: 2,
    textDecorationLine: "underline",
  },
  footerText: {
    color: "#6b7280",
    textAlign: "center",
    fontSize: 11,
    marginTop: 8,
  },
  endorseText: {
    color: "#9ca3af",
    fontSize: 12,
    marginTop: 2,
  },
});
