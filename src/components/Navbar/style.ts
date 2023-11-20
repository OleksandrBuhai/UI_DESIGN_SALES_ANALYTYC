import styled from "styled-components";


export const Nav = styled.nav`
display: flex;
justify-content: space-between;
color: white;
.title {
    h1{
        margin-left: 0.5rem;
        color: black;
        font-weight: bold;
        margin-top: 1rem;
    }
}
.notification {
    display: flex;
    align-items: center;
    margin-top: -10px;
    .date {
        background-color: #F8F9FE;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        svg {
            color: black;
        }
        span {
            color: black;
        }
    }
    .icon {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        svg {
            color: black;
        }
        span{
            color: black;
        }
        .image {
            display: flex;
            gap: 1rem;
            img{
                height: 2.5rem;
                width: 2.5rem;
                border-radius: 3rem;
            }
        }
    }
}
@media screen and (max-width: 768px) {
        flex-direction: column;

        .notification {
            flex-direction: column;
            margin-top: 1rem;

            .date,
            .icon {
                margin-top: 1rem;
            }
        }
    }

`;