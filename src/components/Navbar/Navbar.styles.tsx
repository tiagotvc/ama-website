import styled, { css } from 'styled-components';

export const Container = styled("div")(
    () => css`
        display: flex;
        flex-direction:row;
        z-index: 1000;
    `
)