import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateVocabularyDto {
  @IsNotEmpty({ message: 'Tiêu đề không được để trống' })
  @IsString({ message: 'Tiêu đề sai định dạng' })
  title: string;

  @IsNotEmpty({ message: 'Dịch nghĩa không được để trống' })
  @IsString({ message: 'Dịch nghĩa sai định dạng' })
  sub: string;
}
