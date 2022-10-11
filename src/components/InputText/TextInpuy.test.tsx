import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import TextInput  from './index';

describe('TextInput', () => {
    it('should renders a text as header', () => {
        render(<TextInput alias='header' color='black'>O meu titulo</TextInput>)
        const textElement = screen.getByTestId('text-component')
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveTextContent("O meu titulo");
        expect(textElement).toHaveStyle('font-size: 30px');
    })
    it('should renders a text as subheader', () => {
        render(<TextInput alias='subheader' color='black'>O meu Subtitulo</TextInput>)
        const textElement = screen.getByTestId('text-component')
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveTextContent("O meu Subtitulo");
        expect(textElement).toHaveStyle('font-size: 20px');
    })
})

