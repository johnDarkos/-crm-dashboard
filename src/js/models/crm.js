


export class Crm {
    constructor() {
        this.clients = [];
    }

    addClient(client) {
        this.clients.push(client);
    }

    getClients() {
        return this.clients;
    }

    remove(id) {
        this.clients = this.clients.filter(client => client.id !== id);
    }
}