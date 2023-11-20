import styled from "styled-components";

export const Section = styled.section<{ visible: boolean }>`
    position: fixed;
    left: 0;
    width: 18vw;
    background-color: #F8F9EF;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 2rem;
    
    overflow: hidden;

    .top {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;

        .brand {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.3rem 0;

            svg {
                color: blue;
                font-size: 2rem;
            }

            span {
                font-size: 1.5rem;
                font-weight: bold;
                color: black;
            }
        }

        .links {
            display: flex;
            justify-content: center;

            ul {
                list-style-type: none;
                display: flex;
                flex-direction: column;
                gap: 1rem;

                li {
                    padding: 0.6rem 2rem;
                    border-radius: 0.3rem;

                    &:hover {
                        background-color: black;

                        a {
                            color: white;
                        }
                    }

                    a {
                        text-decoration: none;
                        display: flex;
                        gap: 1rem;
                        color: grey;

                        svg {
                            font-size: 1.4rem;
                        }

                        span {
                            display: flex;
                            gap: 2rem;
                        }
                    }
                }

                .active {
                    background-color: black;

                    a {
                        color: white;
                    }
                }
            }
        }
    }

    .map {
        width: 90%;
        display: flex;
        background-color: #EBECF1;
        padding-top: 10px;
        padding-bottom: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: -25px;
        border-radius: 0.5rem;

        svg {
            color: blue;
            font-size: 2rem;
        }
    }

    .logout {
        padding: 0.6rem 3rem;
        margin-left: -2rem;

        a {
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            gap: 1rem;

            svg {
                font-size: 1.4rem;
            }

            span {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 768px) {
        width: ${({ visible }) => (visible ? '100%' : '0')};
        height: ${({ visible }) => (visible ? '100vh' : 'auto')};
        left: ${({ visible }) => (visible ? '0' : '-100%')};
        display: flex;
        align-items: center;
        transition: width 0.3s ease;
        z-index: 999;
    }

    .toggleButton {
        display: block;
        background-color: #333;
        color: white;
        border: none;
        cursor: pointer;
        padding: 10px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
`;