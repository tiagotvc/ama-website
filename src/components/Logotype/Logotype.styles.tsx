import styled, { css } from 'styled-components'

export const Container = styled("div")(
    () => css`
        display: flex;
        align-items: center;
        position: relative;
        z-index: 999;

        .container_content {
            display: flex;
            flex-direction: column;
            text-align: left;
            position: relative;
            z-index: 999;
        }

        .image_laco {
            transform: rotate(-40deg);
        }

        .blue_paint  {
            position: absolute;
            z-index: 998;
            margin-top: -50px;
            right: -20px;
        }
        .red_paint  {
            position: absolute;
            z-index: 998;
            margin-top: 10px;
            margin-left: -10px;
            bottom:10px;
        }
        .yellow_paint  {
            position: absolute;
            z-index: 998;
            margin-top: 10px;
            right: 30px;
            bottom:10px;
        }
    `
)