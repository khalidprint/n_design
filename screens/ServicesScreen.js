import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const services = [
  {
    id: 1,
    title: "Проектирование",
    icon: "layers",
    description: "Разработка детального проекта вашего интерьера",
    features: ["3D визуализация", "План работ", "Смета"],
  },
  {
    id: 2,
    title: "Подбор материалов",
    icon: "box",
    description: "Помощь в выборе качественных материалов",
    features: ["Консультация", "Оптовые цены", "Доставка"],
  },
  {
    id: 3,
    title: "Авторский надзор",
    icon: "eye",
    description: "Контроль качества на всех этапах",
    features: ["Еженедельные отчеты", "Контроль сроков", "Гарантия"],
  },
  {
    id: 4,
    title: "Ремонт под ключ",
    icon: "tool",
    description: "Полный цикл работ от А до Я",
    features: ["Демонтаж", "Монтаж", "Отделка", "Уборка"],
  },
];

export default function ServicesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Услуги</Text>
          <Text style={styles.subtitle}>Полный спектр услуг</Text>
        </View>

        {services.map((service) => (
          <View key={service.id} style={styles.serviceCard}>
            <View style={styles.iconContainer}>
              <Icon name={service.icon} size={32} color="#fff" />
            </View>

            <View style={styles.serviceContent}>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDesc}>{service.description}</Text>

              <View style={styles.featuresList}>
                {service.features.map((feature, index) => (
                  <View key={index} style={styles.featureItem}>
                    <Icon name="check" size={16} color="#8b5e34" />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>
            </View>

            <TouchableOpacity style={styles.arrowBtn}>
              <Icon name="arrow-right" size={20} color="#8b5e34" />
            </TouchableOpacity>
          </View>
        ))}

        {/* CTA SECTION */}
        <View style={styles.ctaContainer}>
          <Text style={styles.ctaTitle}>Готовы начать?</Text>
          <Text style={styles.ctaDesc}>
            Рассчитаем стоимость проекта совершенно бесплатно
          </Text>

          <TouchableOpacity style={styles.ctaBtn}>
            <Text style={styles.ctaBtnText}>Получить консультацию</Text>
            <Icon name="phone" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

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

  serviceCard: {
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 24,
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: "#8b5e34",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  serviceContent: {
    flex: 1,
  },

  serviceTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2c1d14",
    marginBottom: 6,
  },

  serviceDesc: {
    fontSize: 14,
    color: "#7b7169",
    marginBottom: 12,
  },

  featuresList: {
    gap: 6,
  },

  featureItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  featureText: {
    fontSize: 12,
    color: "#7b7169",
    marginLeft: 6,
  },

  arrowBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  ctaContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: "#8b5e34",
    borderRadius: 24,
  },

  ctaTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },

  ctaDesc: {
    fontSize: 14,
    color: "#d4c7b8",
    marginBottom: 20,
  },

  ctaBtn: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  ctaBtnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#8b5e34",
    marginRight: 8,
  },
});
