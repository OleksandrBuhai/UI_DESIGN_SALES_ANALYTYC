import styled from "styled-components";



export const Section = styled.section`
.sales {
  color: black;
  width: 100%;
  .sales__details {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    div {
      display: flex;
      gap: 1rem;
      button {
        border-radius: 0.5rem;
        padding: 0.4rem 1rem;
        border: none;
        cursor: pointer;
        background-color: #EEF4FF;
          color: black;
          svg {
              font-size: 0.6rem;
          }
      }
    }
  }
  .sales__graph {
    height: 10rem;
    width: 100%;
    .recharts-default-tooltip {
    background-color: black !important;
    border-color: black !important;
    color : white !important;
  }
  }
}
`;