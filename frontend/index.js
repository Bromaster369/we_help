document.addEventListener("DOMContentLoaded", () => {
    fetchUsers()
})
    const BASE_URL = "http://127.0.0.1:3000"

//fetch requests/ajax 
    //fetch request - receives an array of objects
    //read - fetch use's index
    //1. use BASE_URL and fecth the end point: /users
    //2. .then = takes the response object and Jsonify it
    //3. .then function used on that promise to resolve it and extrat all of the data our goal is to grab
    function fetchUsers(){
        fetch( `${BASE_URL}/users`)
        .then(resp => resp.json()) 
        .then(users => {
            //do something with data fecthed
            for (const user of users){

                let u = new.User(user.id, user.name, user.username, user.email) 
            }

        })
        
    }

    // create - create a new user



    //delete - delete a user


