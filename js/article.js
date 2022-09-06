var mainContainer
var header
var premium_articles
const options = {
  method: 'GET',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'Access-Control-Allow-Origin': '*'
  }
}

//Retrieves the subscription details of the user using the  subscription API 
function get_suscription_details() {
  return fetch('http://localhost:3000/subscription_details', options)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

//Retrieves the articles of interest of the user using the recommended-articles API 

function get_recommended_articles() {
  return fetch('http://localhost:3000/recommended-articles', options)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

//Retrieves the articles of writtern by the user using the my-articles API 

function get_my_articles() {
  return fetch('http://localhost:3000/my-articles', options)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

//Retrieves all the topic of interest that are available 
function get_interests_list() {
  return fetch('http://localhost:3000/interests', options)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

//Retrieves top trending articles of the day
function get_trending_articles() {
  return fetch('http://localhost:3000/trending-articles', options)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

// Retrieves the users favaourite articles
function get_favourite_articles() {
  return fetch('http://localhost:3000/favourite-articles', options)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}


//Display the articles of interest of the user
function display_premium_articles() {
  mainContainer, header = empty_center_column()
  header.innerHTML = "Special recommendations for you! "
  icon = document.createElement("i")
  header.appendChild(icon)
  icon.classList = "fa fa-thumb-tack"

  get_recommended_articles().then(response => {
    for (var i = 0; i < response.length; i++) {
      console.log(response[i].title)
      var title = document.createElement("div");
      title.className = "title"
      title.innerHTML = response[i].title + " "

      var author = document.createElement("div");
      author.className = "author"
      author.innerHTML = response[i].author;

      var a = document.createElement('a')
      var fav = document.createElement("i")
      a.appendChild(fav)
      fav.classList = "favicon fa fa-heart-o"


      mainContainer.appendChild(title);
      mainContainer.appendChild(author);
      title.appendChild(a)
      mainContainer.appendChild(document.createElement("br"))

    }
  }).catch(error => console.log("Error in getting premium articles" + error))
}

//Display top trending articles

function display_trending_articles() {
  get_trending_articles().then(reponse => {
    var mainContainer = document.getElementById("right-cloumn");
    for (var i = 0; i < reponse.length; i++) {
      var title = document.createElement("div");
      var fav = document.createElement("i")
      console.log("into the function")
      title.innerHTML = reponse[i].title + " ";
      var author = document.createElement("div");
      author.innerHTML = "Authored by- " + reponse[i].author;
      title.className = "title"
      author.className = "author"
      fav.classList = "fa fa-heart-o"
      mainContainer.appendChild(title);
      mainContainer.appendChild(author);
      title.appendChild(fav)
      mainContainer.appendChild(document.createElement("br"))
    }
  }).catch(error => console.log("Error here" + error))
}

//Display the favourite articles of the user

function displayMyFavorites() {
  mainContainer, header = empty_center_column()
  header.innerHTML = "My Favourites"
  icon = document.createElement("i")
  header.appendChild(icon)
  icon.classList = "fa fa-gratipay"
  get_favourite_articles().then(response => {
    for (var i = 0; i < response.length; i++) {
      console.log(response[i].title)
      var title = document.createElement("div");
      title.className = "title"
      title.innerHTML = response[i].title + " "

      var author = document.createElement("div");
      author.className = "author"
      author.innerHTML = response[i].author;


      var fav = document.createElement("i")
      fav.classList = "favicon fa fa-heart-o fa-heart"

      mainContainer.appendChild(title);
      mainContainer.appendChild(author);
      title.appendChild(fav)
      mainContainer.appendChild(document.createElement("br"))
    }
  }).catch(error => console.log("Error in getting favourite articles" + error))
}


//Display the articles wrtiitern by the user

function displayMyStories() {
  get_my_articles().then(response => {
    mainContainer, header = empty_center_column()
    header.innerHTML = "My Articles"
    mainContainer.innerHTML = ''
    for (var i = 0; i < response.length; i++) {
      var title = document.createElement("div");
      title.className = "title"
      var fav = document.createElement("i")
      fav.classList = "fa fa-pencil"


      title.innerHTML = response[i].title + " "
      var status = document.createElement("div");
      status.innerHTML = response[i].status;
      if (response[i].status == "Rejected") {
        status.style.color = 'red'
      }
      else if (response[i].status == "In Review") {
        status.style.color = 'orange'
      }
      else if (response[i].status == "Submitted") {
        status.style.color = 'blue'
      }
      else if (response[i].status == "Accepted") {
        status.style.color = 'green'
      }
      else {
        status.style.color = 'black'
      }
      console.log(status)
      mainContainer.appendChild(title);
      title.appendChild(fav)
      mainContainer.appendChild(status);
      mainContainer.appendChild(document.createElement("br"))

    }
  }).catch(error => console.log("Error in getting my articles" + error))
}

// Display subscription details of the user 
function subscription_details() {
  var mainContainer = document.getElementById("center-column");
  var header = document.getElementById("center-column-header");
  header.innerHTML = '';
  mainContainer.innerHTML = "";
  header.appendChild(document.createTextNode("Subscription Details"));
  mainContainer.appendChild(document.createTextNode("Fetch data from backend and display here"));
}


//Display profile details of the user
function profile_details() {
  var mainContainer = document.getElementById("center-column");
  var header = document.getElementById("center-column-header");
  header.innerHTML = '';
  mainContainer.innerHTML = "";
  header.appendChild(document.createTextNode("Profile Details"));
  mainContainer.appendChild(document.createTextNode("Fetch data from backend and display here"));
}

// Clears the div befor laoding new data 
function empty_center_column() {
  mainContainer = document.getElementById("center-column");
  header = document.getElementById("center-column-header");
  header.innerHTML = '';
  mainContainer.innerHTML = "";
  return mainContainer, header
}

function add_to_favourite() {
  $('.favicon').click(function () {
    $(this).find('i').toggleClass('fa-heart-o fa-heart')
  })
}

//Function to create interest cards

function create_interests_card() {
  container = document.getElementById("right-cloumn-bottom")
  get_interests_list().then(response => {
    for (i = 0; i < response.length; i++) {
      button = document.createElement("button")
      button.type = "button"
      button.classList = "btn btn-light"
      button.innerHTML = response[i].topic
      container.appendChild(button)
    }
  }).catch(error => console.log("Error here" + error))
}

function loadfunction() {
  display_premium_articles()
  display_trending_articles()
  add_to_favourite()
  create_interests_card()
}

