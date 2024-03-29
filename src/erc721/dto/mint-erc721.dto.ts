export class MintErc721Dto {
    
    private recipientAdress: string;
    private tokenId: string;
    private ipfsUri: string;
    private ipfsHash: string;
    private network: string;
    private contractAddress: string;
    private royaltyPercentage: number;
    private gas: number;


    constructor(recipientAdress: string, tokenId: string, ipfsUri: string, ipfsHash: string, network: string, contractAddress: string, royaltyPercentage: number, gas: number) {
        this.recipientAdress = recipientAdress;
        this.tokenId = tokenId;
        this.ipfsUri = ipfsUri;
        this.ipfsHash = ipfsHash;
        this.network = network;
        this.contractAddress = contractAddress;
        this.royaltyPercentage = royaltyPercentage;
        this.gas = gas;
    }

}