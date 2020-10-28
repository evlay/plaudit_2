import { userInfo } from 'os'
import { createConnection } from 'typeorm'
import { PlauditUser } from './entity/PlauditUser'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

createConnection(/*...*/)
  .then(async (connection) => {
    let plauditUserRepo = connection.getRepository(PlauditUser)

    app.get('/', (req, res) => {
      res.send('Home page')
    })

    app.get('/users', async (req, res) => {
      // Send all users
      let plauditUserList = await plauditUserRepo.find()

      res.json(plauditUserList)
    })

    app.get('/user/:id', async (req, res) => {
      // Send specific user by id
      const userId = req.params.id

      let singlePlauditUser = await plauditUserRepo.findOne(userId)

      
    })

    app.post('/user', async (req, res) => {
      // Create user
      if(req.body.firstName && req.body.lastName && req.body.age){
        let plauditUser = new PlauditUser()
        plauditUser.firstName = req.body.firstName
        plauditUser.lastName = req.body.lastName
        plauditUser.age = req.body.age
        await plauditUserRepo.save(plauditUser)
          .catch(err => res.json(err))
          console.log('User saved with user id ' + plauditUser.id)
          res.status(200).json('User saved with user id ' + plauditUser.id)
      } else { res.json('firstName, lastName, and age are all required') }
    })

    app.put('/user/:id', (req, res) => {
      // Update user by id
    })

    app.delete('/user/:id', async (req, res) => {
      // delete user by id
      const userId = req.params.id

      await connection
        .getRepository(PlauditUser)
        .createQueryBuilder()
        .delete()
        .from(PlauditUser)
        .where("id = :id", {userId})
        .execute()
        console.log('delete complete')
      


    })

    app.listen(PORT, () => {
      console.log(`express server listening on port ${PORT}`)
    })
  })
  .catch((error) => { 
    console.log(error)
  })
