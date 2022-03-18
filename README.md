# Instruksi

Untuk ngerjain challenge 8 ini caranya gampang abiez

1. Bikin dokumentasi pake POSTMAN, udah tau lah caranya gimana, gampang
2. Bikin dokumentasi pake Swagger
   a. `npm i swagger-ui-express swagger-jsdoc`
   b. Ikuti instruksi yang udah gw jelasin soal swagger
   c. Lanjutin bikin comment @swagger di file server/routes/v1/player.routes.js
   d. selesai
3. install react pada root folder alias di dalem binar-cahllenge-chapter-8. Cara install react itu ada beberapa cara, kalau pake npx bisa pake command `npx create-react-app <nama folder>` atau kalau pake yarn bisa `yarn create react-app <nama folder>`
4. Lanjut belajar react dulu

## React

1. Dynamic Value
2. Component (memecah belah menjadi fragmen fragmen html yang lebih kecil, biasa digunakan untuk grouping atau juga membuat sesuatu yang bisa dipakai berulang (reusable component))
   a. cara bikin komponen gak susah, tinggal bikin sebuah function yang punya nama, dimana nama function tadi haruslah Diawali dengan Huruf Besar contoh

   ```js
   // 1.
   const ButtonGanteng = () => {
     return (
       <>
         <button>Button Ganteng</button>
       </>
     );
   };

   // 2.
   const ButtonGanteng = () => <button>Button Ganteng</button>;

   // 3.
   function ButtonGanteng() {
     return (
       <>
         <button>Button Ganteng</button>
       </>
     );
   }
   ```

3. Props (untuk lempar lemparan data antar komponen)

   ```js
   // 1.
   const ButtonGanteng = (props) => {
     // importing
     // 1.
     const namaButton = props.namaButton;
     // 2.
     const { namaButton } = props;

     // 3. props yang ada di parameter, langsung diubah dari
     // (props) jadi ({ namaButton })

     return (
       <>
         <button>{namaButton}</button>
         <button>{props.namaButton}</button>
       </>
     );
   };

   function App() {
     return (
       <div>
         <ButtonGanteng namaButton='Ini Nama Buttonnya' />
       </div>
     );
   }
   ```

   jikalau ingin memindahkan component yang dibuat tadi ke file berbeda, jangan lupa untuk di export, contohnya

   ```js

   export const ButtonGanteng = (props) => {
     // importing
     // 1.
     const namaButton = props.namaButton;
     // 2.
     const { namaButton } = props;

     // 3. props yang ada di parameter, langsung diubah dari
     // (props) jadi ({ namaButton })

     return (
       <>
         <button>{namaButton}</button>
         <button>{props.namaButton}</button>
       </>
     );
   };

   atau

   const ButtonGanteng = (props) => {
     // importing
     // 1.
     const namaButton = props.namaButton;
     // 2.
     const { namaButton } = props;

     // 3. props yang ada di parameter, langsung diubah dari
     // (props) jadi ({ namaButton })

     return (
       <>
         <button>{namaButton}</button>
         <button>{props.namaButton}</button>
       </>
     );
   };

   export default
   ```

4. Untuk membuat halaman di React (Pages), kita harus implementasi yang namanya Routing, kenapa harus demikian, kalau misalkan dulu pas challenge sebelumnya, kita hanya sesimple membuat file ejs baru setiap kali kita membuat halaman, dan yang melakukan proses pengambilan halaman itu sendiri itu terjadi di server express (req, res) => res.render('halaman'), untuk penjelasan lebih lanjut kamu bisa langsung di recording hari jum'at, Di react, yang melakukan res.render itu dari bagian package yang perlu kita install dengan nama `react-router-dom` react router dom akan membantu sedemikian rupa ketika ada request GET masuk ke localhost:PORTREACT/ROUTENYAAPA akan memberikan page yang sesuai dimasukan kedalam Route

```js
  ...
  <Routes>
    <Route path="/" element={ <Home />}>
    <Route path="/ican" element={ <Ganteng />}>
    <Route path="/ivan" element={ <Gunawan />}>
  <Routes>
  ...
```

sebelumnya kita harus tau cara penggunaan route dari react-router-dom yang dimana kamu bisa baca lengkapnya di: https://reactrouter.com/docs/en/v6/getting-started/overview

langkah pertama yang harus kamu lakukan adalah install si packagenya dulu
`npm i react-router-dom` selanjutnya kamu harus Bungkus si <App> atau component yang ingin kamu pakai si Routesnya, tapi yaudah ikutin kaya gw aja

```js
// index.js di react
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// biasanya BrowserRouter itu dinamain ulang dengan Router

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
```

setelah itu kamu bisa langsung setup si Routesnya, boleh langsung di file index.js tapi harus didalem si <Router> atau <BrowserRouter> tadi, kalau nggak, si Routes gak bakal bisa dipake, setup routes itu kaya gimana?

```js
  <Routes>
    <Route path="/" element={ <Home />}>
    <Route path="/ican" element={ <Ganteng />}>
    <Route path="/ivan" element={ <Gunawan />}>
    <Route path="/namaPathnya" element={ <namaPagenya />}>
  <Routes>
```

Terus kalau misal mau bikin SPA gimana caranya bang? Simple aja dengan mengganti `<a href="/">arah</a>` dengan `<Link to="/">arah</Link>` dimana Link diimport dari react-router-dom `import {Link} from 'react-router-dom`
