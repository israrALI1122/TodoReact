import Home from "../src/context/home"
import Pagination from "./context/Pagination"
import Search from "./context/Search"
import Todo from "./tasks/Todo"


function App() {
 

  return (
    <div>
      <Todo/>
      <Search/>
      <Pagination/>
      <Home/>
  
    </div>
  )
}

export default App
