import React from 'react';
import { Switch } from '@trezor/components';
import { useSelector, useActions } from '@suite-hooks';
import { ActionColumn, SectionItem, TextColumn } from '@suite-components/Settings';
import { toggleTor as toggleTorAction } from '@suite-actions/suiteActions';
import { Translation } from '@suite-components';
import { useAnchor } from '@suite-hooks/useAnchor';
import { SettingsAnchor } from '@suite-constants/anchors';

export const Tor = () => {
    const { tor } = useSelector(state => ({
        tor: state.suite.tor,
    }));
    const { toggleTor } = useActions({
        toggleTor: toggleTorAction,
    });
    const { anchorRef, shouldHighlight } = useAnchor(SettingsAnchor.Tor);

    return (
        <SectionItem data-test="@settings/tor" ref={anchorRef} shouldHighlight={shouldHighlight}>
            <TextColumn
                title={<Translation id="TR_TOR_TITLE" />}
                description={
                    <Translation
                        id="TR_TOR_DESCRIPTION"
                        values={{
                            lineBreak: <br />,
                        }}
                    />
                }
                buttonLink="https://www.torproject.org/"
            />
            <ActionColumn>
                <Switch
                    dataTest="@settings/general/tor-switch"
                    isChecked={tor}
                    onChange={() => {
                        toggleTor(!tor);
                    }}
                />
            </ActionColumn>
        </SectionItem>
    );
};
