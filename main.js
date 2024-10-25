import z from '/api.js'

  document.querySelector('#wishlist').addEventListener('click', addToWishlist)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: z.key
    }
 };

  


  fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
  .then(res => res.json())
  .then(res => {
    console.log(res.results[0])
    console.log(res.original_title)
   
    const baseURL = "https://image.tmdb.org/t/p/w500";
    
    document.querySelector('h1').innerText = res.results[0].original_title
    document.querySelector('h2').innerText = res.results[0].overview
    document.querySelector('img').src = baseURL + res.results[0].poster_path



})
  .catch(err => console.error(err));



function addToWishlist(){
localStorage.setItem("Favorite", document.querySelector('h1').innerHTML )
const value = localStorage.getItem('Favorite');

if(wishList.includes(value)){
return
}else{
    wishList.push(value)

} 

}

