import React, { HTMLProps, ReactNode } from 'react';
import { Text } from './styles'

export interface TextProps {
    variant: string;
    children?: string;
    fontColor?: string;
    uppercase?: boolean;
    textdecoration?: string;
    textShadow?: string;
}

export const TextInput: React.FC<TextProps> = ({ children, variant, fontColor, uppercase, textdecoration, textShadow}) => {

    function handleSentence(): string {
        if (uppercase) return children.toUpperCase();
        return children;
    }
    return (
       <Text data-testid="text-component" fontColor={fontColor} variant={variant} textdecoration={textdecoration} textShadow={textShadow}>{handleSentence()}</Text> 
    )
}

export default TextInput;