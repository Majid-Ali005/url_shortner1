//Mode k beghair aap database me data ko store nhi kr sakty hy.
//aap ka project already mongoDb k sath connect howa hona chaye hy.

import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    // // htttp://localhost:3001/QAAHoI9Gm
    // ye code ka variable iss wja se liya hy k agr aap dekho tho localhost k baad jo aap k pass code a rha hy
    // QAAHoI9Gm ye change b ho sakta hy tho ye code aap k pass mongodb se hi a rha hy tho iss wja se hum shortCode ka b variable banayenge
    shortCode:String,
    //ye long url ko b tho rakhna hi hy na tho oss k liye hum ne iss variable ko banaya hy.
    longUrl:String
})

export const Url = mongoose.model("shortURL",urlSchema)