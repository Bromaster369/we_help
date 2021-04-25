document.addEventListener("DOMContentLoaded", () => {
    createForm()
    fetchUsers()
})
    const BASE_URL = "http://127.0.0.1:3000"

//fetch requests/ajax 
    //fetch request - receives an array of objects
    //read - fetch use's index
    //1. use BASE_URL and fecth the end point: /users
    //2. .then = takes the response object and Jsonify it
    //3. .then function used on that promise to resolve it and extract all of the data our goal is to grab
    function fetchUsers(){
        fetch( `${BASE_URL}/users`)
        .then(resp => resp.json()) 
        .then(users => {
            //do something with data fecthed
            for (const user of users){

                let u = new User(user.id, user.name, user.username, user.email) 
                //creates new instance of each user object
                u.renderUser();
                //renders that instance to DOM using instance method
            }

        })
        
    }

    // create - create a new user
    //create a form
    //add an event listener to the form so it can interrupt the default action and interject our own fronend capabilities
    //once form is submitted => fetch 'post' to the back end
    //do something with the return object

    function createForm(){
        let usersForm = document.getElementById("users-form")
        usersForm.innerHTML +=
        `
        <form>
            Name: <input type="text" id="name"><br>
            Username: <input type="text" id="username"><br>
            Email: <input type="text" id="email"><br>
            <input type="submit" value="Create User">
        </form>
        
        `

        usersForm.addEventListener("submit", userFormSubmission)
        }

        //grab the values user enter in fields
    function userFormSubmission(){
        event.preventDefault();
        let name = document.getElementById("name").value
        let username = document.getElementById("username").value
        let email =  document.getElementById("email").value

        //bundle information to make fetch request to backend and persist into data base
        let user = {
            name: name,
            username: username,
            email: email
        }

        fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
              //stringify our object
        })
        //resolve object
        //jsonify response
        .then(resp => resp.json())
        .then(user => {
            let u = new User(user.id, user.name, user.username, user.email)
            u.renderUser();
        })
    
    }
 
    //delete - delete a user

    function deleteUser(){
        let userId = parseInt(event.target.dataset.id)

        fetch(`${BASE_URL}/users/${userId}`, {
            method: 'DELETE'
        })

        this.location.reload()
    }

    //fetch requests/ajax 
    //fetch request - receives an array of objects
    //read - fetch use's index
    //1. use BASE_URL and fecth the end point: /users
    //2. .then = takes the response object and Jsonify it
    //3. .then function used on that promise to resolve it and extract all of the data our goal is to grab

    // function fetchContributions(){
    //     fetch( `${BASE_URL}/contributions`)
    //     .then(resp => resp.json()) 
    //     .then(users => {
    //         //do something with data fecthed
    //         for (const contribution of contributions){

    //             let c = new Contribution(contribution.id, contribution.title, contribution.description) 
    //             //creates new instance of each user object
    //             c.renderContribution();
    //             //renders that instance to DOM using instance method
    //         }

    //     })
        
    }
    