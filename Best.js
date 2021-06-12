import React from 'react';

const Kkk = () => {
    return(
        <div class="col-md-4  table-col">
        <div class="pricee  featured">
            <h5>Starter</h5>
            <h1>$5</h1>
            <ul>
                <li> 10GB Storage</li>
                <li> 10 Emails</li>
                <li> 10 Domains</li>
                <li> 10GB GB Bandwidth</li>
            </ul>
            <div class="col text-center">
            <button class="btn order-btn">Order</button>
            </div>
        </div>
    </div>
    )
}

export default () => {
    return(
        <div class="container">
         <div class="row justify-content-md-center">
             <div class="col-md-8 col-md-auto">
                    <h1 class="text-center page-title">Bootstrap Pricing Table</h1>
                    <hr/>
                    <div class="row">
                          <Kkk />
                          <Kkk />
                          <Kkk />
                  </div>
             </div>
         </div>
        </div>
    )
}