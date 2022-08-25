import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;

        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${(props) => props.theme["gray-100"]};

            /* É PRECISO USAR BORDER- TOP E BORDER-BOTTOM, POIS ASSIM O ÍCON CONTINUA CENTRALIZADO */
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            /* É PRECISO USAR BORDER- TOP E BORDER-BOTTOM, POIS ASSIM O ÍCON CONTINUA CENTRALIZADO */

            &:hover {
                border-bottom: 3px solid ${(props) => props.theme["green-500"]};
            }

            &.active {
                color: ${(props) => props.theme["green-500"]};
            }
        }
    }
`