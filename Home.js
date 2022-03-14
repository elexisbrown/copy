import React from 'react'

const Home = () => {
  return (

    
    <div>


    <div  className='center'> 
      <header className="hero-image" role="banner">
        <video autoplay id="heroVideo" loop muted>
          <source src="./src/video/Cincinnati.mp4" />
        </video>
        <img className='poster img-fluid mx-auto d-block d-sm-none' src="" alt="" />
        <div className="container d-flex flew-row">
          <div className="row">
            <div className="col-lg-12 d-flex flex-column justify-content-center text-white py-md-5 text-container">
              <h2 className="display-4 mb-0">Placeholdertext</h2>
            </div>
          </div>
        </div>
      </header>
      <img id='hero-image' src='https://via.placeholder.com/1500x400' />
      </div>

      <h4 id='title-padding' className="center">HISTORY OF CINCINNATI</h4>
 
      <div class="container">
    <div class="image">
      <img class="small-image" src="https://via.placeholder.com/400"/>
    </div>
    <div class="a-paragraph">
    <blockquote>
      <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam provident praesentium, illum saepe ea odio at adipisci similique ipsum, omnis, ipsam iste odit repellat nostrum.</h3>
      </blockquote>
    </div>
  </div>
  <div>
    <p id='history-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis tenetur, deserunt neque blanditiis expedita eius explicabo omnis quo sunt suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore amet facilis at aliquid laudantium repellendus quae nostrum qui, tenetur nam optio ullam fugit itaque dolores doloribus atque ad debitis necessitatibus. Soluta suscipit odit ad labore est harum repudiandae, optio excepturi ratione cumque minus, commodi sapiente dolores quaerat perspiciatis officiis quod! Corrupti, nostrum at animi nihil beatae laudantium sunt voluptas laborum ut nam. Quam corrupti nesciunt facilis cumque quas qui consequuntur.</p>
  </div>

         <div id='header-before-attractions' className='center'> 
            <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
         </div>
         <div>  
            <h1 id='attractions-title' className='center' >Attractions</h1>
         </div>
         <div className='card-group'>
         <div className="card">
           <img className='card-img-top' src="https://via.placeholder.com/400x200" alt="Card image cap" />
           <div className="card-body">
             <h5 className="card-title">Card Title</h5>
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>
         <div className="card">
           <img className='card-img-top' src="https://via.placeholder.com/400x200" alt="Card image cap" />
           <div className="card-body">
             <h5 className="card-title">Card Title</h5>
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>
         <div className="card">
           <img className='card-img-top' src="https://via.placeholder.com/400x200" alt="Card image cap" />
           <div className="card-body">
             <h5 className="card-title">Card Title</h5>
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>
         <div className="card">
           <img className='card-img-top' src="https://via.placeholder.com/400x200" alt="Card image cap" />
           <div className="card-body">
             <h5 className="card-title">Card Title</h5>
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>

         </div>
    </div>
    
  )
}

export default Home