

export class Client {
    constructor(firstName, lastName, email, phone, id = Date.now()) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }
}

