import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Header from './screens/components/header/header'
import Footer from './screens/components/footer/footer'
import Router from './router/Router'
import { fetchProducts } from './redux/fetchAction';
function App() {
  const dispatch = useDispatch()
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