import { Module } from '@nestjs/common';
import { Erc721Service } from './erc721.service';
import { Erc721Controller } from './erc721.controller';

@Module({
  controllers: [Erc721Controller],
  providers: [Erc721Service],
})
export class Erc721Module {}
