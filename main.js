import z from '/api.js'

  document.querySelector('#wishlist').addEventListener('click', addToWishlist)
  document.querySelector('#removeWishlist').addEventListener('click', removeWishlist)

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
    console.log(res.results)
     
    // function createButton(buttonText, buttonId) {
    //     const button = document.createElement('button'); // Create a button element
    //     button.textContent = buttonText; // Set the button text
    //     button.id = buttonId; // Set the button ID (or use setAttribute)
 
     res.results.forEach((x, i) => {
       
       let newHeading = document.createElement("h1") 
        newHeading.textContent = res.results[i].title
        document.body.appendChild(newHeading)

        
        
        // i was trying to add a button each time a new title was added need to look into this

        

     })


    const baseURL = "https://image.tmdb.org/t/p/w500";
    
    // document.querySelector('h1').innerText = res.results[0].original_title
    // document.querySelector('h2').innerText = res.results[0].overview
    // document.querySelector('img').src = baseURL + res.results[0].poster_path



})
  .catch(err => console.error(err));


function removeWishlist(){
localStorage.removeItem('Favorite')


}

function addToWishlist(){
localStorage.setItem("Favorite", document.querySelector('h1').innerHTML )
const value = localStorage.getItem('Favorite');



}

