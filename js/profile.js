var mainContainer
var header

//retreive profile details of the logged in user
function get_profile_details(id) {
    return fetch(`http://localhost:3000/users?Id=${id}`, options)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

//DIsplay profile information of the logged in user
function display_profile_details(id) {
    mainContainer, header = empty_center_column()
    get_profile_details(id).then(response => {
        console.log(response.length)

        card = document.createElement("div")
        card.classList = "card text-center profileCard col-lg-2 col-md-4"
        card.style = "width: 30rem; height:30rem"

        card_header = document.createElement("h1")
        card_header.classList = "card-header"
        card_header.innerHTML = response[0].Name
        card_img = document.createElement("img")
        card_img.style = "width:20rem; height:20rem"
        card_img.classList = "img-fluid rounded-start"
        card_img.src = "Images/Profile/" + response[0].Image

        var body = document.createElement("div");
        body.classList = "card-body"


        var username = document.createElement("h3");
        username.classList = "card-title"
        username.innerHTML = " Username :" + response[0].username
        var email = document.createElement("h3");
        email.classList = "card-title"
        email.innerHTML = " Email :" + response[0].email
        var firstname = document.createElement("h3");
        firstname.classList = "card-title"
        firstname.innerHTML = "First Name : " + response[0].Name
        var bio = document.createElement("h3");
        bio.classList = "card-subtitle mb-2 text-muted"
        bio.innerHTML = "About me : " + response[0].Bio
        // console.log(response[0].Interests[i].topic)
        var interestheader = document.createElement("h3");
        interestheader.classList = "card-subtitle mb-2 text-muted"
        interestheader.innerHTML = "My Interests "
        body.appendChild(username)
        body.appendChild(firstname)
        body.appendChild(bio)
        body.appendChild(email)
        var interestsdiv = document.createElement("div")
        interestsdiv.classList = "interest-placeholder"
        body.appendChild(interestheader);
        for (i = 0; i < response[0].Interests.length; i++) {
            console.log(i)
            console.log(response[0].Interests[i].topic)
            var interests = document.createElement("h4");
            interests.style = "padding:10px;border-style: solid;border-color: blueviolet;border-width: 2px"
            interests.classList = "card-subtitle profilebutton mb-2 text-muted"
            var text = response[0].Interests[i].topic;
            interests.innerHTML = text
            interestsdiv.appendChild(interests)
        }

        body.appendChild(interestsdiv)
        var edit = document.createElement("button")
        edit.classList = "btn profilebutton"
        edit.innerHTML = "Edit Profile  "
        edit.style = "display: block;align-items:center"
        body.appendChild(edit)
        card.appendChild(card_header)
        card.appendChild(card_img)
        card.appendChild(body)
        mainContainer.appendChild(card);
    }).catch(error => console.log("Error in Profile" + error))
}

//Change password of the logged in user
function change_password() {
    mainContainer, header = empty_center_column()
    header.innerHTML = "Change your password!"
    var form = document.createElement("form")
    form.classList = "changepassordform"
    mainContainer.appendChild(form)
    var divcp = document.createElement("div")
    divcp.classList = "form-group"
    divcp.style = "font-size: large; padding"
    var currentpassowrd = document.createElement("label")
    currentpassowrd.for = "currentpassword"
    currentpassowrd.innerHTML = "Current Password"
    var inputcurrentpassword = document.createElement("input")
    inputcurrentpassword.type = "password"
    inputcurrentpassword.classList = "form-control"
    inputcurrentpassword.id = "currentpassword"
    inputcurrentpassword.placeholder = "Enter current password"
    divcp.appendChild(currentpassowrd)
    divcp.appendChild(inputcurrentpassword)
    var divnp = document.createElement("div")
    divnp.classList = "form-group"
    var newpassowrd = document.createElement("label")
    newpassowrd.for = "newpassword"
    newpassowrd.innerHTML = "New Password"

    var inputnewpassword = document.createElement("input")
    inputnewpassword.type = "password"
    inputnewpassword.classList = "form-control"
    inputnewpassword.id = "newpassword"
    inputnewpassword.placeholder = "Enter new password"


    divnp.appendChild(newpassowrd)
    divnp.appendChild(inputnewpassword)


    var divnp1 = document.createElement("div")
    divnp1.classList = "form-group"


    var newpassowrd1 = document.createElement("label")
    newpassowrd1.for = "newpassword1"
    newpassowrd1.innerHTML = "Re-Enter New Password"

    var inputnewpassword1 = document.createElement("input")
    inputnewpassword1.type = "password"
    inputnewpassword1.classList = "form-control"
    inputnewpassword1.id = "newpassword1"
    inputnewpassword1.placeholder = "Re-Enter new password"


    divnp1.appendChild(newpassowrd1)
    divnp1.appendChild(inputnewpassword1)


    var divsubmit = document.createElement("div")
    divsubmit.classList = "form-group"

    var submit = document.createElement("button")
    button.classList = "btn btn-primary"
    button.type = "submit"
    button.innerHTML = "Submit"
    divsubmit.appendChild(button)

    form.appendChild(divcp)

    form.appendChild(divnp)
    form.appendChild(divnp1)
    form.appendChild(divsubmit)

}