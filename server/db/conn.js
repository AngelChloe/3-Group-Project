import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/3-Group-Project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection

// const connectDB = async () => {
//     try {
//         //database Name
//         const databaseName ='3-Group-Project';
//         const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${3-Group-Project}`, { 
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//     });
//         console.log(`Database connected : ${con.connection.host}`)
//     } catch (error) {
//         console.error(`Error: ${error.message}`)
//         process.exit(1)
//     }
// }

// export default connectDB