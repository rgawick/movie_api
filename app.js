let container = document.getElementById("container")
let list = document.getElementById("list")
let textBox = document.getElementById("textBox")
let button = document.getElementById("button")

function displayMovies(movies) {

  let listItem =  movies.Search.map(function(hero){
    return `
    <li>
    <label>${hero.Title}</label>
    <img src="${hero.Poster}" class="center">
    </li>`
  })

  list.innerHTML = listItem.join('')
}

button.addEventListener('click',function(){

  let input = textBox.value
  const MOVIES_SEARCH_URL = `http://www.omdbapi.com/?s="${input}"&apikey=${apiKey}`
  $.get(MOVIES_SEARCH_URL,function(data){
      displayMovies(data)
  })
})
