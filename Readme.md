# Finger Trainer

«Finger Traner» — сервис для тренировки ваших способностей десятипальцевого способа печати.

### Основная информация

- **[Ссылка на деплой](https://nikitasech.github.io/finger-trainer)**
- У вас должен быть установлен **[Node.js](https://nodejs.org) v20.11.1**
- Используется **[Vite.js](https://vitejs.dev)**
- Применена архитектурная методология **[Feature-Sliced Design (FSD)](https://feature-sliced.design/)**
- Сверстано с использованием **[БЭМ](bem.info)**

### Структура проекта

- `public` - директория для размещения статичных ресурсов (шрифты, стили, изображения и так далее)
- `src` - в директории размещаются исходники проекта: компоненты, файлы с тестами, модули и так далее
- `dist` - директория для готовой и оптимизированной сборки. Появляется при запуске сценария [build](#Сборка production версии проекта)

### Сценарии

#### Установка

```bash
git clone git@github.com:nikitasech/finger-traner
npm i
```

#### Запуск проекта в режиме разработки

```bash
npm run dev
```

После запуска, приложение доступно для просмотра в браузере по адресу [http://localhost:5173](http://localhost:5173).

#### Сборка production версии проекта

```bash
npm run build
```

В процессе сборки приложения, код приложения оптимизируется и минимизируется, для достижения наилучшей производительности. После сборки создается папка `dist` и код из неё полностью готов к публикации.

#### Запуск локального сервера с production версией

```bash
npm run preview
```

Команда собирает production версию проекта и запускает локальный сервер с ней. После запуска, приложение доступно в браузере по адресу [http://localhost:4173](http://localhost:4173).

#### Проверка линтерами

```bash
npm run lint
```

Запуск проверки проекта статическими анализатороми кода **ESLint** и **StyleLint** в папке `src`.

#### Автоматическое исправление ошибок линтера

```bash
npm run lint:fix
```

Автоматически исправляет ошибки **ESLint** и **StyleLint** в папке `src`. При отсутствии возможности исправить ошибки автоматически выведет остаток ошибок в консоль для ручного исправления.

### Благодарности
За крутой дизайн огромное спасибо **[Антону Плохоцкому](https://www.behance.net/a_579_p)**
