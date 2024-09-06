import { ThemeColor } from '../../../internal/constants/styleConstants.js';
export declare type ContainerThemePreference = 'auto' | 'dark' | 'light';

export const CONTAINER_THEME_PREFERENCES: {
  [key in ContainerThemePreference]: ContainerThemePreference;
} = {
  auto: 'auto',
  dark: 'dark',
  light: 'light',
};

export declare type ActionCallback = () => void;
export declare interface Action {
  label: string;
  callback: ActionCallback;
}

export declare type Operation = Extract<
  ThemeColor,
  'default' | 'error' | 'warning' | 'info' | 'success'
>;
export const OPERATIONS: { [key in Operation]: Operation } = {
  default: 'default',
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
};
export declare interface OperationConfiguration {
  title: string;
  message: string;
  type?: Operation;
}

export declare interface NotificationConfiguration
  extends OperationConfiguration {
  timeStamp?: Date;
  duration?: number;
  saveInHistory?: boolean;
}
