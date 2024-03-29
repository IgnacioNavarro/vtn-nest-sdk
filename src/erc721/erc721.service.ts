import { Injectable } from '@nestjs/common';
import { CreateErc721Dto } from './dto/create-erc721.dto';
import { UpdateErc721Dto } from './dto/update-erc721.dto';
import { MintErc721Dto } from './dto/mint-erc721.dto';
import { TransferErc721Dto } from './dto/transfer-erc721.dto';

@Injectable()
export class Erc721Service {

  private readonly baseUrl: string = 'https://api.vottun.tech/';
  private readonly appId: string;
  private readonly apiKey: string;

  private createRequest(enpoint: string, bodyObject: Object, method: string) {

    return fetch(enpoint, {
      method: 'POST',
      body: JSON.stringify(bodyObject),
      headers: {
        'Content-Type': 'application/json',
        'x-application-vkn': this.appId,
        'Authorization': "Bearer" + this.apiKey
      }
    })
  }


  deploy(createErc721Dto: CreateErc721Dto) {
    return this.createRequest(this.baseUrl + 'erc/v1/erc721/deploy', createErc721Dto, 'POST');
  }


  mint(mintErc721Dto: MintErc721Dto) {
    return this.createRequest(this.baseUrl + 'erc/v1/erc721/mint', mintErc721Dto, 'POST');
  }

  transfer(transferErc721Dto: TransferErc721Dto) {
    return this.createRequest(this.baseUrl + 'erc/v1/erc721/transfer', transferErc721Dto, 'POST');
  }

  balanceOf(address: string) {
    return this.createRequest(this.baseUrl + 'erc/v1/erc721/balanceOf/' + address, {}, 'GET');
  }

  ownerOf(tokenId: string) {
    return this.createRequest(this.baseUrl + 'erc/v1/erc721/ownerOf/' + tokenId, {}, 'GET');
  }

  tokenURI(tokenId: string) {
    return this.createRequest(this.baseUrl + 'erc/v1/erc721/tokenURI/' + tokenId, {}, 'GET');
  }


}
