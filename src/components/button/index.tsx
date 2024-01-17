import { FC, ButtonHTMLAttributes } from 'react';
import btn from './index.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: FC<ButtonProps> = ({ label, ...config }) => {

  return (
    <button {...config} className={`${btn.main} ${btn['primary']}`}>
      {label ? label : 'Submit'}
    </button>
  );
};

export default Button;
