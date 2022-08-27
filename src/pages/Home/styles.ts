import styled from "styled-components"

export const HomeContainer = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`

export const BaseStartCountdownButton = styled.button`
    width: 100%;

    border: 0;
    border-radius: 8px;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    
    cursor: pointer;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    color: ${(props) => props.theme["gray-100"]};
`

export const StartCountdownButton = styled(BaseStartCountdownButton)`
    background-color: ${(props) => props.theme["green-500"]};

    &:not(:disabled):hover {
        background-color: ${(props) => props.theme["green-700"]};
    }
`

export const StopCountdownButton = styled(BaseStartCountdownButton)`
    background-color: ${(props) => props.theme["red-500"]};

    &:not(:disabled):hover {
        background-color: ${(props) => props.theme["red-700"]};
    }
`