import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MockAuthService } from './mock-auth.service';
import { Test, TestingModule } from '@nestjs/testing';
describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useClass: MockAuthService }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
