import { ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'redux';
import { FetchActionTypes } from '@suite/types/onboarding/fetch';
import { FirmwareUpdateActionTypes } from '@suite/types/onboarding/firmwareUpdate';
import { NewsletterActionTypes } from '@suite/types/onboarding/newsletter';
import { RecoveryActionTypes } from '@suite/types/onboarding/recovery';
import { OnboardingActionTypes } from '@suite/types/onboarding/onboarding';
import * as Connect from '@suite/types/onboarding/connect';
// todo: ConnectActionTypes
import ReducersState from '../reducers';

export type State = ReturnType<typeof ReducersState>;

export type Action =
    | FetchActionTypes
    | FirmwareUpdateActionTypes
    | NewsletterActionTypes
    | RecoveryActionTypes
    | OnboardingActionTypes
    | Connect.ActionTypes;

export type Dispatch = ThunkDispatch<State, any, Action>;

export type GetState = () => State;
