import {
    Device
} from '@trezor/connect';

const releases: Array<Device.FirmwareRelease> = [];

export const parseFirmware = (json: JSON): void => {
    const obj: Object = json;
    Object.keys(obj).forEach(key => {
        const release = obj[key];
        releases.push({ ...release });
    });
};

export const checkFirmware = (features?: Device.Features, firmware?: Array<number>): Device.FirmwareStatus => {

    if (!features) return 'unknown';

    const fw = firmware ? firmware : [features.major_version, features.minor_version, features.patch_version];
    // indication that firmware is not installed at all. This information is set to false in bl mode. Otherwise it is null.
    if (features.firmware_present === false) {
        return 'none';
    }
    // for t1 in bootloader, what device reports as firmware version is in fact bootloader version, so we can
    // not safely tell firmware version
    if (fw[0] === 1 && features.bootloader_mode) {
        return 'unknown';
    }
    // find all releases for device model
    const modelFirmware = releases.filter(r => r.version[0] === fw[0]);
    // find latest firmware for this model
    const latestFirmware = modelFirmware.filter(r => r.version[1] > fw[1] || (r.version[1] === fw[1] && r.version[2] > fw[2]));
    if (latestFirmware.length > 0) {
        // check if any of releases is required
        const requiredFirmware = latestFirmware.find(r => r.required);
        if (requiredFirmware) {
            return 'required';
        } else {
            return 'outdated';
        }
    }
    return 'valid';
};

export const getLatestRelease = (fw: Array<number>) => {
    // find all releases for device model
    const modelFirmware = releases.filter(r => r.version[0] === fw[0]);
    // find latest firmware for this model
    return modelFirmware.find(r => r.version[1] > fw[1] || (r.version[1] === fw[1] && r.version[2] > fw[2]));
};
