export class Erc721 {

    private name: string;
    private symbol: string;
    private network: string;
    private gasLimit: number;
    private alias: string;


    constructor(name: string, symbol: string, network: string, gasLimit: number, alias: string) {
        this.name = name;
        this.symbol = symbol;
        this.network = network;
        this.gasLimit = gasLimit;
        this.alias = alias;
    }

    public getName(): string {
        return this.name;
    }

    public getSymbol(): string {
        return this.symbol;
    }

    public getNetwork(): string {
        return this.network;
    }

    public getGasLimit(): number {
        return this.gasLimit;
    }

    public getAlias(): string {
        return this.alias;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setSymbol(symbol: string): void {
        this.symbol = symbol;
    }

    public setNetwork(network: string): void {
        this.network = network;
    }

    public setGasLimit(gasLimit: number): void {
        this.gasLimit = gasLimit;
    }

    public setAlias(alias: string): void {
        this.alias = alias;
    }

    


}
