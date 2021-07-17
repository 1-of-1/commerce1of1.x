import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'customized shoes.', price: '$65' },
    { id: 2, name: 'OneOfOne', description: '1 / 1', price: '$-' },
    { id: 3, name: 'Designers', description: 'customized hoodies & outerwear.', price: '$40' },

];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
  <main className={classes.content}>
    <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                  </Grid>
          ))}
      </Grid>
  </main> 
  );
}

export default Products;