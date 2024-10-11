import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateVocabularyDto {
  @IsNotEmpty({ message: 'Tiêu đề không được để trống' })
  @IsString({ message: 'Tiêu đề sai định dạng' })
  title: string;

  @IsNotEmpty({ message: 'Dịch nghĩa không được để trống' })
  @IsString({ message: 'Dịch nghĩa sai định dạng' })
  sub: string;

  @IsNotEmpty({ message: 'Chapter Id không được để trống' })
  @IsNumber({}, { message: 'Chapter Id sai định dạng' })
  chapterId: number;
}
