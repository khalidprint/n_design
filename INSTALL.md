# Установка и запуск N-DESIGN приложения

## 📋 Требования

- Node.js версия 16 или выше
- npm или yarn
- Expo CLI (`npm install -g expo-cli`)
- Приложение Expo Go на вашем телефоне

## 🚀 Быстрая установка

### 1. Клонируйте репозиторий

```bash
git clone https://github.com/khalidprint/n_design.git
cd n_design
```

### 2. Установите зависимости

```bash
npm install
```

Или с yarn:

```bash
yarn install
```

### 3. Запустите приложение

```bash
npx expo start
```

Отсканируйте QR-код в приложении **Expo Go** на вашем мобильном телефоне.

## 📱 Запуск на конкретной платформе

### iOS (только на macOS)

```bash
npm run ios
```

### Android

```bash
npm run android
```

### Web

```bash
npm run web
```

## 🔧 Решение проблем

### Проблема: "Cannot find module"

**Решение:**
```bash
rm -rf node_modules
npm install
```

### Проблема: Порт 19000 занят

**Решение:**
```bash
npx expo start --clear
```

### Проблема: Иконки не отображаются

**Решение:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

## 📦 Структура проекта

```
n-design/
├── App.js                    # Главный файл приложения
├── screens/                  # Все экраны приложения
│   ├── HomeScreen.js        # Главный экран
│   ├── ProjectsScreen.js    # Экран проектов
│   ├── ProjectDetailScreen.js # Детали проекта
│   ├── ServicesScreen.js    # Услуги
│   └── ProfileScreen.js     # Профиль
├── constants/               # Константы (цвета, размеры, иконки)
├── data/                    # Данные (проекты, услуги и т.д.)
├── utils/                   # Вспомогательные функции
├── config/                  # Конфигурация
├── package.json             # Зависимости
├── app.json                 # Конфигурация Expo
└── README.md               # Документация
```

## 🎨 Кастомизация

### Изменение цветов

Отредактируйте `constants/colors.js`:

```javascript
export const COLORS = {
  primary: '#8b5e34',  // Измените на нужный цвет
  dark: '#2c1d14',
  // ...
};
```

### Добавление проектов

Отредактируйте `data/projects.js`:

```javascript
export const PROJECTS_DATA = [
  // Добавьте новый проект здесь
];
```

### Изменение услуг

Отредактируйте `data/services.js`.

## 📚 Дополнительные ресурсы

- [React Navigation документация](https://reactnavigation.org/)
- [Expo документация](https://docs.expo.dev/)
- [React Native документация](https://reactnative.dev/)
- [Feather Icons](https://feathericons.com/)

## 💡 Советы

1. **Используйте Expo Go** для быстрого тестирования на устройстве
2. **Отключите отладку** перед сборкой для продакшена
3. **Оптимизируйте изображения** для мобильных устройств
4. **Тестируйте** на разных размерах экранов

## 🐛 Сообщение об ошибках

Если вы найдете баг, создайте [Issue](https://github.com/khalidprint/n_design/issues) в репозитории.

## 📄 Лицензия

MIT

## 👨‍💻 Поддержка

Для вопросов и предложений свяжитесь с командой разработки.

---

**Готово к запуску! 🎉**
