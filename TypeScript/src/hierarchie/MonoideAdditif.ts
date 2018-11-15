import { SemiGroupeAdditif } from './SemiGroupeAdditif';
import { UnifereAddition } from './UnifereAddition';

export interface MonoideAdditif<T> extends SemiGroupeAdditif<T>, UnifereAddition<T> {
}
