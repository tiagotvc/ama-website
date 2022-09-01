import React from 'react';
import { Text } from './styles'

interface TextProps {
    alias: string;
    children: React.ReactNode;
    color?: string;
}

export const TextInput = ({ children, alias, color = "black" }:TextProps) => {
    return (
       <Text data-testid="text-component" color={color} alias={alias}>{children}</Text> 
    )
}

export default TextInput;