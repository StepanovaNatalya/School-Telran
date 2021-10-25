const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

const users = []

//get all records -> get('/users')
//create new record -> post('/users')
//get record by id -> get('/users/id')
//edit record by id -> put('/users/id')
//delete record by id -> delete('/users/id')

app.get('/users', (req, res)=>{
    res.json(users)
})

app.post('/users', (req, res)=>{
    const user = req.body
    const newUser = {
        id: Date.now(),
        fName: user.fullName.split(' ')[0],
        lName: user.fullNmae.split(' ')[1],
        age: user.age,
        profession: user.profession
    }
    users.push(newUser),
    res.json(users[users.length-1])
})

app.get('/users/:id', (req, res) =>{
    /* const user = users.find(u => u.id === +req.params.id)
    if(!user){
        res.json({error: "user not found"})
        return null
    }
    res.json(user) */

    const idx = users.findIndex(u => u.id === +req.params.id)
      if(idx === -1){
          res.json({error: "user not found"})
          return null
      }
      res.json(user[idx])
})

app.put('/users/:id', (req, res) =>{
    const idx = users.findIndex(u => u.id === +req.params.id)
      if(idx === -1){
          res.json({error: "user not found"})
          return null
      }
      user[idx] = {...users[idx], ...req.body}
      res.json(users[idx])
})

app.delete('/users/:id', (req, res) =>{
    const idx = users.findIndex(u => u.id === +req.params.id)
      if(idx === -1){
          res.json({error: "user not found"})
          return null
      }
      const user =users[idx]
      users.splice(idx,1)
      res.json(user)
})

app.listen(PORT, ()=>{
    console.log(`Starting on ${PORT}`)
})