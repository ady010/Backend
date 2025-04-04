const express = require("express")
const app = express()

app.set("view engine", 'ejs')



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


app.use((req,res,next)=>{
    console.log('This is middleware');
    return next()
})

app.get('/', (req, res)=>{
    res.render("index")
})
app.get('/about',(req, res)=>{
    res.send("about page")
})
app.post('/getdata', (req,res)=>{
    console.log(req.body);
    res.send('Recieved')
})
app.listen(3000)