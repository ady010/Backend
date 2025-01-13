const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    const formatedDate = [
        {
            name:'a',
            email:'a@a.com',
        },
        {
            name:'b',
            email:'b@a.com',
        }
    ]
    res.render('index',{
        date: formatedDate
    })
})

app.get('*', (req, res)=>{
    res.send('404 Not-found')
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})