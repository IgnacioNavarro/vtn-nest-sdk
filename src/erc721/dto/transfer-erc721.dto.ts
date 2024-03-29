export class TransferErc721Dto{

    private contractAddress: string;
    private network: string;
    private id : string;
    private to : string;
    private from : string;


    constructor(contractAddress: string, network: string, id: string, to: string, from: string) {
        this.contractAddress = contractAddress;
        this.network = network;
        this.id = id;
        this.to = to;
        this.from = from;
    }
}