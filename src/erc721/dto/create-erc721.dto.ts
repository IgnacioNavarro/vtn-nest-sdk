export class CreateErc721Dto {

    name: string;
    symbol: string;
    network: string;
    gasLimit: number;
    alias: string;

    constructor(name: string, symbol: string, network: string, gasLimit: number, alias: string) {
        this.name = name;
        this.symbol = symbol;
        this.network = network;
        this.gasLimit = gasLimit;
        this.alias = alias;
    }

}
