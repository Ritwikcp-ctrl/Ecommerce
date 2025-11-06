import {Routes,Route} from 'react-router';
import {HomePage} from './pages/HomePage';
import './App.css'
import {CheckoutPage} from './pages/CheckoutPage';
import {OrderPage} from './pages/OrderPage';
function App() {
 

  return (
   <Routes>
       <Route path ='/' element = {<HomePage/>}></Route>
       <Route path ='checkout' element = {<CheckoutPage/>}></Route>
        <Route path ='orderpage' element = {<OrderPage/>}></Route>
       
   </Routes>
    
    
  )
}

export default App
