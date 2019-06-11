import * as STORAGE from '@wallet-actions/constants/storage';
import { State } from '@wallet-types/index';

const initialState: State = {
    initialized: false,
    error: undefined,
    config: {
        networks: [],
        fiatValueTickers: [],
    },
    ERC20Abi: [],
    tokens: {},
};

export default function localStorage(state: State = initialState, action: Action): State {
    switch (action.type) {
        case STORAGE.READY:
            return {
                ...state,
                initialized: true,
                config: action.config,
                ERC20Abi: action.ERC20Abi,
                tokens: action.tokens,
                error: null,
            };

        case STORAGE.ERROR:
            return {
                ...state,
                error: action.error,
            };

        default:
            return state;
    }
}
