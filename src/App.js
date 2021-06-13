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
    name: "Kimchi",
    image: "something"
  },
  {
    name: "Mandu",
    image: "something"
  },
  {
    name: "Salad",
    image: "something"
  },
  {
    name: "Sandwich",
    image: "something"
  }
];

function App() {
  return (
    <div>
    {foodILike.map(function(dish) {
      return <Food name = {dish.name} picture = {dish.image}/>;
    })}
    </div>
  );
}

export default App;
