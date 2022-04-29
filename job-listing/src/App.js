import data from "./data.json"
import './App.css';
import Jobs from "./Jobs";

console.log(data)
function App() {
  
  return (
    <div className="App">
      {data.map((job, index) => {
        return (
          <Jobs job={job} key={index} />
        );
      })}
         
    </div>
  );
}

export default App;
