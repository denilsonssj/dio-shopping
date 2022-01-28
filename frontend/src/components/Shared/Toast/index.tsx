import { toast } from 'react-toastify';
import { Toast } from './styles';

interface ShowToastProps {
    type: string;
    message: string;
}

export enum ToastStatus {
  SUCCESS = 'success',
  WARN = 'warn',
  ERROR = 'error',
  INFO = 'info',
};

export const showToast = ({ type, message }: ShowToastProps) => {
    switch (type) {
      case ToastStatus.SUCCESS:
        toast.success(message);
        break;
      case ToastStatus.WARN:
        toast.warn(message);
        break;
      case ToastStatus.ERROR:
        toast.error(message);
        break;
      default:
        toast.info(message);
    }
};

export const ToastAnimated = () => (<Toast />);
