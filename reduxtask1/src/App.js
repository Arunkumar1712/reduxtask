import './App.css';
import AppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Data } from "./data";
import { Link, Route, Routes } from "react-router-dom";
import CartDetails from "./cartdetails"
import { useSelector } from 'react-redux';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
    </div>
  );
}

export default App;
 
function ResponsiveAppBar() {
  const quan = useSelector((state)=>state.myCartData.cartdata)
  return (
   <div> <AppBar position="static" className="customAppBar">
      <Container id="oppbar" maxWidth="xl">
        <Button
          className="btn"
          
          color="inherit"
          startIcon={<HomeIcon />}
        >
          <Link to="/home" id="cd">
            {" "}
            Home{" "}
          </Link>
        </Button>

        <Button
          
          color="inherit"
          startIcon={<ShoppingCartIcon />}
        >
          <Link to="/cart" id="cd">
            {" "}
            Cart{" "}
          </Link>
          {quan.length > 0 && (
        <span style={{
          position: 'absolute',
          top: '0px',
          right: '-25px',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '50%',
          padding: '5px',
          fontSize: '12px',
          minWidth: '20px',
          textAlign: 'center'

        }}>
          {quan.length}
        </span>
      )}
        </Button>
      </Container>
    </AppBar>
     <Routes>
     <Route path="/" element={<Data />}></Route>
       <Route path="/home" element={<Data />}></Route>
       <Route path="/cart" element={<CartDetails />} className="cartd"></Route>
     </Routes></div>
  );
}