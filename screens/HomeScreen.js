import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import Icon from "react-native-vector-icons/Feather";

const { width } = Dimensions.get("window");

const categories = [
  {
    title: "Офисы",
    desc: "Функциональные\nи стильные офисные\nпространства",
    icon: "monitor",
  },
  {
    title: "Квартиры",
    desc: "Дизайн интерьера\nдля комфортной\nжизни",
    icon: "grid",
  },
  {
    title: "Дома",
    desc: "Проектирование\nи дизайн частных\nдомов",
    icon: "home",
  },
  {
    title: "Дизайн студия",
    desc: "Индивидуальный подход\nи креативные решения",
    icon: "edit-3",
  },
  {
    title: "Ремонт под ключ",
    desc: "Полный цикл работ\nс гарантией качества",
    icon: "key",
  },
];

const projects = [
  {
    id: 1,
    title: "Офис в Душанбе",
    size: "120 м²",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    description: "Современный офис с панорамными окнами",
    price: "450 000 ₽",
    category: "Офисы",
  },
  {
    id: 2,
    title: "Квартира на Патриках",
    size: "90 м²",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description: "Уютная квартира в классическом стиле",
    price: "320 000 ₽",
    category: "Квартиры",
  },
  {
    id: 3,
    title: "Загородный дом",
    size: "250 м²",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    description: "Просторный дом с видом на природу",
    price: "1 200 000 ₽",
    category: "Дома",
  },
  {
    id: 4,
    title: "Квартира в центре",
    size: "120 м²",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    description: "Минималистичный интерьер в центре города",
    price: "380 000 ₽",
    category: "Квартиры",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>N-DESIGN</Text>
            <Text style={styles.subLogo}>
              ДИЗАЙН & РЕМОНТ ПОД КЛЮЧ
            </Text>
          </View>

          <TouchableOpacity style={styles.callBtn}>
            <Icon name="phone" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* HERO */}
        <View style={styles.hero}>
          <View style={styles.leftContent}>
            <Text style={styles.heroTitle}>
              Создаём{"\n"}пространства{"\n"}для{" "}
              <Text style={{ color: "#9c6b3d" }}>жизни</Text>
            </Text>

            <Text style={styles.heroDesc}>
              Дизайн интерьера{"\n"}и ремонт под ключ
            </Text>

            <TouchableOpacity 
              style={styles.projectBtn}
              onPress={() => navigation.navigate("Services")}
            >
              <Text style={styles.projectBtnText}>
                Рассчитать проект
              </Text>
              <Icon name="arrow-right" size={18} color="#fff" />
            </TouchableOpacity>
          </View>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
            }}
            style={styles.heroImage}
          />
        </View>

        {/* DOTS */}
        <View style={styles.dots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* CARDS */}
        <View style={styles.grid}>
          {categories.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.card}
              onPress={() => navigation.navigate("Services")}
            >
              <Icon
                name={item.icon}
                size={32}
                color="#8b5e34"
                style={{ marginBottom: 15 }}
              />

              <Text style={styles.cardTitle}>{item.title}</Text>

              <Text style={styles.cardDesc}>{item.desc}</Text>

              <View style={styles.arrowCircle}>
                <Icon name="arrow-right" size={16} color="#8b5e34" />
              </View>
            </TouchableOpacity>
          ))}

          {/* BIG CARD */}
          <View style={styles.bigCard}>
            <Text style={styles.bigCardTitle}>
              Ремонт под ключ{"\n"}без забот
            </Text>

            <View style={{ marginTop: 18 }}>
              {[
                "Проектирование",
                "Подбор материалов",
                "Авторский надзор",
                "Гарантия качества",
              ].map((item, i) => (
                <View key={i} style={styles.checkRow}>
                  <Icon name="check-circle" size={16} color="#fff" />
                  <Text style={styles.checkText}>{item}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity 
              style={styles.moreBtn}
              onPress={() => navigation.navigate("Services")}
            >
              <Text style={styles.moreBtnText}>Подробнее</Text>
              <Icon name="arrow-right" size={16} color="#8b5e34" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ADVANTAGES */}
        <View style={styles.advantages}>
          <Text style={styles.advTitle}>
            Почему выбирают{"\n"}N-DESIGN
          </Text>

          <View style={styles.advItems}>
            {[
              "Индивидуальный\nподход",
              "Качество\nи надежность",
              "Соблюдение\nсроков",
              "Гарантия\nна работы",
            ].map((item, i) => (
              <View key={i} style={styles.advItem}>
                <Icon name="shield" size={24} color="#fff" />
                <Text style={styles.advText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* PROJECTS */}
        <View style={styles.projectHeader}>
          <Text style={styles.sectionTitle}>Наши проекты</Text>

          <TouchableOpacity 
            style={styles.viewAll}
            onPress={() => navigation.navigate("Projects")}
          >
            <Text style={styles.viewText}>Смотреть все</Text>
            <Icon name="chevron-right" size={18} color="#8b5e34" />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {projects.map((item) => (
            <TouchableOpacity 
              key={item.id}
              style={styles.projectCard}
              onPress={() => navigation.navigate("ProjectDetail", { project: item })}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.projectImage}
              />

              <View style={{ padding: 10 }}>
                <Text style={styles.projectTitle}>{item.title}</Text>
                <Text style={styles.projectSize}>{item.size}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

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
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 34,
    fontWeight: "300",
    color: "#2c1d14",
    letterSpacing: 2,
  },

  subLogo: {
    fontSize: 11,
    color: "#7d746d",
    marginTop: 4,
    letterSpacing: 1,
  },

  callBtn: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#8b5e34",
    justifyContent: "center",
    alignItems: "center",
  },

  hero: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginTop: 30,
  },

  leftContent: {
    width: "45%",
    paddingTop: 10,
  },

  heroTitle: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "700",
    color: "#2c1d14",
  },

  heroDesc: {
    marginTop: 22,
    color: "#6e6258",
    fontSize: 16,
    lineHeight: 24,
  },

  projectBtn: {
    marginTop: 28,
    backgroundColor: "#8b5e34",
    borderRadius: 16,
    height: 56,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  projectBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  heroImage: {
    width: "55%",
    height: 340,
    borderRadius: 28,
  },

  dots: {
    flexDirection: "row",
    marginTop: 18,
    paddingHorizontal: 24,
    alignItems: "center",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#d5d0ca",
    marginRight: 8,
  },

  activeDot: {
    width: 24,
    backgroundColor: "#8b5e34",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 24,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 24,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#2b1c14",
    marginBottom: 12,
  },

  cardDesc: {
    fontSize: 15,
    lineHeight: 22,
    color: "#7b7169",
  },

  arrowCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#d8c9bc",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  bigCard: {
    width: "48%",
    borderRadius: 28,
    padding: 24,
    backgroundColor: "#8b5e34",
    marginBottom: 18,
    justifyContent: "space-between",
  },

  bigCardTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 34,
  },

  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  checkText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 15,
  },

  moreBtn: {
    marginTop: 18,
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  moreBtnText: {
    color: "#8b5e34",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },

  advantages: {
    marginHorizontal: 20,
    backgroundColor: "#8b5e34",
    borderRadius: 28,
    padding: 24,
    marginTop: 10,
  },

  advTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 24,
  },

  advItems: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  advItem: {
    alignItems: "center",
    width: "23%",
  },

  advText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
    lineHeight: 18,
  },

  projectHeader: {
    paddingHorizontal: 20,
    marginTop: 34,
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#2c1d14",
  },

  viewAll: {
    flexDirection: "row",
    alignItems: "center",
  },

  viewText: {
    color: "#8b5e34",
    fontSize: 16,
    marginRight: 6,
  },

  projectCard: {
    width: 220,
    backgroundColor: "#fff",
    borderRadius: 24,
    marginRight: 16,
    overflow: "hidden",
  },

  projectImage: {
    width: "100%",
    height: 170,
  },

  projectTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#2c1d14",
  },

  projectSize: {
    marginTop: 6,
    color: "#7c7169",
    fontSize: 14,
  },
});
