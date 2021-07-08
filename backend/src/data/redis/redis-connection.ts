import redis from 'redis';
import {
  redisPort,
  redisHost,
  redisPassword,
} from '../../../config/redis.config';

const port = parseInt(redisPort || '') || 0;
const redis_client = redis.createClient(port, redisHost);

if (redisPassword) {
  redis_client.auth(redisPassword);
}
redis_client.on('connect', function () {
  console.log('redis client connected');
});

redis_client.on('error', function () {
  console.log('redis connection failed');
});

export default redis_client;
