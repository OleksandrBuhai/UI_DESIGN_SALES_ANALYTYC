import styled from "styled-components";

export const Section = styled.section `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    .color1 {
        background-color: #EEF4FF;
    }
    .color2{
        background-color: #FDF4F5;
    }
    .color3{
        background-color: #FFFCE4;
    }
    .analytic {
        padding: 1rem 2rem 1rem 2rem;
        border-radius: 1rem;
        color: black;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
        transition: 0.5s ease-in-out;
        &:hover {
            background-color: #D4E0FF;
            color: black;
            svg {
                color: black;
            }
        }
        .design{
            display: flex;
            align-items: center;
            gap: 1rem;
            .logo {
                background-color: white;
                border-radius: 1rem;
                border: 1px solid black;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1.5rem;
                svg {
                    font-size: 1.5rem;
                }
            }
        }
        .total {
            display: flex;
            align-items: center;
            gap: 1rem;
            justify-content: space-evenly;
            margin-top: 20px;
            .svg1 {
                color: green;
            }
            .svg2 {
                color: red;
            }
            .t1 {
                color: green;
            }
            .t2{
                color: red;
            }
            h6{
                color: grey;
            }
        }
    }

    @media screen and (max-width:768px) {
        display: flex;
        flex-direction: column;
    }
`;