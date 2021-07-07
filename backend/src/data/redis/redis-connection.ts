import redis from 'redis';
import {
  redisPort,
  redisHost,
  redisPassword,
} from '../../../config/redis.config';

let port = 0;
if (redisPort) port = parseInt(redisPort);

const redis_client = redis.createClient(port, redisHost);
if (redisPassword) redis_client.auth(redisPassword);

redis_client.on('connect', function () {
  console.log('redis client connected');
});

export default redis_client;
