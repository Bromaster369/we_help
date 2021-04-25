class User {
    constructor(id, name, username, email){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }

    //render user instance method
    //method
    renderUser() {
        let usersDiv = document.getElementById("users-container")

        usersDiv.innerHTML +=
        `
        <ul>
        <h3>Username: ${this.username} </h3>
        <li>Name: ${this.name} - Email: ${this.email} </li>
        <ul><br>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteUser()">Delete User</button>
        <button class="update-bttn" data-id="${this.id}">Update User</button>
        `
    }
}
