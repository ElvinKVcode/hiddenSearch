// Burada Selector'lari cagirmisiq.
let searchIcon = document.querySelector('.searchIcon');
let searchInput = document.querySelector('.searchInputDiv .searchInput');
let searchInputDiv = document.querySelector('.searchInputDiv');
let searchClass = document.querySelector('.searchClass');
let input = document.querySelector('.searchClass .searchInput');
let h1 = document.querySelector('.searchClass .title');
// Burada Css'in  mueyyen hissesini vermisik.
searchInput.style.display = 'none';
searchIcon.style.color = 'black';
searchInputDiv.style.display = 'flex';
searchInputDiv.style.alignItems = 'center';
searchClass.style.backgroundColor = 'white';
// Burada "Mousu" "Search iconun" uzerine getirdikde input acilir, basliq textin rengi ve arxa fon rengi deyisir.
searchIcon.addEventListener('mouseenter', function () {
    searchInput.style.display = 'block';
    searchIcon.style.color = 'red';
    searchInput.style.backgroundColor = 'blue';
    searchInput.style.color = 'white';
    searchInputDiv.classList.add('searchInputDiv');
    searchClass.classList.add('searchClass');
    searchClass.classList.add('input');
    searchClass.style.color = 'green';
    searchClass.style.backgroundColor = 'yellow';
});
//Burada "Search icona" click olundugda, "Input" evvelki halina qayidir, "alert" gelir ve arxa fon rengi qirmizi olur.
searchIcon.addEventListener('click', function (event) {
    searchClass.style.backgroundColor = 'red';
    searchInput.style.display = 'none';
    searchIcon.style.color = 'black';
    searchClass.style.color = 'blue';
});







