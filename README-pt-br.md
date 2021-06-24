

<h1 align="center">
     <a href="#" alt="site do ecoleta"> 🦆 Quack Memes (🇧🇷 pt-br) </a>
</h1>

<h3 align="center">
      🙂 Aplicativo para compartilhar fotos, videos e gifs engraçados 
</h3>

<h4 align="center">
	🚧  Em construção... 🚧
</h4>

## 💻 Sobre o projeto
 
 🦆 Um aplicativo para compartilhar fotos, videos e gifs engraçados. Nele você pode avaliar os que mais gostou e ainda ter acesso ao feedback de seus próprios memes. 
  
---

## ⚙️ Features

- [x] Modo convidado
  - [x] Usuário não pode enviar seus prórprios meme até estar logado
  - [x] Você pode avaliar os memes
  - [ ] Logar com google / facebook

- [x] Modo logado
  - [x] Usuário pode enviar seus prórprios memes
  - [x] Ver a performace média de seus memes
  - [x] Ver todos os memes que curtiu
  - [ ] Compartilhar os memes para outros aplicavos, como whatsapp

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

## 🚀 Como executar o projeto

Esse projeto é dividido em três partes:
1. Backend 
2. Frontend
3. Mobile 

💡 Ambos frontend e mobile precisam que o backend esteja rodando para funcionar corretamente.

### 🧪 Requerimentos 

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina: 
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

Além disso, será necessário preencher os campos do arquivo .env, para isso você poderá encontrar
o arquivo '.env-example' na pasta do servidor, que contém o exemplo das variáveis, conforme o texto abaixo.
Após preencher todos os campos, renomeie o arquivo de '.env-example' para '.env'. 

```bash

MONGO_CONNECT_LINK=    

AWS_BUCKET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=

```


#### 🎲 Rodando Backend (servidor)

```bash

# Clone esse repositório
$ git clone https://github.com/igorulian/quack-memes.git

# Vá para a pasta do backend
$ cd backend

# Instale as dependências
$ npm install

# Rode o arquivo server.js
$ node server.js

```

#### 🧭 Rodando aplicação web/mobile 

```bash

# Vá para a pasta do frontend/mobile
$ cd frontend  
or
$ cd mobile

# Instale as dependências
$ npm install

# Rode a aplicação web
$ npm run start                   (web)


# Rode a aplicação mobile
$ npx react-native run-android (android)
$ npx react-native run-ios (ios)

#(para rodar a aplicação mobile você precisará ter instalado uma máquina virtual android ou ios)

```


---

## 🛠 Tecnologias

As seguintes ferramentas foram utilizadas na construção do projeto: 

#### **Website** ([React](https://reactjs.org/))

-   **[react-router-dom](https://www.npmjs.com/package/react-router-domreact-icons)**
-   **[react-icons](https://www.npmjs.com/package/react-icons)**
-   **[react-loading](https://www.npmjs.com/package/react-loading)**
-   **[react-tinder-card](https://www.npmjs.com/package/react-tinder-card)**
-   **[react-dropzone](https://github.com/react-dropzone/react-dropzone)**


#### **Backend** ([NodeJS](https://nodejs.org/en/))

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

## 📝 Licença 

Este projeto está sob licença [MIT](./LICENSE.md).

---

Feito com ❤️ por Igor Ulian

---

## Versão do README

[Português 🇧🇷](./README-pt.md)             [English 🇺🇸](./README.md)
