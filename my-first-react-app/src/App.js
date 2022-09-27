import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home.js";
import Contact from "./component/Contact.js";
import Header from "./component/Header.js";
import PrivateRoutes from "./Utils/PrivateRoutes";

// function jumlahVolumeKubus(a, b) {
//   return (a*a*a)+(b*b*b);
// }
//   var a = parseFloat(prompt('Masukkan Nilai A : '));
//   var b = parseFloat(prompt('Masukkan Nilai B : '));
//   var hasil = jumlahVolumeKubus(a, b);
//   alert(hasil);


function parameterDanArgument() {
  var hasil1 = 0;
  for (var i = 0; i < arguments.length; i++){ 
    hasil1 *= arguments[i];
  }
  return hasil1;
}

var ndktw = parameterDanArgument(2, 3, 4, 5);
console.log(ndktw);

function App() {
  // const [judul, setTitle] = useState("Nabil Muhyiddin");
  // const instagram = "https//www.instagram.com/hmeiugm/";

  // const [data, setData] = useState([
  //   { NIM: 462091, ident: 'mahasiswa 1', alamat: 'tuban' },
  //   { NIM: 462093, ident: 'mahasiswa 2', alamat: 'solo' },
  //   { NIM: 462095, ident: 'mahasiswa 3', alamat: 'jogja' },
  //   { NIM: 462097, ident: 'mahasiswa 4', alamat: 'bantul' },
  //   { NIM: 462099, ident: 'mahasiswa 5', alamat: 'kulonprogo' },
  // ]);

  const click_me = (name) => {
    console.log('Supp : ' + name);
  }

  useEffect(() => {
    console.log('Use Effect Running')
  });
  
  return (
    <div>

         {/* <p>{judul}</p>
      <a href={instagram}>Cek Instagramku</a> */}

      <buttom onClick={() => click_me('Hahahha')}>Click Me</buttom>

      {/* <ul>
        {data.map((data) => (
          <li key={data.NIM}> {data.ident} - {data.NIM} - {data.alamat} </li>
        ))}
      </ul> */}

       <Router>
        <Routes>
          <Route element ={<PrivateRoutes/>}>
            <Route element = {<Home/>} path = "Home" exact/>
            <Route element={<Contact />} path="Contact" exact />
          </Route>
          
            {/* <Route exact path="/Home" element = {<Home/>}>
          </Route>
          
          <Route exact path="/Contact" element = {<Contact/>}>
          </Route> */}

            <Route exact path="/Header" element={<Header />}>
          </Route>

         </Routes>
       </Router> 

    </div>
  );
}

export default App;
