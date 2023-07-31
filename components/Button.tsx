import { MouseEventHandler } from "react";

type Props = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: 'button' | 'submit' | 'reset';
  textColor?: string;
  bgColor?: string;
}

const Button = ({ title, leftIcon, rightIcon, handleClick, isSubmitting, type, textColor, bgColor }: Props) => {
  return (
    <button
      type={type || 'button'}
      disabled={isSubmitting}
    >

    </button>
  )
}

export default Button