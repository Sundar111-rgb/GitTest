import React from 'react';

import { useSelector } from 'react-redux';
const   Hhh = (props) => {

  return(
<div class="col mb-4">
                    <div class="card bg-danger shadow-lg rounded-circle">
                        <div class="card-header">
                          <h4>{props.head}</h4>
                        </div>
                        <div class="card-body">
                         <h1 class="my-0 font-weight-normal">$0
                         <small class="text-muted">/mo</small>
                         </h1>
                       {
                             useSelector(state => state.data).map((item) => {
                                return  (
                                <ul class="list mt-3 mb-4">
                                <li>{item.users}</li>
                                <li>{item.storage}</li>
                                <li>{item.email}</li>
                                <li>{item.help}</li>
                                </ul>
                             )})
                       }
                      <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="https://touch.facebook.com/login/"><i class="fa fa-facebook fa-flag"></i></a>
                       </li>
                       <li class="list-inline-item">
                       <a href="https://twitter.com/login?lang=en"><i class="fa fa-twitter fa-flag"></i></a>

                       </li>
                       <li class="list-inline-item">
                       <a href="https://www.skype.com/en/"><i class="fa fa-skype fa-flag"></i></a>
                       </li>
                       <li class="list-inline-item">
                       <a href="https://www.google.com/"><i class="fa fa-google fa-flag"></i></a>
                       </li>
                       </ul>
                         <button class="btn btn-primary btn-block btn-lg">Sign Up</button>
                        </div>
                     </div>
                </div>)
}

export default  () => {
  
    return (
      <div>
        <div class="container text-center my-5">
           <h1 class="display-4">Pricing Table In React Redux Hooks</h1>
           <p class="lead">Quickly build an effective price table</p>
        </div>
        <div class="container text-center my-5">
            <div class="row row-cols-1 row-cols-md-3">
                <Hhh   head={useSelector(state => state.free)} image=" "/>

                <Hhh   head={useSelector(state => state.standard)} 
                image=""/>
                                                
                <Hhh   head={useSelector(state => state.pro)} 
                image=""/>
                           </div>
        </div>
        </div>
    );
};

