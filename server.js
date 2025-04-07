import express from 'express'
import mongoose from 'mongoose'
//controller wale file ko import kare
import {shortUrl, getOriginalUrl} from './Controllers/url.js'


const app = express();
//aap k pass url body se ata hy tho aap ko url ko encoded krna hota hy
app.use(express.urlencoded({extended: true}))

//iss trha se aap apne mongoDB ko connect kr sakty hy.
mongoose.connect("yaha pr apne mongoDB ka uri string dena hy",
{dbName: "url_shortner"},
).then(()=>console.log("MongoDB Connected......")).catch((err)=>console.log(err))

//Rendering ejs File
app.get('/', (req,res)=>{
    res.render("index.ejs", {shortUrl:null});
})


//ab hum wo route banayenge k jub user short pr click karega tho url shor hojaye or ye post me hoga.
//shorting url logic below app.post('/short',shortUrl)
app.post('/short',shortUrl)
    //iss k andar k logic ko hum controller me likhenge

//Note: hamare pass short url se wo cheez open nhi hoti hy tho oss k liye hum log dynamic routing ka use karenge.
//redirect to original url using short code with the help of Dynamic Routing
app.get('/:shortCode',getOriginalUrl);


const port = 3000;

app.listen(port,()=>console.log(`your server is running on port ${port}`))