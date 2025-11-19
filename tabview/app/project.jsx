import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Projects() {
  const projects = [
    {
      title: "Qala – Sustainable Fashion Platform",
      role: "Full-stack + UI",
      tech: ["React Native", "Expo", "Node.js"],
      desc: "Platform where users can repair, redesign and upcycle clothes instead of throwing them.",
      status: "In progress",
    },
    {
      title: "Dev Portfolio App",
      role: "Mobile dev",
      tech: ["React Native", "Expo Router"],
      desc: "A sleek portfolio app with tabs for Home, Projects and Contact, inspired by LinkedIn.",
      status: "Completed",
    },
    {
      title: "Interview Prep Tracker",
      role: "Product + Dev",
      tech: ["React Native", "Firebase"],
      desc: "Tracks DSA, system design and contest progress with streaks and reminders.",
      status: "Planned",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={["#0A66C2", "#003b73"]}
        style={styles.header}
      >
        <Text style={styles.headerLabel}>Projects</Text>
        <Text style={styles.headerTitle}>Stuff I’m building 🚀</Text>
        <Text style={styles.headerSubtitle}>
          A mix of learning projects, experiments and real-world ideas.
        </Text>
      </LinearGradient>

      {/* Projects list */}
      <View style={styles.listWrapper}>
        {projects.map((project, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeaderRow}>
              <Text style={styles.cardTitle}>{project.title}</Text>
              <View style={styles.statusPill}>
                <View
                  style={[
                    styles.statusDot,
                    project.status === "Completed" && { backgroundColor: "#22c55e" },
                    project.status === "Planned" && { backgroundColor: "#facc15" },
                  ]}
                />
                <Text style={styles.statusText}>{project.status}</Text>
              </View>
            </View>

            <Text style={styles.roleText}>{project.role}</Text>
            <Text style={styles.descText}>{project.desc}</Text>

            {/* Tech chips */}
            <View style={styles.chipRow}>
              {project.tech.map((t, idx) => (
                <View key={idx} style={styles.chip}>
                  <Text style={styles.chipText}>{t}</Text>
                </View>
              ))}
            </View>

            {/* CTA row */}
            <View style={styles.ctaRow}>
              <TouchableOpacity style={styles.primaryBtn}>
                <Feather name="github" size={16} />
                <Text style={styles.primaryBtnText}>View code</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.secondaryBtn}>
                <Ionicons name="open-outline" size={16} />
                <Text style={styles.secondaryBtnText}>Live / Demo</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Bottom note */}
      <View style={styles.bottomNoteCard}>
        <Text style={styles.bottomTitle}>More coming soon</Text>
        <Text style={styles.bottomText}>
          I’m actively building new apps and polishing my React Native + Android skills.
          Check back as I add more projects.
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
  headerLabel: {
    color: "#E5F3FF",
    fontSize: 13,
    marginBottom: 4,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },
  headerSubtitle: {
    color: "#D0E3FF",
    fontSize: 13,
    marginTop: 6,
  },
  listWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  card: {
    backgroundColor: "#0B1020",
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(148,163,184,0.15)",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 999,
    marginRight: 6,
    backgroundColor: "#38bdf8",
  },
  statusText: {
    color: "#E5E7EB",
    fontSize: 11,
  },
  roleText: {
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 6,
  },
  descText: {
    color: "#CBD5F5",
    fontSize: 13,
    marginTop: 8,
    lineHeight: 18,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 10,
  },
  chip: {
    backgroundColor: "rgba(37,99,235,0.18)",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  chipText: {
    color: "#BFDBFE",
    fontSize: 11,
  },
  ctaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
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
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  secondaryBtnText: {
    color: "#E3E7FF",
    fontSize: 13,
  },
  bottomNoteCard: {
    backgroundColor: "rgba(15,23,42,0.9)",
    marginHorizontal: 16,
    marginTop: 4,
    marginBottom: 24,
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: "rgba(148,163,184,0.25)",
  },
  bottomTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },
  bottomText: {
    color: "#9CA3AF",
    fontSize: 12,
    lineHeight: 18,
  },
});
