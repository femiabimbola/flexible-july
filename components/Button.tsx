import Image from "next/image";
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


// ${isSubmitting ? 'bg-black/50' : bgColor || 'bg-primary-purple'}

const Button = ({ title, leftIcon, rightIcon, handleClick, isSubmitting, type, textColor, bgColor }: Props) => {
  return (
    <button
      type={type || 'button'}
      disabled={isSubmitting}
      className={`flexCenter gap-3 px-4 py-3 rounded-xl text-sm font-medium
      ${textColor ? textColor : 'text-white'}
      ${isSubmitting ? 'bg-black/50' : bgColor ? bgColor : 'bg-primary-purple'}
      max-md:w-full
      `}
      onClick={handleClick}
    >
      {leftIcon && <Image src={leftIcon} width={14} height={14} alt='left' />}
      {title}
      {rightIcon && <Image src={rightIcon} width={14} height={14} alt='right' />}
    </button>
  )
}

export default Button