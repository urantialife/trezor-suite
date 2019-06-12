import { isDev } from '@suite-utils/build';
import * as STORAGE from '@wallet-actions/contants/localStorage';
import suiteConfig from '@suite-config/index';

const VERSION = 1;
// react-native https://facebook.github.io/react-native/docs/asyncstorage.html

// next.js https://medium.com/@filipvitas/indexeddb-with-promises-and-async-await-3d047dddd313
// TODO: implement upgrade
const onUpgrade = (db: IDBDatabase) => {
    db.createObjectStore('devices', { keyPath: 'id', autoIncrement: true });
};

const openDB = async () => {
    const idb =
        window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB ||
        window.shimIndexedDB;
    // idb.onversionchange = onUpgrade;
    const request = await idb.open('trezor-suite', VERSION);
    return request;
};

const loadNetworks = async (db: IDBDatabase) => {
    const { networks } = suiteConfig;
    const config = {
        networks: null,
    };

    // remove testnets from config networks
    if (!isDev()) {
        config.networks = networks.filter(n => !n.testnet);
    }
};

export const init = async () => {
    const db = await openDB();

    const networks = await loadNetworks(db);

    dispatch({
        type: STORAGE.READY,
        networks,
    });

    // db.close();
};
