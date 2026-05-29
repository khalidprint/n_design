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

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Icon name="user" size={40} color="#fff" />
          </View>

          <Text style={styles.name}>Иван Проектов</Text>
          <Text style={styles.role}>Дизайнер интерьеров</Text>
        </View>

        <View style={styles.statsContainer}>
          {[
            { label: "Проектов", value: "24" },
            { label: "Клиентов", value: "156" },
            { label: "Опыт", value: "8 лет" },
          ].map((stat, index) => (
            <View key={index} style={styles.stat}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Меню</Text>

        {[
          { icon: "settings", title: "Настройки", desc: "Управление профилем" },
          { icon: "heart", title: "Избранное", desc: "Сохраненные проекты" },
          { icon: "message-circle", title: "Сообщения", desc: "Новые уведомления" },
          { icon: "file-text", title: "Договоры", desc: "Мои соглашения" },
          { icon: "help-circle", title: "Помощь", desc: "Поддержка и FAQ" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Icon name={item.icon} size={20} color="#8b5e34" />
            </View>
            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuDesc}>{item.desc}</Text>
            </View>
            <Icon name="chevron-right" size={20} color="#d0c4b8" />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.logoutBtn}>
          <Icon name="log-out" size={20} color="#ff6b6b" />
          <Text style={styles.logoutText}>Выход</Text>
        </TouchableOpacity>

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
    paddingTop: 24,
    alignItems: "center",
    marginBottom: 32,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#8b5e34",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2c1d14",
  },

  role: {
    fontSize: 14,
    color: "#7b7169",
    marginTop: 4,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginBottom: 32,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0d5ca",
  },

  stat: {
    alignItems: "center",
  },

  statValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#8b5e34",
    marginBottom: 4,
  },

  statLabel: {
    fontSize: 12,
    color: "#7b7169",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2c1d14",
    marginHorizontal: 24,
    marginBottom: 16,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
  },

  menuIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#faf7f4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  menuText: {
    flex: 1,
  },

  menuTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c1d14",
    marginBottom: 2,
  },

  menuDesc: {
    fontSize: 12,
    color: "#7b7169",
  },

  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ffdddd",
    backgroundColor: "#fff5f5",
  },

  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ff6b6b",
    marginLeft: 8,
  },
});
