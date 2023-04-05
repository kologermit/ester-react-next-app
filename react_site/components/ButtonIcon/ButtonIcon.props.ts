import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import up from '../Svg/up.svg';
import close from '../Svg/close.svg';
import menu from '../Svg/menu.svg';

export const icons = {
	up,
	close,
	menu
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: IconName;
	appearance: 'primary' | 'white';
}