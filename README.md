1. npm init -y
2. npm i express ejs
3. npm i mongoose
4. add type module in package.json
5. iss k baad apna server banaye 
6. phir mongoDB ka setup krna hy mongoose connectivity etc.
7. npm i shortid

erro
mene ghalit ki thi k mongoose ko install nhi kiya tha magr me import kr k use kr rha tha magr iss se mere pass na tho error 
show ho rha tha tho aap aap ko pehly jo b cheez use kr rhy oss ko install zaroor kare.

note:
aap k pass pehly tho jo index.ejs ki file hy wo render hogi or phir aap k pass jo aap ne action me route ka name diya hy jo k short hy tho on button k click pr wo oss route pr jayega
or phir oss ko oss route me aik function name hy wo milega or shortUrl tho phir wo controller k function me jayega or oss k logic ko call karega simple.
==> q k button k sath click hone pr kuch tho chana chaye tho oss k liye hum ne jo logic hoti hy wo controller k file me banaye hy.
--> ye short or long dono url aap k database me save honge.

error
1. npm ko globally agr aap install nhi krthy hy tho phir aap ko error milega.
2. agr aap package.json me type moudul ko add krthy tho phir aap common js module import etc ko use nhi kr sakty hy
3. or ES6 module me aap ko import krthy time pore file ka name likhna hota hy jaise import {} from './firs.js' etc.
4. agr aap req.end() krthy hy tho aap ko error milta hy q k aap ko uaser k request pr response dena partha hy tho iss wja se aap ko res.end krna hota hy tha k user ko response mil saky etc.
5. Cannot GET /erro --> aap k pass ye error tub ata hy jub aap koi aise route ka name detay ho jo aap ne banaya hi na ho
6. agr aap ejs template ko use krthy hy magr oss k file ko views k folder me nhi rakhty hy tho aap k pass file fetch nhi hoge or error show hoga aap ko
7. Invalid namespace ==> ye error aap k pass tub ata jub aap database etc ka name save krthy waqt space de underscore na de eg: node js master course etc. ye wala space 


mongoDB atlas
username: 1395149aptechiic
password: 9nwjeHROpF815Bns

in Create Time Error
TypeError: Cannot destructure property 'name' of 'req.body' as it is undefined.

==> ye error aap k pass tub ata hy jub aap form me kisi aise cheez ko add krdetay hy magr oss ko full use nhi krthy hy form example agr apne form me multipart/formdata detay hy magr multer or
cloudinary ko setup nhi krthy hy tho ye aap ko error dega hi dega or bolega aap se k bhai aap jo hy multer or cloudinary ko setup kare tho ye error iss wja se ata hy etc. so don't confuse


{dbName: "aimple_Authenticaion"},
aap mongoDB ko connect krthy time jub ye name detay hy tho aap k pass mongoDB me data hojata hy create iss name se

Models/User.js
export const User = mongoose.model("Authenticate", UserSchema)
or iss jagah jaise mene Authenticate diya howa hy ye aap k pass mongoDB me collection ban kr create hojata hy jaha pr aap k data key etc hoti hy

Models/User.js
 eename : name,
      eeemail : email,
      eepassword : password
yaha pr aap k pass ye colon : k baad name wale hi hona chaye hy jo k hum form me detay hy magr ye eename,eeemail etc ye aap k User.js wala hi hoga or yehi aap k pass mongoDB me key banegi simple

NOte: aap ES6 or Cjs common js moudule ko aik sath use nhi kr sakty hy wrna aap ko error show hoga

const app = express()
const port = 300
agr aap iss ko sub se niche jaise mongoDB connection etc k niche below rakthy hy tho aap ko ReferenceError: Cannot access 'app' before initialization ye wlal error show hoga tho iss ko starting me rakhy thank you simple

ReferenceError: mongoose is not defined
ye error kuch iss trha se aap k pass tub ata hy jub aap import nhi krthy hy kisi cheez ko magr oss ko use kr rhy hotay hy etc.


Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'E:\Models\User.js' imported from E:\ExpressJS Learning\create Data Second Practice\server.js
ye wala error aap k pass tub ata hy jub aap kisi cheez ko import krthy time ghalat import karo jaise ./Models me agr aap . ko bho jao etc.


1. stanford: jub b aap code krthy time burnout hone lagy ya phir kuch samjh na aye koshish krne k baad b tho break le jo k bohat hi zaroori hy
2. jiss b problem ko aap solve kr rhy hy oss ko thora sa ankhe band kr k or flow ko samjh kr solve krne ki try kare etc.


