import { ApiProperty } from '@nestjs/swagger';
import { ILogin } from '@workspace/api-interfaces';

export class Login implements ILogin {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
