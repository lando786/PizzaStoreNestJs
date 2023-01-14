import { NestFactory } from '@nestjs/core';
import { PizzasModule } from './modules/pizzas.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = 3000;
const url = `http://localhost:${port}`;
async function bootstrap() {
  const app = await NestFactory.create(PizzasModule);

  const config = new DocumentBuilder()
    .setTitle('Pizzas Example')
    .setDescription('THE pizza api')
    .setVersion('1.0')
    .addTag('pizza')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log(`app listening on ${url}`);
  console.log(`Swagger documentation found on ${url}/api`);
  await app.listen(port);
}
bootstrap();
