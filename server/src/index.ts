import { userInfo } from "os";
import {createConnection} from "typeorm";
import {PlauditUser} from "./entity/PlauditUser";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

createConnection(/*...*/).then(async connection => {

    // let plauditUser = new PlauditUser();
    // plauditUser.firstName = 'ev'
    // plauditUser.age = 12
    // plauditUser.lastName = 'lay'

    // await connection.manager.save(plauditUser);
    // console.log("user has been saved with user id " + plauditUser.id);

    app.get('/', (req, res) => {
        res.send('Home page')
    })

    app.get('/users', (req, res) => {
        // Send all users
    })

    app.get('/user/:id', (req, res) => {
        // Send specific user by id
    })

    app.post('/user', (req, res) => {
        // Create user
    })

    app.put('/user/:id', (req, res) => {
        // Update user by id
    })

    app.delete('/user/:id', (req, res) => {
        // delete user by id
    })

    app.listen(PORT, () => {
        console.log(`express server listening on port ${PORT}`)
    })


}).catch(error => console.log(error));