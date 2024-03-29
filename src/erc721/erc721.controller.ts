import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Erc721Service } from './erc721.service';
import { CreateErc721Dto } from './dto/create-erc721.dto';
import { MintErc721Dto } from './dto/mint-erc721.dto';
import { TransferErc721Dto } from './dto/transfer-erc721.dto';

@Controller('erc721')
export class Erc721Controller {
  constructor(private readonly erc721Service: Erc721Service) {}

  @Post("/deploy")
  create(@Body() createErc721Dto: CreateErc721Dto) {
    return this.erc721Service.deploy(createErc721Dto);
  }


  @Post("/mint")
  mint(@Body() mintErc721Dto: MintErc721Dto) {
    return this.erc721Service.mint(mintErc721Dto);
  }

  @Post("/transfer")
  transfer(@Body() transferErc721Dto: TransferErc721Dto) {
    return this.erc721Service.transfer(transferErc721Dto);
  }

  @Get("/balanceOf/:address")
  balanceOf(@Param('address') address: string) {
    return this.erc721Service.balanceOf(address);
  }

  @Get("/ownerOf/:tokenId")
  ownerOf(@Param('tokenId') tokenId: string) {
    return this.erc721Service.ownerOf(tokenId);
  }

  @Get("/tokenURI/:tokenId")
  tokenURI(@Param('tokenId') tokenId: string) {
    return this.erc721Service.tokenURI(tokenId);
  }
}
