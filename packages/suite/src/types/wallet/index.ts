export interface NetworkFeeLevel {
    name: string;
    value: string; // ETH: gasPrice in gwei; XRP: fee in drops; BTC: sat/b
    multiplier: number; // ETH specific
    blocks: number; // BTC specific
    recommended: boolean;
}

export interface Network {
    order: number;
    isHidden?: boolean;
    type: string;
    name: string;
    testnet?: boolean;
    shortcut: string;
    symbol: string;
    bip44: string;
    defaultGasLimit: number;
    defaultGasLimitTokens: number;
    defaultGasPrice: number;
    chainId: number; // ETH specific
    explorer: {
        tx: string;
        address: string;
    };
    tokens: string;
    decimals: number;
    fee: {
        defaultFee: string;
        minFee: string;
        maxFee: string;
        defaultGasLimit: string; // ETH specific
        defaultGasLimitTokens: string; // ETH specific
        levels?: [NetworkFeeLevel];
    };
    backends: [
        {
            name: string;
            urls: [string];
        },
    ];
    web3: [string];
}

export interface NetworkToken {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
}

export interface FiatValueTicker {
    network: string;
    url: string;
}

export interface Config {
    networks: [] | [Network];
    fiatValueTickers: [] | [FiatValueTicker];
}

export interface State {
    initialized: boolean;
    error?: string;
    config: Config;
    ERC20Abi: [];
    tokens: any;
}

// const initialState: State = {
//     initialized: false;
//     error: null;
//     config: {
//         networks: [];
//         fiatValueTickers: [];
//     };
//     ERC20Abi: [];
//     tokens: {};
// };