
# Todo List App

<br />
<br />
<div align="center">
  <image src="https://user-images.githubusercontent.com/26945693/217892917-a3e50043-5734-4d12-ae8d-10ea59576f8b.png" />
</div>


## Table of Contents

- [Description](#description)
- [Preview](#preview)
- [Dependencies](#dependencies)
- [Folder Structure](#folder-structure)
- [Thinks i must finish](#things-i-must-finish)

## Description

TodoList it's a app created with React Native for use create your dailys tasks.
With TodoList you can

- Create multiples Tasks
- Delete multiple tasks
- Finish multiple tasks

Todo list has created like a challenge for Ignite by Rocketseat. The Rockeseat has gived the prototype created inside Figma

<br />

## Preview

<div align="center">
  <image src="https://user-images.githubusercontent.com/26945693/209747778-bd8ed590-930f-4702-b882-3de7e30cdf08.png" width="250" />
  <image src="https://user-images.githubusercontent.com/26945693/209747824-b423ce6c-b0ce-4ccd-9b19-15b5e8e450c5.png" width="250" />
</div>

## Dependencies

| Dependency | Version |
|--|--|
|@expo-google-fonts/inter|^0.2.2|
|@expo|~47.0.8|
|expo-font|~11.0.1|
|expo-status-bar|~1.4.2|
|react|18.1.0|
|react-dom|18.1.0|
|react-native|0.70.5|
|react-native-svg|13.4.0|
|react-native-web|~0.18.9|
|expo-splash-screen|~0.17.5|
|expo-sqlite|~11.0.0|

## Dev Dependencies

| Dependency | Version |
|--|--|
|@babel/core|^7.12.9|
|@types/react|~18.0.14|
|@types/react-native|~0.70.6|
|typescript|^4.6.3|

## Folder Structure

```
📦src  
 ┣ 📂assets  
 ┃ ┗ 📜logo.svg  
 ┣ 📂screens  
 ┃ ┣ 📂Home  
 ┃ ┃ ┣ 📂components  
 ┃ ┃ ┃ ┣ 📂EmptyTaskList  
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts  
 ┃ ┃ ┃ ┣ 📂Task  
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts  
 ┃ ┃ ┃ ┗ 📂TasksQuantity  
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┃ ┃ ┗ 📜styles.ts  
 ┃ ┃ ┣ 📂interfaces  
 ┃ ┃ ┃ ┣ 📜index.ts  
 ┃ ┃ ┃ ┗ 📜task.ts  
 ┃ ┃ ┣ 📜index.tsx  
 ┃ ┃ ┗ 📜styles.ts  
 ┃ ┗ 📜index.ts  
 ┗ 📂shared  
 ┃ ┗ 📂components  
 ┃ ┃ ┣ 📂Clipboard  
 ┃ ┃ ┃ ┗ 📜index.tsx  
 ┃ ┃ ┣ 📂Logo  
 ┃ ┃ ┃ ┗ 📜index.tsx  
 ┃ ┃ ┗ 📜index.ts
```

## Things i must finish

 1. Integration with Api
 2. Unit Tests
 3. E2E Tests
