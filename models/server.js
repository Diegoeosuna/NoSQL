const express = require('express')
const cors = require('cors')

const { dataBaseConnection } = require('../db/database')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3002;
        this.articlesPath = '/api/articles'
        this.ticketsPath = '/api/tickets'
        this.usersPath = '/api/users'
        
        this.dataBaseConnection();

        this.middlewares();
        this.routes();
    }

    async dataBaseConnection(){
        await dataBaseConnection()
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.articlesPath, require('../routes/articles.routes'));
        this.app.use(this.ticketsPath, require('../routes/tickets.routes'));
        this.app.use(this.usersPath, require('../routes/users.routes'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando desde el puerto ${this.port}`)
        })
    }

}

module.exports = Server;