import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .shopping {
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 1rem;
    color: black;
    background-color: #F8F9FE;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #D4E0FF;
      color: black;
      svg {
        color: black;
      }
    }
    .design {
        display: flex;
        align-items: center;
        gap: 0.5rem;
          .img1{
                background-color: #668DFF;
            }
            .img2{
                background-color: #FFB2C3;
            }
            .img3{
                background-color: #FFDD00;
            }
            .img4{
                background-color: #030303;
            }
        .logo {
      border-radius: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8rem;
      svg {
        font-size: 1rem;
        color: white;
      }
    }
    }
    .total {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: space-evenly;
        margin-top: 10px;
     h6{
        color: grey; 
     }
    }
    .number {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: space-evenly;
        margin-top: 10px;
            .svg1 {
                color: green; 
            }
          .t1{
              color: green; 
          }    
     h6{
        color: black; 
     }
    }
    
  }
  
  `
  ;