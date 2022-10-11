import React  from 'react';
import { Btn } from './styles'

interface ButtonProps {
 children: React.ReactNode;
 buttonType: string;
}

export const Button = ({ children, buttonType }: ButtonProps) => {
    return (
       <Btn data-testid="button-component" buttonType={buttonType}>{children}</Btn>
    )
}

export default Button;