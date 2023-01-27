import styled, { css } from 'styled-components'

export const Container = styled("div")(
    () => css`
        position: relative;
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        > input {
            width: 100%;
            padding: 10px;
            border: 1px solid lightgray;
            background: white;
            border-radius: 5px;
            outline: none;
            color: black;
            font-size: 1em;
            height: 25px;
        }

        > span {
            position: absolute;
            left: 0;
            padding: 10px;
            pointer-events: none;
            font-size: 1em;
            color: lightgray;
            text-transform: uppercase;
            text-align: center;
        }

        > input:valid ~ span, input:focus ~ span {
            color: white;
            transform: translateX(10px) translateY(-22px);
            font-size: 0.70em;
            padding: 1px 10px;
            background: #00dfc4;
            border-radius: 2px;
        }
        
        > input:valid, > input:focus {
            border: 1px solid #00dfc4;
        }

    `
)