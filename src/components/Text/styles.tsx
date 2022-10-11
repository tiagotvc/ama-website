import styled, { css } from 'styled-components'
import { TextProps } from './index'


const textType =  {
    header: () => css`
        font-size: 30px;
        font-weight: 500;
        
    ` ,
    subheader: () => css`
        font-size: 20px;
        font-weight: 200;
    `,
    body1: () => css`
        font-size: 10px;
        font-weight: 100;
        letter-spacing: 3px;
    `,
    body2: () => css`
        font-size: 17px;
        font-weight: 600;
        letter-spacing: 3px;
    `,
    body3: () => css`
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 3px;
    `
}

export const Text = styled("span")<TextProps>(
    ({variant, fontColor, textdecoration, textShadow}) => css`
        line-height: 1.5rem;
        letter-spacing: 3px;
        text-decoration: ${textdecoration};
        text-shadow: ${textShadow};
        font-family: 'Rubik', sans-serif;
        
        ${textType[variant]()};
        color: ${fontColor};
    `
);