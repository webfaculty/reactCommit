import "./App.css";
import Cart from './Components/Cart';
import Card from './Components/Card';

function App() {

  let products=[
    {
      pid:1,
      pname:"Strawberry Shake",
      pdesc:"Finest Strawberries, Milk, Sugar",
      price:169,
      quantity:0
    },
    {
      pid:2,
      pname:"Chocolate Fantasy",
      pdesc:"Brownie with chocolate sauce topped with Vanilla Ice cream",
      price:269,
      quantity:0
    },
    {
      pid:3,
      pname:"Mediterranean Delight",
      pdesc:"Nuts and Dates from the soils of Algeria",
      price:369,
      quantity:0
    }
  ]

  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <Cart/>
        </div>
      </header>
      <main>
        <div className="wrapper">

        {
          products.map(prod=>(
            <Card pid={prod.pid} pdetails={prod}/>
          ))
        }
         
        </div>
      </main>
    </div>
  );
}

export default App;
