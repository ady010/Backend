
const app =  require('./src/app');
require('./src/db/db')

app.listen(3000,()=>{
    console.log('The port is running on 3000');
})