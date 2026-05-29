import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ProjectDetailScreen({ route, navigation }) {
  const { project } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER WITH BACK */}
        <View style={styles.headerTop}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <Icon name="arrow-left" size={24} color="#8b5e34" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareBtn}>
            <Icon name="share-2" size={24} color="#8b5e34" />
          </TouchableOpacity>
        </View>

        {/* PROJECT IMAGE */}
        <Image
          source={{ uri: project.image }}
          style={styles.projectImage}
        />

        {/* PROJECT INFO */}
        <View style={styles.infoContainer}>
          <Text style={styles.category}>{project.category || "Проект"}</Text>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.desc}>{project.description}</Text>

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Icon name="square" size={20} color="#8b5e34" />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.statLabel}>Площадь</Text>
                <Text style={styles.statValue}>{project.size}</Text>
              </View>
            </View>

            <View style={styles.stat}>
              <Icon name="dollar-sign" size={20} color="#8b5e34" />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.statLabel}>Стоимость</Text>
                <Text style={styles.statValue}>{project.price || "По запросу"}</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Об этом проекте</Text>
          <Text style={styles.sectionText}>
            Это был амбициозный проект, в котором мы создали комплексный подход
            к дизайну и ремонту. Наша команда работала над каждой деталью,
            чтобы достичь идеального результата.
          </Text>

          <Text style={styles.sectionTitle}>Что включено</Text>
          {[
            "Профессиональное проектирование",
            "Подбор материалов премиум качества",
            "Авторский надзор на всех этапах",
            "Гарантия на выполненные работы",
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Icon name="check-circle" size={16} color="#8b5e34" />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.ctaBtn}>
            <Text style={styles.ctaBtnText}>Получить консультацию</Text>
            <Icon name="arrow-right" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F5F2",
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },

  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  shareBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  projectImage: {
    width: "100%",
    height: 300,
  },

  infoContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  category: {
    fontSize: 12,
    color: "#8b5e34",
    fontWeight: "600",
    marginBottom: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2c1d14",
    marginBottom: 8,
  },

  desc: {
    fontSize: 16,
    color: "#7b7169",
    lineHeight: 24,
    marginBottom: 20,
  },

  statsRow: {
    flexDirection: "row",
    marginBottom: 20,
  },

  stat: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
  },

  statLabel: {
    fontSize: 12,
    color: "#7b7169",
  },

  statValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2c1d14",
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: "#e0d5ca",
    marginVertical: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2c1d14",
    marginBottom: 12,
  },

  sectionText: {
    fontSize: 14,
    color: "#7b7169",
    lineHeight: 22,
    marginBottom: 20,
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  listText: {
    fontSize: 14,
    color: "#7b7169",
    marginLeft: 10,
  },

  ctaBtn: {
    marginTop: 24,
    backgroundColor: "#8b5e34",
    borderRadius: 16,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  ctaBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
});
