import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Button  from './index';

describe('Button', () => {
    it('should renders a text as header', () => {
        render(<Button buttonType='primary'>Botão primário</Button>)
        const textElement = screen.getByTestId('button-component')
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveTextContent("Botão primário");
        expect(textElement).toHaveStyle('background: #129dee');
    })
})

