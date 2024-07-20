let tour = document.getElementById('item'); 
console.log(tour);
let arr = localStorage.getItem('cartData')
const val = JSON.parse(arr);
for(con  of val)
{
 console.log(con.img);
 tour.innerHTML+=`
 <div class="con">
 <a href="${con.link}"><img src=${con.img} height="150px" width="200px">
 <p><b>${con.place}</b></p>
 <b>${con.price}</a></b>
 <button onclick=book(${con.id})>BOOK NOW</button>
 </div>`
}