function Food({ name, picture }){
  return (
    <div>
        <h1>I like {name}</h1>
        <h1>I like {picture}</h1>
    </div>
 );
}

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "something"
  },
  {
    id:2,
    name: "Mandu",
    image: "something"
  },
  {
    id:3,
    name: "Salad",
    image: "something"
  },
  {
    id:4,
    name: "Sandwich",
    image: "something"
  }
];

function renderFood(dish){
  console.log(dish)
  return <Food key={dish.id} name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div>
    {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
