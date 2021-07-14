import { ENV } from '~/common/enums';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Fyrst API',
      version: '1.0.0',
      description: 'Some desc :)',
    },
    servers: [
      {
        url: 'http://localhost:' + ENV.APP.SERVER_PORT,
      },
    ],
  },
  apis: ['./src/swagger-options/swagger-docs/*.ts'],
};

const specs = swaggerJSDoc(swaggerOptions);

export { specs };
