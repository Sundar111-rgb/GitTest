import React from 'react';

const Test = props => {
    return (
        <div class="container">
    <div class="container text-center my-5">
      <h1>Hello, world!</h1>
      <p class="lead">Enjoy Development</p>
    </div>

      <nav>
        <ul class="nav nav-pills justify-content-center">

      <li class="nav-item active">
       <a class="nav-link" href="Test.js">Home</a>
      </li>

 
      <li class="nav-item">
        <a class="nav-link" href="Skills.js">Skills</a>
       </li>


      <li class="nav-item">
        <a class="nav-link" href="#">Portfolio</a>
       </li>


      <li class="nav-item">
        <a class="nav-link" href="#">About Me</a>
       </li>

      </ul>
      </nav>

      <div class="container mt-5">
        <div class="row">

          <div class="col">
            <div class="card">
             <div class="card-header">
                <h3>Work Experience</h3>

              </div>
              
            <div class="card-body">
              <div class="mx-3">
                <h4>.Net Developer</h4>
           <div>
           <strong>2018 2 years before</strong>
          </div>

           Backend develper developing Web Application based on Hospitals
              </div>
           
           <ul class="list-group list-group flush mt-5">
             <li class="list-group-item">Developing Web Page</li>
             <li class="list-group-item">Writing JQuery Code</li>
             <li class="list-group-item">Writing C# code</li>
           </ul>
          </div>
        </div>
      </div>

          <div class="col">
            <div class="card">
              <div class="card-header">
                 <h3>Work Experience</h3>
 
               </div>
               
             <div class="card-body">
              <div class="mx-3">
                <h4>.Net Developer</h4>
           <div>
           <strong>2018 2 years before</strong>
          </div>

           Backend develper developing Web Application based on Hospitals
              </div>
           
           
            <ul class="list-group list-group flush mt-5">
              <li class="list-group-item">Developing Web Page</li>
              <li class="list-group-item">Writing JQuery Code</li>
              <li class="list-group-item">Writing C# code</li>
            </ul>
           </div>
         </div>
          </div>

        </div>
      </div>

    </div>

    );
};



export default Test;