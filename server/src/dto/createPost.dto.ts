import {IsString, IsDateString} from 'class-validator'
import 'reflect-metadata'

class CreatePostDto {
  @IsString()
  // @ts-ignore: disable strict class initialization
  summary: string

  @IsString()
  // @ts-ignore: disable strict class initialization
  body: string

  @IsString()
  // @ts-ignore: disable strict class initialization
  username: string

  @IsDateString()
  // @ts-ignore: disable strict class initialization
  createdOn: date
}

export default CreatePostDto