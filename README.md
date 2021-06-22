

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
  - [ ] Login with google / facebook

- [x] Logged mode
  - [x] Upload your memes to the community
  - [x] Check the performance average of your memes
  - [x] See all your liked memes
  - [ ] Share memes to whatsapp or another app

---

## 🎨 Layout

### 📱 Mobile

<p align="center">
	<img src="https://i.ibb.co/FVfk5YC/Screenshot-1624318245.png" alt="Screenshot-1624318245" border="0" width="18%" heigth="18%">
        <img src="https://i.ibb.co/ZXCtLv8/Screenshot-1624368848.png" alt="Screenshot-1624368848" border="0" width="18%" heigth="18%">
	<img src="https://i.ibb.co/9TL49RK/Screenshot-1624318253.png" alt="Screenshot-1624318253" border="0" width="18%" heigth="18%">
	<img src="https://i.ibb.co/rFgBG2f/Screenshot-1624318241.png" alt="Screenshot-1624318241" border="0" width="18%" heigth="18%">
	<img src="https://i.ibb.co/Wp6hdNW/Screenshot-1624318249.png" alt="Screenshot-1624318249" border="0" width="18%" heigth="18%">
</p>


### 🖥️ Web

<p align="center">
  	<img src="https://i.ibb.co/JR9prqc/DKPexe1.jpg" alt="DKPexe1" border="0" width="45%" height="45%">
	<img src="https://i.ibb.co/zSzQCV3/DKPexe2.jpg" alt="DKPexe2" border="0" width="45%" height="45%">
	<img src="https://i.ibb.co/XYVptqY/DKPexe3.jpg" alt="DKPexe3" border="0" width="45%" height="45%">
	<!-- <img src="https://i.ibb.co/FVkj3jb/DKPexe4.jpg" alt="DKPexe4" border="0" width="45%" height="45%"> -->
	<img src="https://i.ibb.co/GW4S6fc/DKPexe5.jpg" alt="DKPexe5" border="0" width="45%" height="45%">
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

#### 🧭 Running web/mobile aplication

```bash

# Go to frontend/mobile folder
$ cd frontend  
or
$ cd mobile

# Install the dependencies
$ npm install

# Run the web aplication
$ npm run start                   (web)


# Run the mobile aplication
$ npx react-native run-android (android)
$ npx react-native run-ios (ios)

(to run the mobile aplication you must have installed an android or ios virtual machine)

```


---

## 🛠 Technologies

The following tools were used in the construction of the project:

#### **Website** ([React](https://reactjs.org/))

-   **[react-router-dom](https://www.npmjs.com/package/react-router-domreact-icons)**
-   **[react-icons](https://www.npmjs.com/package/react-icons)**
-   **[react-loading](https://www.npmjs.com/package/react-loading)**
-   **[react-tinder-card](https://www.npmjs.com/package/react-tinder-card)**
-   **[react-dropzone](https://github.com/react-dropzone/react-dropzone)**


#### **Server** ([NodeJS](https://nodejs.org/en/))

-   **[express](https://www.npmjs.com/package/express)**
-   **[aws-sdk](https://www.npmjs.com/package/aws-sdk)**
-   **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**
-   **[multer](https://www.npmjs.com/package/multer)**
-   **[multer-s3](https://www.npmjs.com/package/multer-s3)**
-   **[crypto](https://www.npmjs.com/package/crypto)**
-   **[mongoose](https://www.npmjs.com/package/mongoose)**
-   **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**
-   **[dotenv](https://www.npmjs.com/package/dotenv)**


#### **Mobile** ([React Native](http://www.reactnative.com/))

-   **[react-navigation](https://www.npmjs.com/package/react-navigation)**
-   **[react-native-deck-swiper](https://www.npmjs.com/package/react-native-deck-swiper)**
-   **[react-native-document-picker](https://www.npmjs.com/package/react-native-document-picker)**
-   **[react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler)**
-   **[react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context)**
-   **[react-native-video](https://www.npmjs.com/package/react-native-video)**
-   **[react-native-async-storage](https://www.npmjs.com/package/react-native-async-storag)**

---

## 📝 License

This project is under license [MIT](./LICENSE.md).

---

Made with ❤️ by Igor Ulian

---

## README Version

[Português 🇧🇷](./README-pt.md) [English 🇺🇸](./README.md)
