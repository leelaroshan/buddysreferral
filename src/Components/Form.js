import React from 'react';
// import './Login.css';

import styled from 'styled-components';
import {MdClose} from 'react-icons/md'

const Background = styled.div`
width: 50%;
height: 50%;
background:transparent;
visibility: hidden;
position:fixed;
display : flex

justify-content: center;
align-items: center;
`
const ModalWrapper = styled.div`
width: 700px;
height: 500px;
box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
background: #03030B;
color: #000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
`
const ModelImg = styled.img`
width: 100%;
height: 100%;
border-radius: 10px 0 0 10px;
background: #000;
`

const ModalContent = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
color:#141414

`

const CloseModalButton = styled(MdClose)`
cursor:pointer;
position:absolute;
top:20px;
right: 20px;
width:32px;
height: 32px;
padding: 0;
z-index: 10;

`




export default function Form({props }) {
    return (
        <div>
            {props.showmodal ? (  

             <Background>
                 <ModalWrapper showmodal={showmodal}>
                     <ModelImg src={require('../Components/images/office-bg-img.jpg')}></ModelImg>
                 <ModalContent>
                     <h1>hi contact us</h1>
                     <p>hello here is form</p>
                 </ModalContent>
                 <CloseModalButton aria-label="close modal" onClick={props.togglePopup}></CloseModalButton>
                 
                 </ModalWrapper>
             </Background>

            ) : null}

            </div>
                    
         )
         }


           {/* <div className="popup-box">
            <div className="box">  
            <div className="layout"> 
            <h3>contact us </h3>
            <span className="close-icon" onClick={props.handleClose}>x </span>
            </div>


            </div>
        </div> */}
       
         {/* <div class="mb-3"> 
         <label for="exampleFormControlInput1" 
         class="form-label">Name</label><br/>
        <input type="email" class="form-control" 
        id="exampleFormControlInput1" />
        </div>
        

       <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>

        <div class="mb-3">
       <label for="exampleFormControlTextarea1" class="form-label">Additional Details</label>
       <textarea class="form-control" id="exampleFormControlTextarea1" 
       placeholder="Mention details like location, number of hires etc here"
       rows="20"></textarea>
       </div>

        <button class="btn-hover color-10">SUBMIT</button>

        </div> */}
        
