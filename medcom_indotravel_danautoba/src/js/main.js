// For Scroll-animate star
// event pada saay link di klik
$(".page-scroll").on("click", function (e) {
  // ambil isi atribut href-nya dulu
  var hrefnya = $(this).attr("href");

  // lalu tankap elemen href yang bersangkutan dari "this"(elemen tertentu)
  var elementHref = $(hrefnya);

  // lalu pindahkan scro  llnya
  $("html").animate(
    {
      scrollTop: elementHref.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );

  // penghenti atribut href e agar tidak jalan
  e.preventDefault();
});

// popup geosite
// function toggle() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo1 = document.getElementById("popup_geo1");
//   popup_geo1.classList.toggle("active");
// }

// function toggle2() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo2 = document.getElementById("popup_geo2");
//   popup_geo2.classList.toggle("active");
// }

// function toggle3() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo3 = document.getElementById("popup_geo3");
//   popup_geo3.classList.toggle("active");
// }

// function toggle4() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo4 = document.getElementById("popup_geo4");
//   popup_geo4.classList.toggle("active");
// }

// function toggle5() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo5 = document.getElementById("popup_geo5");
//   popup_geo5.classList.toggle("active");
// }

// function toggle6() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo6 = document.getElementById("popup_geo6");
//   popup_geo6.classList.toggle("active");
// }

// function toggle7() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo7 = document.getElementById("popup_geo7");
//   popup_geo7.classList.toggle("active");
// }

// function toggle8() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo8 = document.getElementById("popup_geo8");
//   popup_geo8.classList.toggle("active");
// }

// function toggle9() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo9 = document.getElementById("popup_geo9");
//   popup_geo9.classList.toggle("active");
// }

// function toggle10() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo10 = document.getElementById("popup_geo10");
//   popup_geo10.classList.toggle("active");
// }

// function toggle11() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo11 = document.getElementById("popup_geo11");
//   popup_geo11.classList.toggle("active");
// }

// function toggle12() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo12 = document.getElementById("popup_geo12");
//   popup_geo12.classList.toggle("active");
// }

// function toggle13() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo13 = document.getElementById("popup_geo13");
//   popup_geo13.classList.toggle("active");
// }

// function toggle14() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo14 = document.getElementById("popup_geo14");
//   popup_geo14.classList.toggle("active");
// }

// function toggle15() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo15 = document.getElementById("popup_geo15");
//   popup_geo15.classList.toggle("active");
// }

// function toggle16() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");

//   var popup_geo16 = document.getElementById("popup_geo16");
//   popup_geo16.classList.toggle("active");
// }
