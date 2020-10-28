import { userInfo } from "os";
import {createConnection} from "typeorm";
import {PlauditUser} from "./entity/PlauditUser";

createConnection(/*...*/).then(async connection => {

    let plauditUser = new PlauditUser();
    plauditUser.firstName = 'ev'
    plauditUser.age = 12
    plauditUser.lastName = 'lay'

    await connection.manager.save(plauditUser);
    console.log("user has been saved with user id " + plauditUser.id);

}).catch(error => console.log(error));