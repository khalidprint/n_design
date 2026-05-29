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

const projects = [
  {
    id: 1,
    title: "Офис в Душанбе",
    size: "120 м²",
    category: "Офисы",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    description: "Современный офис с панорамными окнами",
    price: "450 000 ₽",
  },
  {
    id: 2,
    title: "Квартира на Патриках",
    size: "90 м²",
    category: "Квартиры",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description: "Уютная квартира в классическом стиле",
    price: "320 000 ₽",
  },
  {
    id: 3,
    title: "Загородный дом",
    size: "250 м²",
    category: "Дома",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    description: "Просторный дом с видом на природу",
    price: "1 200 000 ₽",
  },
  {
    id: 4,
    title: "Квартира в центре",
    size: "120 м²",
    category: "Квартиры",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    description: "Минималистичный интерьер в центре города",
    price: "380 000 ₽",
  },
];

export default function ProjectsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Наши проекты</Text>
          <Text style={styles.subtitle}>Реализованные объекты</Text>
        </View>

        <View style={styles.filterContainer}>
          {["Все", "Офисы", "Квартиры", "Дома"].map((filter, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.filterBtn,
                index === 0 && styles.filterBtnActive,
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  index === 0 && styles.filterTextActive,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {projects.map((project) => (
          <TouchableOpacity
            key={project.id}
            style={styles.projectItem}
            onPress={() => navigation.navigate("ProjectDetail", { project })}
          >
            <Image
              source={{ uri: project.image }}
              style={styles.projectImage}
            />

            <View style={styles.projectInfo}>
              <Text style={styles.projectCategory}>{project.category}</Text>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDesc}>{project.description}</Text>

              <View style={styles.projectFooter}>
                <View>
                  <Text style={styles.projectSize}>{project.size}</Text>
                  <Text style={styles.projectPrice}>{project.price}</Text>
                </View>
                <Icon name="arrow-right" size={24} color="#8b5e34" />
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F5F2",
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    marginBottom: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#2c1d14",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 16,
    color: "#7b7169",
  },

  filterContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 24,
  },

  filterBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#e0d5ca",
  },

  filterBtnActive: {
    backgroundColor: "#8b5e34",
    borderColor: "#8b5e34",
  },

  filterText: {
    fontSize: 14,
    color: "#7b7169",
    fontWeight: "600",
  },

  filterTextActive: {
    color: "#fff",
  },

  projectItem: {
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },

  projectImage: {
    width: "100%",
    height: 200,
  },

  projectInfo: {
    padding: 20,
  },

  projectCategory: {
    fontSize: 12,
    color: "#8b5e34",
    fontWeight: "600",
    marginBottom: 8,
  },

  projectTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2c1d14",
    marginBottom: 8,
  },

  projectDesc: {
    fontSize: 14,
    color: "#7b7169",
    marginBottom: 16,
  },

  projectFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  projectSize: {
    fontSize: 14,
    color: "#7b7169",
    marginBottom: 4,
  },

  projectPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#8b5e34",
  },
});
