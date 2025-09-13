import { useEffect , useReducer } from 'react';
import './App.css'
import chef from "./images/chef.jpg"

// child componet
function Header({name, year}){
  return(
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup",
  "Mushroom Soup",
  "Vegetable Cheese Pizza"
]

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));


function Main({dishes, openStatus, onStatus}){
  return(
    // JSX Fragment
    <> 
      <div>
        <button onClick={() => onStatus(true)}>
          I want to be open
        </button>
        <h2>
          Welcome to this beautiful restaurant! {openStatus ? "Open" : "Closed"}
        </h2>
      </div>
      <main>
        <img src={chef} height={300} alt="a image of smiling chef"/>
        <ul>
          {dishes.map((dish) => (
            <li key={dish.i} style={{listStyleType: "none"}}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

// parent componet
function App() {
        // array destructing
        // const [status, setStatus] = useState(true); // this keep track of whatever the status is 

  const [status, toggle] = useReducer(
    (status) => !status,
    true
  );

  useEffect(()=> {
    console.log(
      'The restaurant is ${status ? "open" : "closed"}.'
    )
  }, [status]);
  return ( 
  <div>
    {/* if status true, return "open" else return "close" */}
    <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
    <button onClick={toggle}>
      {/* whenever the status is true,we want to "close" the restaurant, otherwise we want to "open" it */}
      {status ? "Close" : "Open"} Restaurant
    </button>
    <Header name="Jina" year={new Date().getFullYear()}/>
    <Main 
      dishes = {dishObjects} 
      openStatus={status} 
      onStatus={toggle}
    />
  </div> 
  )
}
export default App
