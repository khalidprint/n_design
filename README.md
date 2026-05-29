# N-DESIGN - Interior Design App

## 📱 Приложение для дизайна и ремонта интерьеров

Современное мобильное приложение на React Native с полной навигацией и красивым UI для студии дизайна интерьеров.

## 🚀 Быстрый старт

### Требования
- Node.js 16+
- npm или yarn
- Expo CLI (`npm install -g expo-cli`)

### Установка

```bash
# Установите зависимости
npm install

# Запустите приложение
npx expo start
```

### Запуск на устройстве

```bash
# iOS (macOS only)
npm run ios

# Android
npm run android

# Web
npm run web
```

## 📁 Структура проекта

```
n-design-app/
├── App.js                          # Главный файл с навигацией
├── screens/
│   ├── HomeScreen.js              # Главный экран
│   ├── ProjectsScreen.js          # Экран со всеми проектами
│   ├── ProjectDetailScreen.js     # Экран деталей проекта
│   ├── ServicesScreen.js          # Экран услуг
│   └── ProfileScreen.js           # Профиль пользователя
├── package.json
├── app.json
└── README.md
```

## 🎨 Функции

### Главный экран (Home)
- Красивый hero раздел
- Карточки услуг
- Горизонтальный скролл последних проектов
- Секция преимуществ

### Экран проектов (Projects)
- Полный список всех проектов
- Фильтрация по категориям
- Подробная информация о каждом проекте

### Экран услуг (Services)
- Описание всех услуг
- Список включаемых возможностей
- Call-to-Action для консультации

### Профиль (Profile)
- Информация о дизайнере
- Статистика проектов
- Меню настроек

### Детали проекта (ProjectDetail)
- Полная информация о проекте
- Галерея изображений
- Описание и технические характеристики
- Контакты для консультации

## 🧭 Навигация

Приложение использует:
- **Bottom Tab Navigator** - для основной навигации
- **Stack Navigator** - для навигации внутри секций (например, от списка проектов к деталям)

## 📦 Зависимости

```json
{
  "react-native": "0.73.2",
  "expo": "^50.0.0",
  "@react-navigation/native": "^6.1.9",
  "@react-navigation/bottom-tabs": "^6.5.11",
  "@react-navigation/native-stack": "^6.9.17",
  "react-native-vector-icons": "^10.0.0"
}
```

## 🎨 Color Palette

- **Primary Brown**: `#8b5e34`
- **Dark Text**: `#2c1d14`
- **Light Background**: `#F7F5F2`
- **Muted Gray**: `#7b7169`

## 📝 Примеры использования

### Навигация между экранами

```javascript
// Переход на экран услуг
navigation.navigate("Services");

// Переход на детали проекта с параметрами
navigation.navigate("ProjectDetail", { project: item });

// Возвращение на предыдущий экран
navigation.goBack();
```

## 🔧 Настройка

Для изменения цветов, шрифтов и других параметров отредактируйте файлы стилей в каждом экране.

## 📱 Поддерживаемые платформы

- ✅ iOS
- ✅ Android
- ✅ Web

## 📄 Лицензия

MIT

## 👨‍💻 Автор

N-DESIGN Team
