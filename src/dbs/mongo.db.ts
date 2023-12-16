
import mongoose, { ConnectOptions } from 'mongoose';
import config from '../config';

export const connectMongoDB = async () => {
    try {
        const mongoURI = config.db.mongoURI;

        await mongoose.connect(mongoURI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        } as ConnectOptions);

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the application on connection error
    }
};