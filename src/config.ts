export default {
    runtime: {
        port: Number(process.env.PORT) || 3000,
        host: process.env.HOST || 'localhost',
    },
    jwt: {
        secret: process.env.JWT_SECRET || '',
    },
    db: {
        mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/base-project'
    }
}