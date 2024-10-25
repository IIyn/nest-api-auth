import { CreateUser } from '../schemas/createUser.schema';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto implements CreateUser {
  @ApiProperty({
    example: 'email@example.com',
  })
  email: string;

  @ApiProperty({
    example: 'johndoe',
  })
  username: string;

  @ApiProperty({
    example: 'password',
  })
  password: string;

  @ApiProperty({
    example: '1990-01-01',
  })
  birthday: string;

  hydrate(data: CreateUser) {
    return {
      email: data.email,
      username: data.username,
      password: data.password,
      birthday: new Date(data.birthday),
    };
  }
}
