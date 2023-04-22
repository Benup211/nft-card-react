import equ from './image-equilibrium.jpg';
import ethlogo from './icon-ethereum.svg';
import clock from './icon-clock.svg';
import avatar from './image-avatar.png';
import eview from './icon-view.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main id="main-eth" class="bg-mentor-mdark-blue min-h-screen min-w-screen flex justify-center items-center lg:p-0 p-4 font-outfit">
        <div id="card" class=" bg-mentor-cdark-blue lg:w-1/4 sm:w-1/2 h-auto shadow-xl rounded-2xl">
          <div id="card-val" class="m-5">
            <div id="img" class="relative top-0 left-0">
              <img class=" object-contain rounded-lg relative top-0 left-0" src={equ} alt="etherum" />
              <div class="group w-full h-full absolute top-0 left-0 hover:bg-mentor-cyan-dim rounded-lg hover:opacity-100">
              <img class=" object-contain absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100" src={eview} alt="etherum" /> 
              </div> 
            </div>
            <h1 class="my-3 text-mentor-white font-semibold hover:text-mentor-cyan cursor-pointer">Equilibrium #3429</h1>
            <p class="my-3 text-mentor-soft-blue text-lg font-light">Our Equilibrium collection promotes balance and calm.</p>
            <div id="eth-val" class="flex justify-between my-3">
              <div class="flex flex-row justify-center items-center text-xs">
                  <span class="mr-2"><img src={ethlogo} alt="Etherum logo"/></span>
                  <p class="text-mentor-cyan font-semibold">0.041 ETH</p>
              </div>
              <div class="flex flex-row justify-center items-center text-xs">
                <span class="mr-1"><img src={clock} alt="Time"/></span>
                <p class="text-mentor-soft-blue font-light">3 days left</p>
              </div>
            </div>
            <hr class=" bg-mentor-ldark-blue h-0.5 border-0 rounded-md"></hr>
            <div class="flex flex-row  items-center text-sm my-3 text-mentor-soft-blue font-light">
                <span class="mr-3 object-contain border-2 rounded-full"><img class="w-9"src={avatar} alt="Avatar"/></span>
                <p>Creation of <a class="text-mentor-white hover:text-mentor-cyan" href="#main-eth">Jules Wyvern</a></p>
            </div>
          </div>
        </div>
      </main>
      <div class=" text-[11px] text-center">
        Challenge by <a class="text-mentor-anchor-color" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a class="text-mentor-anchor-color" href="https://www.linkedin.com/in/benup-ghimire-9b9b19233" target="_blank" rel="noreferrer">Benup Ghimire</a>.
      </div>
    </div>
  );
}

export default App;
