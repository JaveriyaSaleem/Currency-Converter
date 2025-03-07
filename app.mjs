import express from 'express'
const app = express()
const port = 3000
let usersData = []
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
usersData.push({...req.body, id: new Date().getTime()})
  res.send("data added successfully")
})
app.get('/allusers', (req, res) => {
  res.send(usersData)
})
// deleting using filter and find 
app.delete('/user/:id',(req,res)=>{
  const user = usersData.find((user) => user.id === parseInt(req.params.id))
  if(user){
    usersData = usersData.filter((user)=> user.id !== parseInt(req.params.id))
    res.send("User deleted successfully")
  }
  else{
    res.send("User not found")
  }
})

app.put('/user/:id',(req,res)=>{
  const user = usersData.find((user)=> user.id === parseInt(req.params.id))
  if(user){
    const index = usersData.indexOf(user)
    usersData[index]={...user,...req.body}
    res.send("User updated successfully")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// filter method in javascript
let array = ['apple','mango','banana','orange','grapes']
array = array.filter((fruit )=> fruit !== 'banana')
console.log(array)