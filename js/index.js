function loadfunction() {
    trending_site()
    create_interests_card()
}

function trending_site() {
    console.log("into befor home page load ")
    get_trending_articles().then(response => {
        console.log(response.length)
        const randomArticle = response[Math.floor(Math.random() * response.length)];
        // console.log(randomArticle)
        // count = Math.trunc(response.length/3)
        // leftcolumndatalength = count
        // centercolumndatalength = count + count 
        // rightcolumndatalength =  response.length
        var trendingContainer = document.getElementById("trending");
        // var centerContainer = document.getElementById("center-column");

        // var rightContainer = document.getElementById("right-column");

        // for (var i = 0; i < leftcolumndatalength; i++) {
        //     create_article_card(leftContainer, response[i].title, response[i].author, "Images/Articles/" +response[i].image , "www.google.com")

        // }
             
        // for (var i = leftcolumndatalength+1; i < centercolumndatalength; i++) {
        //     create_article_card(centerContainer, response[i].title, response[i].author, "Images/Articles/" +response[i].image , "www.google.com")

        // }
       
        // for (var i = centercolumndatalength+1; i < response.length; i++) {
        //     create_article_card(rightContainer, response[i].title, response[i].author, "Images/Articles/" +response[i].image , "www.google.com")

        // }

        for ( var i = 1 ; i < 6 ; i++) {
            const randomArticle = response[Math.floor(Math.random() * response.length)];
            create_article_card(trendingContainer, randomArticle.title, randomArticle.author, "Images/Ranks/" + i + ".jpg" , "www.google.com")
        }
       
      }).catch(error => console.log("Error here" + error))
  }

  function create_article_card(container, title, author, image, linktoarticle) {

    card = document.createElement("div")
    card.classList = "card articleCard col-lg-2 col-md-4"
    card.style ="width: 20rem; height:30rem"
    card_img = document.createElement("img")
    card_img.style = "width:5rem; height: 5rem"
    card_img.classList = "img-fluid rounded-start"
    card_img.src = image



    card_title = document.createElement("h5")
    card_title.classList = "card-title"
    card.title.innerHTML = title


    card_text = document.createElement("p")
    card_text.classList = "card-text"
    card_text.innerHTML =  author


    card_link = document.createElement("a")
    card_link.href =  linktoarticle
    card_link.innerHTML = title


    card_body = document.createElement("div")
    card_body.classList = "card-body"


    container.appendChild(card)
    card.appendChild(card_img)
    card.appendChild(card_body)
    card_body.appendChild(card_title)
    card_body.appendChild(card_text)
    card_body.appendChild(card_link)


  };

  function create_interests_card() {
    container = document.getElementById("recommendation-placeholder")
   
    get_interests_list().then(response => {

    for ( i=0; i<response.length;i++) {
        button = document.createElement("button")
        button.type = "button"
        button.classList = "btn btn-light"
        button.innerHTML = response[i].topic
        container.appendChild(button)
    }
     }).catch(error => console.log("Error here" + error))
  }