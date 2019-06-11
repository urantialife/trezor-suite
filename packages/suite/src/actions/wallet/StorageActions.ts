import * as STORAGE from '@wallet-actions/constants/storage';
import { httpRequest } from '@wallet-utils/networkUtils';
import * as buildUtils from '@suite-utils/build';

import Erc20AbiJSON from 'static/data/ERC20Abi.json';
import AppConfigJSON from 'static/data/appConfig.json';

const loadJSON = () => async (dispatch): Promise<void> => {
    if (typeof window.localStorage === 'undefined') return;

    try {
        const config = await httpRequest(AppConfigJSON, 'json');

        // remove testnets from config networks
        if (!buildUtils.isDev()) {
            config.networks = config.networks.filter(n => !n.testnet);
        }

        const ERC20Abi = await httpRequest(Erc20AbiJSON, 'json');

        window.addEventListener('storage', event => {
            dispatch(update(event));
        });

        // load tokens
        const tokens = await config.networks.reduce(
            async (
                promise: Promise<TokensCollection>,
                network: Network
            ): Promise<TokensCollection> => {
                const collection: TokensCollection = await promise;
                if (network.tokens) {
                    const json = await httpRequest(network.tokens, 'json');
                    collection[network.shortcut] = json;
                }
                return collection;
            },
            Promise.resolve({})
        );

        dispatch({
            type: STORAGE.READY,
            config,
            tokens,
            ERC20Abi,
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: STORAGE.ERROR,
            error,
        });
    }
};
