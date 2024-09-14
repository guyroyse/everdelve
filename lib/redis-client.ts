import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from './config'

import { ErrorReply, RediSearchSchema, SchemaFieldTypes, SearchOptions, SearchReply } from 'redis'
export { ErrorReply, RediSearchSchema, SchemaFieldTypes, SearchOptions, SearchReply }

import { createClient } from 'redis'

/* Redis connection options */
const redisOptions = {
  socket: { host: REDIS_HOST, port: REDIS_PORT },
  password: REDIS_PASSWORD
}

/* helper type for others */
export type RedisClient = ReturnType<typeof createClient>

/* connect to Redis */
export const client = await createClient(redisOptions)
  .on('error', err => console.log('Redis Client Error', err))
  .connect()
