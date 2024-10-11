import {
    IsNotEmpty,
    IsString
} from 'class-validator';


export class CreateChapterDto {
    @IsNotEmpty({ message: 'Tiêu đề không được để trống' })
    @IsString({ message: 'Tiêu đề sai định dạng' })
    title: string;

    @IsNotEmpty({ message: 'Mô tả không được để trống' })
    @IsString({ message: 'Mô tả sai định dạng' })
    description: string;
}
