import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail({}, { message: 'ایمیل درست حسابی وارد کن عامو' })
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], { message: 'valid role required' })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
