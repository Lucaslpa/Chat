import React, { useState , useEffect } from 'react'
import {Container ,Mensaggeshow ,UserMenssage 
 , Sendmensagge,  ModalNickname,
Sendmensaggebutton,Sendmensaggeinput , Principalchat } from './style'
import api from '../../api'
import io from 'socket.io-client'


const socket  = io('http://localhost:1000')
socket.on('connect' , () => console.log('conectado socket')) 

interface datainterface { 
   id: number ,  user:string  , message: string 
}

function ChatPage() { 
    const [ logged , setlogged] = useState('')
    const [ nicktologin , setnicktologin] = useState('')
    const [ number , setnumber] = useState(0)
    const [data, setdata] = useState<datainterface[]>([])
    const [inputmessage , setmessage] = useState('')
     
  async  function getmessages() {
      await api.get('messages').then(res => { 
          const finalresponse =  res.data.reverse()
          return setdata(finalresponse)} )} 

     useEffect(  () => { getmessages() 
                socket.on('send.message', getmessages) } , [])
   
     async function sendMessage() {  
         if( !inputmessage){ return }
         await api.post('messages', { 
                    user:logged, 
                    message: inputmessage }) 
          getmessages()
          setmessage('')
          socket.emit('send.message')
          setnumber(number + 1)}
     
          function registerNickname() {  
          if(!nicktologin) { return  }
           setlogged(nicktologin)
           setnumber(number + 1)}
    
        function enterSend(e: any) { 
           if(e===13) { 
                 registerNickname()
                 sendMessage()}
           return 
     }

     return ( 
 <Container>
{!logged && ( <ModalNickname>
               <div>
                <strong>Digite seu nick do chat!! </strong>
               <input onKeyDown={e => enterSend(e.keyCode)}
                onChange={e=> setnicktologin(e.target.value)} /> 
                <button onClick={() => registerNickname()} >Submit</button>
                 </div> 
               </ModalNickname>)}
               <Principalchat>
                  <Mensaggeshow>
                  {data.map(item=> {
                     if (item.user === logged) {
                     return ( 
                   <UserMenssage key={item.id} >                                         
                     <span className='user'>{item.user}</span><p>{item.message}</p>       
                    </UserMenssage>)}
                     else return (<div key={item.id} >
                          <span className='.user' >
                          {item.user}
                            </span><p>{item.message}</p>
                           </div>  )})}
                    </Mensaggeshow>
                   <Sendmensagge>
                    <Sendmensaggeinput onKeyDown={e => enterSend(e.keyCode)}
                        value={inputmessage} 
                        onChange={e => setmessage(e.target.value)}  />
                    <Sendmensaggebutton   
                      onClick={sendMessage} >
                       <strong>Chat</strong></Sendmensaggebutton>
                   </Sendmensagge>
               </Principalchat>

               


 </Container>                    
        
     )
}

export default ChatPage