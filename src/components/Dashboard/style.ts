import styled from "styled-components";

export const Section = styled.section `
margin-left: 18vw;

padding: 2rem;
height: 100vh;
.grid{
    display: grid;
    grid-template-columns: 70% 28%;
    gap: 2rem;
    margin-top: 2rem;
    .grid_1 {
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .grid_2 {
        z-index: 2;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
@media screen and (max-width: 768px) {
    height: 100vh;
    margin-left: 0;
    .grid {
        display: flex;
        flex-direction: column;
    }
}
`;