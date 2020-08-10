import styled from 'styled-components'

export const Container = styled.div`  
     display: flex ; 
     width: 100%; 
     height: 100vh ;
     background-color: #212121;
     border: solid 1px #f00;
     justify-content: center ; 
     align-items: center;
`

export  const Principalchat = styled.div`
      height: 97%; 
      display: flex;
      flex-direction: column;
      width: 26.5rem ;

      justify-content: space-between; 
      align-items: center; 
       

`
export const ModalNickname = styled.div`
 position: fixed ; 
 width: 100%; 
 height: 100%;
 display: flex; 
 justify-content: center; 
 align-items: center; 
 background-color: rgba(0, 0, 0, 0.6);
   div{ 
          height: 7rem;
          display: flex; 
          flex-direction: column ; 
          align-items: center;
          justify-content: center;  
          width: 15rem; 
         background: white;
         border-radius: 0.8rem ; 
         padding: 10px; 
         * { 
                margin: 2px; 
         }
         
 }

 
`

export const Mensaggeshow = styled.div` 
display: flex;
/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

overflow-y: scroll; 
flex-direction: column-reverse; 
height:90%;
width: 100%; 
padding: 7px ; 
div { 

 padding: 5px;
 height: auto ; 
 width: 50%;
      p { 
             color: white;
      } 
     span {   color: red ;     
   height: 20px;  
     } 
}   
`




export const UserMenssage = styled.div`
 height: auto ; 
 
 padding: 5px;
 width: 50%;
      p {    color: white;
      } 
     .user {   color: blue ; 
     } 
margin-left: 50%; 

`





export const Sendmensagge = styled.div`
 
display: flex ; 
align-items: center; 
justify-content: center; 
padding: 10px; 
height: 10%; 
width: 100%
`

export const Sendmensaggebutton = styled.button`
   border-radius: 0.4rem ; 
   outline: 0px ; 
   border: 0px ;
   width: 3rem;
   height: 2rem ;  
   background: #9238b5;
   margin-left: 1rem;
   display: flex; 
   justify-content: center;
   align-items: center; 
   strong{ 
         color: white;
   }
   
   :hover {
         border: solid 1px #8e3bad; 
         background: #662a7d;
   }
`

export const Sendmensaggeinput = styled.input`
border-radius: 0.3rem ; 
padding: 7px ;
width: 100%; 
color: white; 
background: #363636 ; 
max-width: 1000px; 
font-size: 14px ;  
 outline: 0px ; 
 border: 0px ;
`