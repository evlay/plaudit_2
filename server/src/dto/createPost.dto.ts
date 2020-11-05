import {IsString} from 'class-validator'

export class CreatePostDto {
  @IsString()
  // @ts-ignore: disable strict class initialization
  summary: string

  @IsString()
  // @ts-ignore: disable strict class initialization
  body: string

  @IsString()
  // @ts-ignore: disable strict class initialization
  username: string
}