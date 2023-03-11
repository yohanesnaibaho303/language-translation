import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <div class="container">
      <div class="wrapper">
        <div class="text-input">
          <textarea spellcheck="false" class="from-text" placeholder="Enter text"></textarea>
          <textarea spellcheck="false" readonly disabled class="to-text" placeholder="Translation"></textarea>
        </div>
        <ul class="controls">
          <li class="row from"> 
            <div class="icons">
              <i id="from" class="fas fa-volume-up"></i>
              <i id="from" class="fas fa-copy"></i>
            </div>
            <select></select>
          </li>
          <li class="exchange"><i class="fas fa-exchange-alt"></i></li>
          <li class="row to">
            <select></select>
            <div class="icons">
              <i id="to" class="fas fa-volume-up"></i>
              <i id="to" class="fas fa-copy"></i>
            </div>
          </li>
        </ul>
      </div>
      <button>Translate Text</button>
    </div>

    {/* <Helmet>
       <script src="js/countries.js" type='text/javascript'></script>
       <script src="js/script.js"type='text/javascript'></script>
    </Helmet> */}

    </>
  );
}

export default App;
