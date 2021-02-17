import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
}
html{
         
         &::-webkit-scrollbar{
             width: 0.5rem;
         }
         &::-webkit-scrollbar-thumb{
             background-color: #adadad;
             border-radius: 3px;
         }
         &::-webkit-scrollbar-track{
             background-color: white;
         }
    } 

 body{
     font-family: 'Montserrat', sans-serif;
     width: 100%;
 }
 h2{
     font-size: 3rem;
     font-family: 'Abril Fatface', cursive;
     font-weight: lighter;
     color: #333;
     
 }
 h3{
     font-size: 1.3rem;
     color: #333;
     padding: 1.5rem 0rem;
     
 }

 .rating{
    @media only screen and (max-width: 680px){
        h3{
         text-align: center;
        }
     }
 }

 p{
     font-size: 1.2rem;
     line-height:200%;
     color: #696969;
     @media only screen and (max-width: 680px){
         text-align: center;
     }
 }
 a{
     text-decoration: none;
     color: #333;
     
 }
 img{
     display: block;
 }
 input{
    font-family: "Montserrat", sans-serif;
 }


 @media only screen and (max-width: 1000px) {

  h2 {
    text-align: center;
  }
}


`;

export default GlobalStyles;
