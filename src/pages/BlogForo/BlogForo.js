import "./BlogForo.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/Principal/logo.jpg";

function BlogForo() {
  return (
    <div className="contenedor" style={{ width: "100%" , overflow: "none" }}>
<br></br>
<br></br>
<br></br>
<br></br>
      <h1 className="titulo">Blog</h1>
      <img src={logo} alt="Logo" />
      <h3>Ingeniero en sistemas</h3>
      <h3>Profesor de Full stack developer</h3>
      <nav>
        <a href="#">www.Maxflores.com</a>
      </nav>
      <br></br>

      <h2 >Consejos útiles</h2>

      <div class="accordion accordion-flush" id="accordionFlushExample">

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>

      </div>

      <br></br>

<div class="row" >
<div class="col-4">
  <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
    <a class="p-1 rounded" href="#simple-list-item-1">Item 1</a>
    <a class="p-1 rounded" href="#simple-list-item-2">Item 2</a>
    <a class="p-1 rounded" href="#simple-list-item-3">Item 3</a>
    <a class="p-1 rounded" href="#simple-list-item-4">Item 4</a>
    <a class="p-1 rounded" href="#simple-list-item-5">Item 5</a>
  </div>
</div>
<div class="col-8">
  <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
    <h4 id="simple-list-item-1">Item 1</h4>
    <p>...</p>
    <h4 id="simple-list-item-2">Item 2</h4>
    <p>...</p>
    <h4 id="simple-list-item-3">Item 3</h4>
    <p>...</p>
    <h4 id="simple-list-item-4">Item 4</h4>
    <p>...</p>
    <h4 id="simple-list-item-5">Item 5</h4>
    <p>...</p>
  </div>
</div>
</div>

<br></br>
<br></br>
<br></br>
      <div class="card" style={{ bottom: "70px"}}>
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <br></br>

    </div>
  );
}
export default BlogForo;
