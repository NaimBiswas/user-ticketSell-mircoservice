import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose, { mongo } from "mongoose"
import app from '../index'

let mongo: any;
beforeAll(async () => {
    mongo = new MongoMemoryServer()
    const mongoURL = await mongo.getUri()
    await mongoose.connect(mongoURL)

});
beforeEach(async () => {
    await mongoose.connection.db.dropDatabase()
})

afterAll(async () => {
    await mongo.stop()
    await mongoose.connection.close()
})
