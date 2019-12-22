# Vendor Assets
--------------------
Web yang dikembangkan menggunakan berbagai macam vendor assets yaitu:

- **jQuery**, digunakan untuk memudahkan scripting javascript
- **bootstraps**, digunakan sebagai basis css framework
- **popper.js**, dependecy dari bootstrap
- **animate.css**, digunakan untuk menciptakan efek animasi transisi pada section tertentu


# SCSS Styling
--------------------

## /assets/scss/
--------------------
Berisi file scss utama yang akan dicompile dan digunakan pada setiap halaman html

- **index.scss** ini buat halaman index.html, dia ngimport **variable, common, dan timeline-layout**
- **software.scss** ini buat halaman software.html dia ngimport **variable.scss, common.scss, dan software_services-layout.scss**

## /assets/scss/components/
---------------------------
Berisi komponen-komponen kecil yang digunakan file scss utama pada folder parent

- **variable.scss** berisi variable2 yg gua simpen, saat ini isinya untuk color
- **common.scss** gunanya buat ngatur komponen2 common yg sifatnya hampir dipake semua styling
- **timeline-layout.scss** ini buat ngatur section our strength di halaman index.html
- **software_services.scss** ini buat ngatur section services di halaman software.html

**REMEMBER**
Perlu diingat lagi file css yg ada disana itu udh auto generate dari file .scss, jadi untuk maintain codenya di scss bukan css. dan setiap halaman cukup link:rel ke salah satu style aja, misal index.html ya stylingny pake yg index.css dan gk perlu import komponen lain(kecuali bootstrap dan animate) karena dependecynya udah di import di scssnya.


# Javascript
-------------
Setiap script yang dibuat sementara ini disimpan dalam folder /assets/js/ bersamaan dengan script lain yang didapat dari vendor tertentu


# Images
-------------
File diorganisasikan berdasarkan halaman html yang menggunakannya, apabila gambar yang digunakan bersifat global(digunakan di berbagai macam halaman), maka gambar tersebut diletakkan pada folder **/assets/img/**

- **/assets/img/**, digunakan untuk menyimpan gambar yang bersifat global
- **/assets/img/{nama halaman}/**, digunakan untuk menyimpan gambar berdasarkan halaman
- **/assets/img/{nama halaman}/{nama folder}/**, digunakan untuk menyimpan gambar berdasarkan klasifikasi tertentu(misalkan: berdasarkan section-nya)