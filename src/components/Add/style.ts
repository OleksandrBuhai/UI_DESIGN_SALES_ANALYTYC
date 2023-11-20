import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    gap: 1rem;
    div{
        button {
            border-radius: 0.5rem;
            padding: 1rem 6.6rem;
            border: none;
            cursor: pointer;
            background-color: black;
            color: white;
            font-weight: bold;
            &:hover {
                background-color: red;
            }
        }
    }
`;