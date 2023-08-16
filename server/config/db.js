import { connect } from 'mongoose';

const connectDB = async () => {
    try {
      const conn = await connect(`mongodb+srv://govind:govind123@cluster0.szc6e.mongodb.net/prakriti`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  
  export default connectDB