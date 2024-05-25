// Burada "Selektor'ları" çağırırıq
let searchIcon = document.querySelector(".searchIcon");
let searchInput = document.querySelector(".searchInputDiv .searchInput");
let searchInputDiv = document.querySelector(".searchInputDiv");
let searchClass = document.querySelector(".searchClass");
let input = document.querySelector(".searchClass .searchInput");
let h1 = document.querySelector(".searchClass .title");
// Burada Css'in  müəyyən hissəsini vermişik
searchInput.style.display = "none";
searchIcon.style.color = "black";
searchInputDiv.style.display = "flex";
searchInputDiv.style.alignItems = "center";
searchClass.style.backgroundColor = "white";
// Burada "Mousu" "Search iconun" üzərinə gətirdikdə input açılır, başlıq rəngi ve arxa fon rəngi dəyişir
searchIcon.addEventListener("mouseenter", function () {
  searchInput.style.display = "block";
  searchIcon.style.color = "red";
  searchInput.style.backgroundColor = "blue";
  searchInput.style.color = "white";
  searchInputDiv.classList.add("searchInputDiv");
  searchClass.classList.add("searchClass");
  searchClass.classList.add("input");
  searchClass.style.color = "green";
  searchClass.style.backgroundColor = "yellow";
});
//Burada "Search icona" klik olunduğda, "Input" əvvəlki halına qayıdır, "alert" gəlir ve arxa fon rəngi qırmızı olur
searchIcon.addEventListener("click", function (event) {
  alert("Siz klik etdiniz :)");
  searchClass.style.backgroundColor = "red";
  searchInput.style.display = "none";
  searchIcon.style.color = "black";
  searchClass.style.color = "blue";
});
