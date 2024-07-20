
let ar = [
'https://w0.peakpx.com/wallpaper/742/836/HD-wallpaper-the-valley-of-flowers-national-park-uttarakhand-india-blossoms-yellow-sunset-clouds-sky-field-blue.jpg',
'https://img.traveltriangle.com/blog/wp-content/uploads/2017/03/shutterstock_152941832-1.jpg',
'https://drscdn.500px.org/photo/16581555/q%3D80_m%3D2000/v2?webp=true&sig=1f5bd3e4b75fa48fd014a16c1b3f10623a932fd7b2bfe3cdb548b06f273c4426',
'https://im.whatshot.in/img/2020/Jan/shutterstock-1092567488-cropped-1-1579601403.jpg',
'https://i0.wp.com/www.beenaroundtheglobe.com/wp-content/uploads/2018/01/vagator-beach-from-the-fort.jpg?resize=1024%2C683&ssl=1'
];
let i = 0;
let a = document.getElementById('scroll');
let b = document.getElementsByClassName('let');

let showSlide = () => {
b[i].classList.remove('high');
i = (i + 1) % ar.length;
b[i].classList.add('high');
a.style.backgroundImage = `url(${ar[i]})`;
}

let movb = () => { 
clearInterval(s);
showSlide();
s = setInterval(showSlide, 2000); 
}

let movf = () => {
clearInterval(s);
b[i].classList.remove('high');
i = (i - 1 + ar.length) % ar.length;
b[i].classList.add('high');
a.style.backgroundImage = `url(${ar[i]})`;
s = setInterval(showSlide, 2000); 
}

let s = setInterval(showSlide, 2000);

let city = [
{
id: 0,
img: "https://1.bp.blogspot.com/-z9xQhwOgWF4/XOpTfSBTsxI/AAAAAAAAJ7A/-BDXXEQ9oww6rKetAtDaJpzoF7_paJ9DwCLcBGAs/s1600/agra%2Bfort%2B4.jpeg",
place: "AGRA",
price: "View Package",
rn: "BOOK NOW",
link: "https://www.tourmyindia.com/packages-tour-india/delhi-tours/"

},
{
id: 1,
img: "https://th.bing.com/th/id/R.a07c07792a5d092f692d0e11f54e1907?rik=crATcoBhU2g5wQ&riu=http%3a%2f%2fwww.indiachal.com%2fwp-content%2fuploads%2f2018%2f08%2fUttarakhand.jpg&ehk=LJh%2f8a8mPDYYIUzeafdsDrizMT3f1700eJ7EfTxJCUg%3d&risl=&pid=ImgRaw&r=0",
place: "UTTARAKAND",
price: "View Package",
rn: "BOOK NOW",
link: "https://www.tourmyindia.com/treks/trekking-in-uttarakhand.html"
},
{
id: 2,
img: "https://www.insightvacations.com/wp-content/uploads/2023/02/hawa-mahal-jaipur3.jpg",
place: "JAIPUR",
price: "View Package",
rn: "BOOK NOW",
link: "https://www.tourmyindia.com/packages-tour-india/heritage-tours/best-of-rajasthan.html"
},
{
id: 3,
img: "https://th.bing.com/th/id/R.0b6994a893dec0c5319454258873917f?rik=iEoQJtbXlVSJNA&riu=http%3a%2f%2f3.bp.blogspot.com%2f_AOiooJLaVxI%2fS9JtB0_TtjI%2fAAAAAAAAA_c%2foEnzzDJhygU%2fs1600%2footy5.jpg&ehk=EtP8CPOkTsJWtXBndAhqReQZZJEKw2IK3ZSx801d6HU%3d&risl=&pid=ImgRaw&r=0",
place: "OOTY",
price: "View Package",
rn: "BOOK NOW",
link:"https://www.tourmyindia.com/packages-tour-india/hill-stations/ooty-hill-station-tour.html"
},
{
id: 4,

img: "https://www.tirthyatraindia.com/assets/images/spiritual-tours/mathura.jpg",
place: "Vrindavan",
price: "View Package",
rn: "BOOK NOW",
link: "https://www.tourmyindia.com/packages-tour-india/uttar-pradesh-tours/"
}
];
let items = document.getElementById('item');
for (let con of city) {
items.innerHTML += `
<div class="con">
<img src=${con.img} height="150px" width="200px">
<p><b>${con.place}</b></p>
<h4><button><a href="${con.link}">${con.price}</a></button></h4>
<button onclick=book(${con.id})><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
<path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
</svg></button>
</div>`
}

let arr = [];
let  d = document.getElementById('no');
let k=0;
let book = (val) => {
k++;
d.innerHTML=k;
arr.push(city[val]);
console.log(arr);
localStorage.setItem("cartData", JSON.stringify(arr));
}
