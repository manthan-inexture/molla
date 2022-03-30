
import Header from './screens/components/header/header'
import Footer from './screens/components/footer/footer'
import Router from './router/Router'
import { fetchProducts } from './redux/fetchAction'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  },[])
  return (
    <> 
     <Header/>
     <Router />
    <Footer />    
    </>
  );
}
export default App;