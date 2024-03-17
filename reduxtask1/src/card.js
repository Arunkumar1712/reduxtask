import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Unstable_Grid2';
import "./App.css";
import { Button, CardActions } from '@mui/material';
import { addtoCart, removefromCart } from "./redux/cartpageSlice";
import { useSelector, useDispatch } from 'react-redux';

export function MultiActionAreaCard({ product }) {

  const dispatch = useDispatch();
  const cartlist = useSelector((state) => state.myCartData.cartdata);

  const isInCart = cartlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addtoCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removefromCart(product.id));
  };

  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <Card sx={{ maxWidth: 340, maxHeight: 500 }}>
          <CardMedia
            component="img"
            height="110"
            image={product.thumbnail}
            alt={product.Title}
            sx={{ height: "300px" }}
            className='img'
          />
          <CardContent>
            <Typography variant="h6" component="div" sx={{ textAlign: "left" }} className='title'>
              {product.title}
              <div><StarIcon sx={{ color: "yellow" }} />{product.rating}</div>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: "left" }}>
              {product.description}
              <br />
              Our price : ₹{(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}
              <span> MRP: </span> <span style={{ textDecoration: 'line-through' }}> ₹{product.price}</span>
            </Typography>
            <CardActions>
              {isInCart ? (
                <Button
                  size="medium"
                  variant="contained"
                  color="error"
                  className="addbtn"
                  onClick={handleRemoveFromCart}
                >
                  Remove from Cart
                </Button>
              ) : (
                <Button
                  size="medium"
                  variant="contained"
                  className="addbtn"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              )}
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
