import contectarDB from "../lib/dbConnect"
import Pokemon from "../../models/Pokemon"

export default async function hadler (req,res){

await contectarDB()
console.log("hello")



const {method} = req
switch(method){
  case "POST":
    console.log("abajo va el req.body de locosa")
    try{
      console.log(req.body)
      const poke = new Pokemon({Pokemon:req.body})

      console.log("3")

      await poke.save()
      console.log("awaur")

      return res.status(200),json({success:true,poke})
    }catch(error){
      return "oh no"
    }
}

}