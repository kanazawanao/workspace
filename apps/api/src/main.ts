import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const options = new DocumentBuilder()
    .setTitle('workspace')
    .setDescription('The workspace API description')
    .setVersion('1.0')
    .addTag('workspace')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'accessToken'
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/');
  });
}

bootstrap();
