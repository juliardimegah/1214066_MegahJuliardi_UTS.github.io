# Read me untuk 1214066_MegahJuliardi_UTS.github.io

Link untuk ke github pagenya https://juliardimegah.github.io/1214066_MegahJuliardi_UTS.github.io/

1. Membuat tampilan frontend menggunakan tailwind component
  Berikut tampilan dari front end yang telah saya buat
  ![image](https://user-images.githubusercontent.com/98504755/228722631-9852c16b-1e45-4b62-b0ff-c00ed424184a.png)

  Berikut code yang digunakan untuk membuat tampilan tersebut
  ```
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ed3cf">
    <meta name="msapplication-TileColor" content="#0ed3cf">
    <meta name="theme-color" content="#0ed3cf">

    <meta property="og:image" content="http://tailwindcomponents.com/storage/1056/temp91364.png?v=2023-03-30 02:14:43" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="640" />
    <meta property="og:image:type" content="image/png" />

    <meta property="og:url" content="https://tailwindcomponents.com/component/responsive-table-1/landing" />
    <meta property="og:title" content="Responsive Table by Miracool" />
    <meta property="og:description" content="A minimalist table that responds to screen sizing. It has pagination design with also a search filter input" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@TwComponents" />
    <meta name="twitter:title" content="Responsive Table by Miracool" />
    <meta name="twitter:description" content="A minimalist table that responds to screen sizing. It has pagination design with also a search filter input" />
    <meta name="twitter:image" content="http://tailwindcomponents.com/storage/1056/temp91364.png?v=2023-03-30 02:14:43" />

    <title>Indexnya UTS nih</title>

            <link href="https://unpkg.com/tailwindcss@1.2.0/dist/tailwind.min.css" rel="stylesheet">
    </head>
<body class="bg-gray-200">
    <div class="bg-white pb-4 px-4 rounded-md w-full">
      <div class="flex justify-between w-full pt-6 ">
        <p class="ml-3"><a href="./daftar.html" alt ="" >Daftar disini</a></p>
        <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4">
        <circle cx="2.19796" cy="1.80139" r="1.38611" fill="#222222"/>
        <circle cx="11.9013" cy="1.80115" r="1.38611" fill="#222222"/>
        <circle cx="7.04991" cy="1.80115" r="1.38611" fill="#222222"/>
        </g>
        </svg>

      </div>
  <div class="w-full flex justify-end px-2 mt-2">
      </div>
    <div class="overflow-x-auto mt-6">

      <table class="table-auto border-collapse w-full">
        <thead>
          <tr class="rounded-lg text-sm font-medium text-gray-700 text-left" style="font-size: 0.9674rem">
            <th class="px-4 py-2 bg-gray-200 " style="background-color:#f8f8f8">Data</th>
          </tr>
        </thead>
        <tbody id="konten" class="text-sm font-normal text-gray-700">


        </tbody>
      </div>
    </div>

<style>
  
thead tr th:first-child { border-top-left-radius: 10px; border-bottom-left-radius: 10px;}
thead tr th:last-child { border-top-right-radius: 10px; border-bottom-right-radius: 10px;}

tbody tr td:first-child { border-top-left-radius: 5px; border-bottom-left-radius: 0px;}
tbody tr td:last-child { border-top-right-radius: 5px; border-bottom-right-radius: 0px;}


</style>
<script src="./test.js"></script>
</body>
</html>
  ```
  
 2. Buatlah JS untuk menghubungkan frontend
  Berikut adalah code js yang saya buat
 ```
 var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
 
hasil=""
txt=""
txt1=""

fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
    .then(response => response.text())
    .then(result => tampilkan(result))
    .catch(error => console.log('error', error));

function tampilkan(result){
    console.log(result);
    hasil=JSON.parse(result);
    txt=hasil.forEach(isitabel);
}

function isitabel(value){
    txt= txt+trnyatabel.replace("#TEXT#","Name: "+value.name);
    txt= txt+trnyatabel.replace("#TEXT#","Email: "+value.email+"");
    txt= txt+trnyatabel.replace("#TEXT#","Website: "+value.website+"");
    txt= txt+trnyatabel.replace("#TEXT#","Phone: "+value.phone+"");
    txt= txt+trnyatabel.replace("#TEXT#","Username: "+value.username+"");
  document.getElementById("konten").innerHTML=txt;
}
trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `
 ```
 
 3. Gunakan public API dan kemudian test di postman
   Berikut link Public API yang saya gunakan https://jsonplaceholder.typicode.com/users
 
   Berikut hasil dari postman API
  ![image](https://user-images.githubusercontent.com/98504755/228723828-6ef84fd0-c945-4bf2-a535-083b52911e06.png)

  Berikut tampilan dari frontend yang memuat datanya
  ![image](https://user-images.githubusercontent.com/98504755/228723920-586a1be2-23e7-4aaa-b78e-6916ba882637.png)

  Berikut datanya apabila dilihat di console
  ![image](https://user-images.githubusercontent.com/98504755/228723991-5f2b6176-01ae-4d1d-a79a-b269554ef1c7.png)

4. Test dengan requestcatcher.com
    Berikut adalah tampilan dari request catchernya
    ![image](https://user-images.githubusercontent.com/98504755/228725279-bb8950a7-4eef-4ed9-8b46-772e2059648d.png)
    
5. Endpoint di Pipedream
    Berikut tampilan di Pipedream
    ![image](https://user-images.githubusercontent.com/98504755/228725516-80e2bdfb-f971-493d-891e-13ce2291089e.png)

6. Membuat fungsi PostSignUp()
    Berikut Code yang dibuat
    ```
   function PostSignUp(username,email,password){
    var myHeaders = new Headers();
    myHeaders.append("Login", "jasmine");
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
    "username": username,
    "email": email,
    "password": password,
    });
  
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
  
    fetch("https://eoeon353ims2stx.m.pipedream.net", requestOptions)
    .then(response => response.text())
    .then(result => GetResponse(result))
    .catch(error => console.log('error', error));
  }
  
  function GetResponse(result){
    document.getElementById("formsignup").innerHTML = result;
}
    ```
    
    Berikut tampilan frontendnya
    ![image](https://user-images.githubusercontent.com/98504755/228727130-6e82c1a4-f3cf-461f-904d-ee32d851f571.png)

    Berikut adalah source code dari frontendnya
    ```
    <!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ed3cf">
    <meta name="msapplication-TileColor" content="#0ed3cf">
    <meta name="theme-color" content="#0ed3cf">

    <meta property="og:image" content="http://tailwindcomponents.com/storage/9218/conversions/temp67527-ogimage.jpg?v=2023-03-30 01:19:02" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="640" />
    <meta property="og:image:type" content="image/png" />

    <meta property="og:url" content="https://tailwindcomponents.com/component/admin-signup-form/landing" />
    <meta property="og:title" content="Tailwind CSS Admin Signup Form by Speedwares" />
    <meta property="og:description" content="Signup form with image made using Tailwind CSS" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@TwComponents" />
    <meta name="twitter:title" content="Tailwind CSS Admin Signup Form by Speedwares" />
    <meta name="twitter:description" content="Signup form with image made using Tailwind CSS" />
    <meta name="twitter:image" content="http://tailwindcomponents.com/storage/9218/conversions/temp67527-ogimage.jpg?v=2023-03-30 01:19:02" />

    <title>UTS DULU</title>

            <script src="https://cdn.tailwindcss.com"></script>
    </head>
<body class="bg-gray-200">
    <div class="bg-white relative lg:py-20">
  <div class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row">
    <div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
      <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
        <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
          <img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" class="btn-"/>
        </div>
      </div>
      <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
        <div class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10">
          <p class="w-full text-4xl font-medium text-center leading-snug font-serif">Sign up for an account</p>
          <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Username</p>
              <input id="username" placeholder="exampleuser" type="username" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
              <input id="email" placeholder="123@ex.com" type="email" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Password</p>
              <input id ="password"placeholder="Password" type="password" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>

            <button onclick="PushButton()" id="tombol" class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">Register</button>

          </div>
        </div>
        <svg viewbox="0 0 91 91" class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
            fill-current"><g stroke="none" strokewidth="1" fillrule="evenodd"><g fillrule="nonzero"><g><g><circle
            cx="3.261" cy="3.445" r="2.72"/><circle cx="15.296" cy="3.445" r="2.719"/><circle cx="27.333" cy="3.445"
            r="2.72"/><circle cx="39.369" cy="3.445" r="2.72"/><circle cx="51.405" cy="3.445" r="2.72"/><circle cx="63.441"
            cy="3.445" r="2.72"/><circle cx="75.479" cy="3.445" r="2.72"/><circle cx="87.514" cy="3.445" r="2.719"/></g><g
            transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72"/><circle cx="15.296" cy="3.525"
            r="2.719"/><circle cx="27.333" cy="3.525" r="2.72"/><circle cx="39.369" cy="3.525" r="2.72"/><circle
            cx="51.405" cy="3.525" r="2.72"/><circle cx="63.441" cy="3.525" r="2.72"/><circle cx="75.479" cy="3.525"
            r="2.72"/><circle cx="87.514" cy="3.525" r="2.719"/></g><g transform="translate(0 24)"><circle cx="3.261"
            cy="3.605" r="2.72"/><circle cx="15.296" cy="3.605" r="2.719"/><circle cx="27.333" cy="3.605" r="2.72"/><circle
            cx="39.369" cy="3.605" r="2.72"/><circle cx="51.405" cy="3.605" r="2.72"/><circle cx="63.441" cy="3.605"
            r="2.72"/><circle cx="75.479" cy="3.605" r="2.72"/><circle cx="87.514" cy="3.605" r="2.719"/></g><g
            transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72"/><circle cx="15.296" cy="3.686"
            r="2.719"/><circle cx="27.333" cy="3.686" r="2.72"/><circle cx="39.369" cy="3.686" r="2.72"/><circle
            cx="51.405" cy="3.686" r="2.72"/><circle cx="63.441" cy="3.686" r="2.72"/><circle cx="75.479" cy="3.686"
            r="2.72"/><circle cx="87.514" cy="3.686" r="2.719"/></g><g transform="translate(0 49)"><circle cx="3.261"
            cy="2.767" r="2.72"/><circle cx="15.296" cy="2.767" r="2.719"/><circle cx="27.333" cy="2.767" r="2.72"/><circle
            cx="39.369" cy="2.767" r="2.72"/><circle cx="51.405" cy="2.767" r="2.72"/><circle cx="63.441" cy="2.767"
            r="2.72"/><circle cx="75.479" cy="2.767" r="2.72"/><circle cx="87.514" cy="2.767" r="2.719"/></g><g
            transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72"/><circle cx="15.296" cy="2.846"
            r="2.719"/><circle cx="27.333" cy="2.846" r="2.72"/><circle cx="39.369" cy="2.846" r="2.72"/><circle
            cx="51.405" cy="2.846" r="2.72"/><circle cx="63.441" cy="2.846" r="2.72"/><circle cx="75.479" cy="2.846"
            r="2.72"/><circle cx="87.514" cy="2.846" r="2.719"/></g><g transform="translate(0 73)"><circle cx="3.261"
            cy="2.926" r="2.72"/><circle cx="15.296" cy="2.926" r="2.719"/><circle cx="27.333" cy="2.926" r="2.72"/><circle
            cx="39.369" cy="2.926" r="2.72"/><circle cx="51.405" cy="2.926" r="2.72"/><circle cx="63.441" cy="2.926"
            r="2.72"/><circle cx="75.479" cy="2.926" r="2.72"/><circle cx="87.514" cy="2.926" r="2.719"/></g><g
            transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72"/><circle cx="15.296" cy="3.006"
            r="2.719"/><circle cx="27.333" cy="3.006" r="2.72"/><circle cx="39.369" cy="3.006" r="2.72"/><circle
            cx="51.405" cy="3.006" r="2.72"/><circle cx="63.441" cy="3.006" r="2.72"/><circle cx="75.479" cy="3.006"
            r="2.72"/><circle cx="87.514" cy="3.006" r="2.719"/></g></g></g></g></svg>
        <svg viewbox="0 0 91 91" class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500
            fill-current"><g stroke="none" strokewidth="1" fillrule="evenodd"><g fillrule="nonzero"><g><g><circle
            cx="3.261" cy="3.445" r="2.72"/><circle cx="15.296" cy="3.445" r="2.719"/><circle cx="27.333" cy="3.445"
            r="2.72"/><circle cx="39.369" cy="3.445" r="2.72"/><circle cx="51.405" cy="3.445" r="2.72"/><circle cx="63.441"
            cy="3.445" r="2.72"/><circle cx="75.479" cy="3.445" r="2.72"/><circle cx="87.514" cy="3.445" r="2.719"/></g><g
            transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72"/><circle cx="15.296" cy="3.525"
            r="2.719"/><circle cx="27.333" cy="3.525" r="2.72"/><circle cx="39.369" cy="3.525" r="2.72"/><circle
            cx="51.405" cy="3.525" r="2.72"/><circle cx="63.441" cy="3.525" r="2.72"/><circle cx="75.479" cy="3.525"
            r="2.72"/><circle cx="87.514" cy="3.525" r="2.719"/></g><g transform="translate(0 24)"><circle cx="3.261"
            cy="3.605" r="2.72"/><circle cx="15.296" cy="3.605" r="2.719"/><circle cx="27.333" cy="3.605" r="2.72"/><circle
            cx="39.369" cy="3.605" r="2.72"/><circle cx="51.405" cy="3.605" r="2.72"/><circle cx="63.441" cy="3.605"
            r="2.72"/><circle cx="75.479" cy="3.605" r="2.72"/><circle cx="87.514" cy="3.605" r="2.719"/></g><g
            transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72"/><circle cx="15.296" cy="3.686"
            r="2.719"/><circle cx="27.333" cy="3.686" r="2.72"/><circle cx="39.369" cy="3.686" r="2.72"/><circle
            cx="51.405" cy="3.686" r="2.72"/><circle cx="63.441" cy="3.686" r="2.72"/><circle cx="75.479" cy="3.686"
            r="2.72"/><circle cx="87.514" cy="3.686" r="2.719"/></g><g transform="translate(0 49)"><circle cx="3.261"
            cy="2.767" r="2.72"/><circle cx="15.296" cy="2.767" r="2.719"/><circle cx="27.333" cy="2.767" r="2.72"/><circle
            cx="39.369" cy="2.767" r="2.72"/><circle cx="51.405" cy="2.767" r="2.72"/><circle cx="63.441" cy="2.767"
            r="2.72"/><circle cx="75.479" cy="2.767" r="2.72"/><circle cx="87.514" cy="2.767" r="2.719"/></g><g
            transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72"/><circle cx="15.296" cy="2.846"
            r="2.719"/><circle cx="27.333" cy="2.846" r="2.72"/><circle cx="39.369" cy="2.846" r="2.72"/><circle
            cx="51.405" cy="2.846" r="2.72"/><circle cx="63.441" cy="2.846" r="2.72"/><circle cx="75.479" cy="2.846"
            r="2.72"/><circle cx="87.514" cy="2.846" r="2.719"/></g><g transform="translate(0 73)"><circle cx="3.261"
            cy="2.926" r="2.72"/><circle cx="15.296" cy="2.926" r="2.719"/><circle cx="27.333" cy="2.926" r="2.72"/><circle
            cx="39.369" cy="2.926" r="2.72"/><circle cx="51.405" cy="2.926" r="2.72"/><circle cx="63.441" cy="2.926"
            r="2.72"/><circle cx="75.479" cy="2.926" r="2.72"/><circle cx="87.514" cy="2.926" r="2.719"/></g><g
            transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72"/><circle cx="15.296" cy="3.006"
            r="2.719"/><circle cx="27.333" cy="3.006" r="2.72"/><circle cx="39.369" cy="3.006" r="2.72"/><circle
            cx="51.405" cy="3.006" r="2.72"/><circle cx="63.441" cy="3.006" r="2.72"/><circle cx="75.479" cy="3.006"
            r="2.72"/><circle cx="87.514" cy="3.006" r="2.719"/></g></g></g></g></svg>
      </div>
    </div>
  </div>
</div>

<script src="./coba.js"></script>

</body>
</html>
```

7. Membuat function pushbutton 
   Berikut JS fungsi pushbutton yang telah saya buat
```
function PushButton(){
    username=document.getElementById("username").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;

    PostSignUp(username,email,password);
    window.location.href = "./registdone.html"
  }
```

8. Uji dengan menggunakan live server dan lihat pada inspect console
Berikut hasil pengujian di live server dengan menggunakan inspect console
![ss console live server](https://user-images.githubusercontent.com/98504755/228726576-49e0b7db-1dba-4b4a-8392-2fa028f63e44.png)

9. screenshot dari pipedream
![ss Pipedream 1](https://user-images.githubusercontent.com/98504755/228726803-a9ac3946-e909-4090-9a37-03fdd21d580e.png)
