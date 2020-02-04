import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const server = async function () {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
server();

/**ANCHOR 
 * Nest is a platform-agnostic framework. 
 * This means you can develop reusable logical parts that can be 
 * used across different types of applications. For example, 
 * most components can be re-used without change across different 
 * underlying HTTP server frameworks (e.g., Express and Fastify), 
 * and even across different types of applications 
 * (e.g., HTTP server frameworks, Microservices with different transport layers, and Web Sockets).
 */

 /**NOTE 
  * We can divide the overall lifecycle into three phases: 
  * initializing, running and terminating. 
  * Using this lifecycle, you can plan for appropriate 
  * initialization of modules and services, manage active 
  * connections, and gracefully shutdown your application 
  * when it receives a termination signal.
  */