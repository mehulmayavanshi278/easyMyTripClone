import { Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
   const route = [
    {
      path:"/",
      go:<Home/>,
    },
   ]
  return (
   <>
<Routes>
 {route.map((elm,id)=>{
  return(
    <>
    <Route exact path={elm.path} element={elm.go} /> <Route/>
    </>
  )
 })}
</Routes>
   </>
  );
}

export default App;
