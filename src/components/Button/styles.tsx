import styled, { css } from 'styled-components'


interface BtnProps {
    buttonType: string;
   }

const btnType =  {
    primary: () => css`
        background: #129dee;
        &:hover {
        background: #9a1cc0;
       }
    ` ,
    secondary: () => css`
        background: #24ff24;
        &:hover {
        background: greenyellow;
       }
    `,
    alert: () => css`
        background: #f5f52d;
        &:hover {
        background: yellowgreen;
       }
        
    `,
    danger: () => css`
        background: #f54242;
        &:hover {
        background: #6e4141;
       }
    `
}

export const Btn = styled("button")<BtnProps>(
    ({ buttonType }) => css`
       ${btnType[buttonType]()};
       color: white;
       width: 150px;
       height: 50px;
       border-radius: 20px;
       border: 1px solid lightgray;
       cursor: pointer;
    `
);