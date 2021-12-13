import  mongoose  from "mongoose";

const PokemonGuardar = new mongoose.Schema({
    Pokemon:{
        type: Number,
            require:[true,"pasa cosas loco"]
    },
    User:{
        type: String
      
        
    }

})

export default mongoose.models.aaa || mongoose.model("aaa", PokemonGuardar)