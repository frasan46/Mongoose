import mongoose from 'mongoose'



const URI_MONGO = process.env.URI_MONGO

const contectarDB = async ()=> {
  try{
    await mongoose.connect("mongodb+srv://frasan:Enric@cluster0.j8yic.mongodb.net/NextForEnric" , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: true,
      useCreateIndex: true
    })
    console.log("puta madre loco ")
  }
  catch(error){
    console.log(error)
    process.exit(1)
  }
}

export default contectarDB
