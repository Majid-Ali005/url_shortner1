//sub se pehly models k file ko import karo q k ossi hi k variable k upar hum logic lagayenge.
import { Url } from "../Models/Url.js" //.js lagana na boliye
//import kare shortid library ko jiss ko aap ne install kiya tha
import shortid from "shortid";


export const shortUrl = async (req,res) =>{
    //ab jo input me url hoga oss ko tho humme lena hoga tho oss ko lene k liye aap req.body ka use karenge q k aap issi hi k madad se oss ko le sakty hy
    //iss me body.longUrl ye longUrl aap k input me jo name diay hy wo hoga. zaroor yaad rakhna. name="longUrl" ye wala
    const longUrl = req.body.longUrl;
    //ye shorid.generate(); aap k pass aik function hota hy jo k aap ko short id ko generate krne deta hy
    const shortCode = shortid.generate();
    //jaise aap k pass kisi na kisi server pr url chalta hy tho wo walal url hum ne yaha pr banaya hy
     const shortUrl = `http://localhost:3000/${shortCode}`//short code aap k locahost k baad ayega.
     //jub aap iss app ko live krde deploy tho tub aap ko locahost me aap ko url milta hy wo danlana partha hy.
     //or aap ka host jiss pr chal rha hy wo aap ko yaha pr dena hy port jaise 3000 etc.


     //save to database mongoDb me store krne k liye niche dekhiye
     // new Url ye wala url jo aap ne models se import kiya howa hy wo hy aap k pass
     //yaha pr jo url hamare pass long k perspective me arha hy short k form me wo etc database me save hoga. after complete aap dekh b sakty hy apne database me.
     const newUrl = new Url({shortCode,longUrl})
     await newUrl.save();
     //await ko aap tub hi use kr sakty hy jub thak aap function ko async na banaye
     console.log("Short Saved = ", newUrl);
//bhai iss render ka simple matlab ye hy k jub submit pr click hojaye or url short hojaye tho ye phir issi hi file me return hojaye etc.
     res.render("index.ejs",{shortUrl});

     //url tho aap k pass yaha thak short hojayega magr wo open nhi hota hy tho oss k liye dekhe.
     //tho hum simple sa logic likhenge database se k aap ko jo short url hy oss k response me jo aap k pass long url hy oss ko dede or open hojayega simple


}

//ab me jo function dynamic route me donga tho oss ko me yaha pr niche define karonga q k logic aap k pass controller me hi likhi jati hy.
//iss function se hum database se original url ko find karenge.

export const getOriginalUrl = async (req,res)=>{
    //iss function k andar hum database se original url ko find krne ka code likhenge
    // res.send("<h1>Hello world</h1>");
    // http://localhost:3000/39AVOlehg --> 39AVOlehg iss ko params boltay hy tho kisi b url ko lene k liye hum log params ka use krthy hy. matlab jo url short hojata hy oss ko lene k liye params ka use kiya jata hy.
    const shortCode = req.params.shortCode
    //yaha pr ye shortCode aap k dynamic route ka name hoga

     // find on database
     //ye database se url ko find krne ka code hy. yaha pr wahi mongoDb ki query likhi hy etc. tho mongoDb ko zaroor parhna.
  const originalUrl = await Url.findOne({shortCode})
  //findOne iss wja se kiya hy q k mere ko aik chaye hy on click k baad etc.
  if(originalUrl){
    res.redirect(originalUrl.longUrl);
  }
  //bhai iss if k condition ka matlab hy k jub aap ko OriginalUrl mil jaye tho phir oss ko redirect krlena. jo aap k pass user ne short krne k liye longUrl diya tha oss pr. tho ye database se find kr k aap k short url se match karega or phir redirect krdega easily etc.
  else{

      res.json({ message:"Invalid shortcode" });
  }

}


//dekhe url ko short krne k liye humme short unique id chaye hoti hy tho oss k liye aap aik libary ko use kr sakty hy tho oss k liye aap shortid libarary ko use kr sakty hy.
// Terminal: npm i shortid
