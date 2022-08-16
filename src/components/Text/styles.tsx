import styled, { css } from 'styled-components'

interface TextProps {
 color: string;
 alias: string;
}

const textType =  {
    header: () => css`
        font-size: 30px;
        font-weight: 500;
        line-height: 1.5rem;
    ` ,
    subheader: () => css`
        font-size: 20px;
        font-weight: 200;
        line-height: 1.5rem;
    `
}

export const Text = styled("span")<TextProps>(
    ({alias, color}) => css`
        ${textType[alias]()};
        color: ${color};
    `
);