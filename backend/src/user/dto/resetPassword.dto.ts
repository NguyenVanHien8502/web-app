import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ResetPasswordDto {
  email: string;

  @ApiProperty({ example: 'hien123456' })
  @IsNotEmpty({ message: 'Vui lòng nhập mật khẩu mới' })
  newPassword: string;
}
