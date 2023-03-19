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
function toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");

  var popup_geo1 = document.getElementById("popup_geo1");
  popup_geo1.classList.toggle("active");
}

function toggle2() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");

  var popup_geo2 = document.getElementById("popup_geo2");
  popup_geo2.classList.toggle("active");
}
