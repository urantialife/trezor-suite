import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';

import { Icon, CryptoIcon, FlagIcon } from '@trezor/icons';
import {
    Text,
    Box,
    Button,
    NumPadButton,
    Hint,
    SearchInput,
    Radio,
    CheckBox,
    Chip,
    Switch,
    ListItem,
    SelectableListItem,
    BottomModal,
} from '@suite-native/atoms';
import { prepareNativeStyle, useNativeStyles } from '@trezor/styles';
import { TypographyStyle } from '@trezor/theme';

const backgroundStyle = prepareNativeStyle<{ isDarkMode: boolean }>(
    ({ colors, spacings }, { isDarkMode }) => ({
        backgroundColor: isDarkMode ? colors.black : colors.white,
        padding: spacings.lg,
        marginTop: 0,
        flex: 1,
    }),
);

const typographyItems: TypographyStyle[] = [
    'titleLarge',
    'titleMedium',
    'titleSmall',
    'highlight',
    'body',
    'callout',
    'hint',
    'label',
];
export const DemoScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [inputText, setInputText] = useState<string>('');
    const { applyStyle } = useNativeStyles();
    const [radioChecked, setRadioChecked] = useState('second');
    const [isCheckBox1Checked, setIsCheckBox1Checked] = useState(false);
    const [isCheckBox2Checked, setIsCheckBox2Checked] = useState(true);
    const [isCheckBox3Checked, setIsCheckBox3Checked] = useState(false);
    const [isCheckBox4Checked, setIsCheckBox4Checked] = useState(true);
    const [isChip1Selected, setIsChip1Selected] = useState<boolean>(false);
    const [isChip2Selected, setIsChip2Selected] = useState<boolean>(false);
    const [isSwitchActive, setIsSwitchActive] = useState<boolean>(true);
    const [isSwitch2Active, setIsSwitch2Active] = useState<boolean>(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const handleRadioPress = (value: string) => {
        setRadioChecked(value);
    };

    return (
        <SafeAreaView style={applyStyle(backgroundStyle, { isDarkMode })}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={applyStyle(backgroundStyle, { isDarkMode })}
            >
                <View>
                    <SearchInput
                        value={inputText}
                        onChange={setInputText}
                        placeholder="Type here.."
                    />
                    <Box marginTop="lg">
                        <FlagIcon name="cz" />
                        <Chip
                            icon={<CryptoIcon name="btc" />}
                            title="Bitcoin"
                            isSelected={isChip1Selected}
                            onSelect={() => setIsChip1Selected(!isChip1Selected)}
                        />
                        <Chip
                            icon={<Icon name="settings" />}
                            title="Bitcoin"
                            isSelected={isChip2Selected}
                            onSelect={() => setIsChip2Selected(!isChip2Selected)}
                            description="inc Tokens"
                        />
                    </Box>
                    <Box marginTop="lg">
                        <Text variant="titleLarge">Title Large</Text>
                    </Box>
                    <Box>
                        <Text variant="titleMedium">Title Medium</Text>
                    </Box>
                    <Switch
                        isChecked={isSwitchActive}
                        onChange={() => setIsSwitchActive(!isSwitchActive)}
                    />
                    <Switch
                        isChecked={isSwitch2Active}
                        onChange={() => setIsSwitch2Active(!isSwitch2Active)}
                        isDisabled
                    />
                    <Button onPress={() => setIsModalVisible(true)} colorScheme="primary" size="md">
                        Show Typograhy
                    </Button>
                    <BottomModal
                        isVisible={isModalVisible}
                        onVisibilityChange={setIsModalVisible}
                        title="Typography Demo"
                        hasBackArrow
                        onBackArrowClick={() => setIsModalVisible(!isModalVisible)}
                    >
                        {typographyItems.map(item => (
                            <Box marginTop="sm" key={item}>
                                <Text variant={item}>{item}</Text>
                            </Box>
                        ))}
                    </BottomModal>
                    <Box marginVertical="md">
                        <Text>Icon:</Text>
                        <Icon name="warningCircle" size="large" color="black" />
                    </Box>
                    <Box marginVertical="md">
                        <Text>Hints:</Text>
                        <Hint variant="hint">Hned to mažem</Hint>
                        <Hint variant="error">Please enter a valid address dumbo</Hint>
                    </Box>
                    <Box marginVertical="md">
                        <Text>Radio:</Text>
                        <Box flexDirection="row" justifyContent="space-between">
                            <Radio
                                key="first"
                                value="first"
                                onPress={handleRadioPress}
                                isChecked={radioChecked === 'first'}
                            />
                            <Radio
                                key="second"
                                value="second"
                                onPress={handleRadioPress}
                                isChecked={radioChecked === 'second'}
                            />
                            <Radio
                                key="third"
                                value="third"
                                onPress={handleRadioPress}
                                isDisabled
                            />
                            <Radio
                                key="fourth"
                                value="fourth"
                                onPress={handleRadioPress}
                                isChecked
                                isDisabled
                            />
                        </Box>
                    </Box>
                    <Box marginVertical="md">
                        <Text>Checkbox:</Text>
                        <Box flexDirection="row" justifyContent="space-between">
                            <CheckBox
                                isChecked={isCheckBox1Checked}
                                onChange={() => setIsCheckBox1Checked(!isCheckBox1Checked)}
                            />
                            <CheckBox
                                isChecked={isCheckBox2Checked}
                                onChange={() => setIsCheckBox2Checked(!isCheckBox2Checked)}
                            />
                            <CheckBox
                                isChecked={isCheckBox3Checked}
                                onChange={() => setIsCheckBox3Checked(!isCheckBox3Checked)}
                                isDisabled
                            />
                            <CheckBox
                                isChecked={isCheckBox4Checked}
                                onChange={() => setIsCheckBox4Checked(!isCheckBox4Checked)}
                                isDisabled
                            />
                        </Box>
                    </Box>

                    <NumPadButton
                        value={5}
                        onPress={value =>
                            console.log('Press num pad button. No implementation yet.', value)
                        }
                    />
                    <Button
                        onPress={() => console.log('Get features to be implemented')}
                        size="md"
                        colorScheme="primary"
                    >
                        Get features
                    </Button>
                    <Box marginVertical="md">
                        <ListItem
                            iconName="placeholder"
                            title="Headline"
                            subtitle="Description of that headline"
                            hasRightArrow
                            onPress={() => console.log('Press ListItem. No implementation yet.')}
                        />
                    </Box>
                    <Box marginVertical="md">
                        <ListItem
                            iconName="warningCircle"
                            title="Some Really and I mean really Long Headline without isTextWrapped"
                            hasRightArrow
                            isTextTruncated
                        />
                    </Box>
                    <Box marginVertical="md">
                        <ListItem
                            title="Headline"
                            subtitle="Description of that headline"
                            hasRightArrow
                        />
                    </Box>
                    <Box marginVertical="md">
                        <ListItem
                            iconName="warningCircle"
                            title="Some Really and I mean really really Long Headline"
                            subtitle="Description of that headlineDescription of that headlineDescription of that headlineDescription of that headline"
                            hasRightArrow={false}
                        />
                    </Box>
                    <Box marginVertical="md">
                        <ListItem
                            iconName="placeholder"
                            title="Not wrapped example with long and I mean really long Headline"
                            subtitle="Description of that not wrapped example with long and I mean really long Headline"
                            hasRightArrow
                            isTextTruncated
                        />
                    </Box>
                    <Box marginVertical="md">
                        <SelectableListItem
                            iconName="placeholder"
                            title="Headline"
                            subtitle="Description of that headline"
                            onPress={handleRadioPress}
                            value="firstSelectable"
                            isChecked={radioChecked === 'firstSelectable'}
                        />
                    </Box>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
