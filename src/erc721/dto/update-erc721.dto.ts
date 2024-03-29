import { PartialType } from '@nestjs/mapped-types';
import { CreateErc721Dto } from './create-erc721.dto';

export class UpdateErc721Dto extends PartialType(CreateErc721Dto) {}
