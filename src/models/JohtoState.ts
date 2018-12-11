import { Account } from './Account';
import { ToastStatus } from '@/models/ViewHelpers';

export class JohtoState {
  constructor(public accounts: Account[],
              public toastStatus: ToastStatus,
              public toastMessage: string,
              public toastVisible: boolean) {}
}
