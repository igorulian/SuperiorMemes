

<h1 align="center">
     <a href="#" alt="site do ecoleta"> 🦆 Quack Memes </a>
</h1>

<h3 align="center">
    🙂 App for sharing funny photos, videos and gifs.
</h3>

<h4 align="center">
	🚧  Work in progress... 🚧
</h4>

## 💻 About the project 

🦆 Quack Memes - An app to view and share fun videos, photos and gifs. In it you can rate the ones you liked the most and still have access to feedback from your own memes. 

---

## ⚙️ Features

- [x] Guest mode
  - [x] User cannot upload memes util login
  - [x] You can rate the memes

- [x] Logged mode
  - [x] User can share your memes with the community
  - [x] User can see the performance average of your memes
  - [x] User can see all your liked memes

---

## 🎨 Layout

### Mobile

<p align="center">
  <img alt="Mobile Image" />                                  
</p>

### Web

<p align="center">
  <img alt="Web Image "/>
</p>

---

## 🚀 How to run the project

This project is divided into three parts:
1. Backend 
2. Frontend
3. Mobile 

💡 Both Frontend and Mobile need the Backend to be running in order to function. 

### 🧪 Requirement 

Before starting, you will need to have the following tools installed on your machine: 
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

In addition, it will be necessary to fill in the fields of the .env file, for that you can find
the '.env-example' file in the server folder, which contains the example of the variables, as in the text below. 
After filling in all the fields, rename the file from '.env-example' to '.env'.

```bash

MONGO_CONNECT_LINK=    

AWS_BUCKET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=

```


#### 🎲 Running Backend (server)

```bash

# Clone this repository
$ git clone https://github.com/igorulian/quack-memes.git

# Go to backend folder
$ cd server

# Install the dependencies 
$ npm install

# Run the server.js file
$ node server.js

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Go to frontend folder
$ cd frontend

# Install the dependencies
$ npm install

# Run the aplication
$ npm run start

```

---

## 🛠 Technologies

The following tools were used in the construction of the project:

#### **Website** ([React](https://reactjs.org/))

-   **[react-router-dom](https://github.com/igorulian)**
-   **[react-icons](https://github.com/igorulian)**
-   **[react-loading](https://github.com/igorulian)**
-   **[react-tinder-card](https://github.com/igorulian)**
-   **[styled-components](https://github.com/igorulian)**
-   **[react-dropzone](https://github.com/react-dropzone/react-dropzone)**
-   **[react-scripts](https://github.com/igorulian)**


#### **Server** ([NodeJS](https://nodejs.org/en/))

-   **[express](https://github.com/igorulian)**
-   **[aws-sdk](https://github.com/igorulian)**
-   **[bcryptjs](https://github.com/igorulian)**
-   **[multer](https://github.com/igorulian)**
-   **[multer-s3](https://github.com/igorulian)**
-   **[crypto](https://github.com/igorulian)**
-   **[mongoose](https://github.com/igorulian)**
-   **[mongoose-paginate](https://github.com/igorulian)**
-   **[jsonwebtoken](https://github.com/igorulian)**
-   **[dotenv](https://github.com/igorulian)**


#### **Mobile** ([React Native](http://www.reactnative.com/))

-   **[react-navigation](https://github.com/igorulian)**
-   **[react-native-deck-swiper](https://github.com/igorulian)**
-   **[react-native-document-picker](https://github.com/igorulian)**
-   **[react-native-gesture-handler](https://github.com/igorulian)**
-   **[react-native-safe-area-context](https://github.com/axios/axios)**
-   **[react-native-video](https://github.com/igorulian)**
-   **[react-native-async-storage](https://github.com/igorulian)**

---

## 📝 License

This project is under license [MIT](./LICENSE.md).

---

Made with ❤️ by Igor Ulian

---

## README Version

[Português 🇧🇷](./README-pt.md) [English 🇺🇸](./README.md)
