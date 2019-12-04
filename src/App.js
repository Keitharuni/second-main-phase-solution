import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import rxbottle from './images/rx-bottle.jpg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './App.css';

const useStyles = makeStyles({
  root: {
    padding: '20px',
    '& h2': {
      fontSize: '18.5px'
    },
    '& h1': {
      fontSize: '25px'
    }
  },
  checkmark: {
    color: 'rgb(74, 166, 252)',
    float: 'right'
  },
  rightFloat: {
    float: 'right'
  },
  leftFloat: {
    float: 'left'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px'
  },
  outerGrid: {
    webkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    padding: '10px'
  },
  discount: {
    color: 'rgb(74, 166, 252)'
  },
  linethrough: {
    '&:before': {
      content: "''",
      position: 'absolute',
      borderBottom: '2px solid darkgray',
      height: '29px',
      left: '28px',
      right: '28px'
    }
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        className={classes.outerGrid}
        container
        direction='row'
        alignItems='center'
        justify='center'
        spacing={0}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={10}>
            <h1 className={classes.leftFloat}>Prescription Summary</h1>
          </Grid>
          <Grid item xs={2}>
            <h1 className={classes.rightFloat}>$29</h1>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item s={5} xs={6}>
            <img src={rxbottle} alt='Rx Bottle' height='350px' />
          </Grid>
          <Grid container item s={7} xs={6} spacing={1}>
            <Grid item style={{ marginTop: '35px' }} xs={12}>
              <h1>First Month Supply</h1>
              <Grid item xs={12}>
                <h2 style={{ color: 'gray' }}>
                  Generic Daily Cialis
                  <span>
                    <br></br>
                  </span>
                  30 X 6mg Pills
                </h2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid container className={classes.linethrough} item xs={12}>
            <Grid item xs={10}>
              <h2 className={`${classes.leftFloat}${classes.linethrough}`}>
                Online Doctor consultation
              </h2>
            </Grid>
            <Grid item xs={2}>
              <h2 className={classes.rightFloat}>$10.00</h2>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={10}>
              <h2 className={classes.leftFloat}>Month Supply Generic Cialis</h2>
            </Grid>
            <Grid item xs={2}>
              <h2 className={classes.rightFloat}>$84.00</h2>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={9}>
              <h2 className={classes.leftFloat}>Processing Fee $5</h2>
            </Grid>
            <Grid item xs={3}>
              <h2 className={classes.rightFloat}>$5.00</h2>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} spacing={1}>
          <hr></hr>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid container item xs={12}>
            <Grid item xs={9}>
              <h2 className={classes.leftFloat}>Subtotal</h2>
            </Grid>
            <Grid item xs={3}>
              <h2 className={classes.rightFloat}>$89.00</h2>
            </Grid>
          </Grid>
          <Grid container className={classes.discount} item xs={12}>
            <Grid item xs={9}>
              <h2 className={classes.leftFloat}>One Time Discount</h2>
            </Grid>
            <Grid item xs={3}>
              <h2 className={classes.rightFloat}>-$60.00</h2>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={9}>
              <h2 className={classes.leftFloat}>Grand Total</h2>
            </Grid>
            <Grid item xs={3}>
              <h2 className={classes.rightFloat}>$29.00</h2>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} spacing={1}>
          <hr></hr>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <h2>
              You will not be charged for your medication until approved by your
              physician.
            </h2>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={2}>
              <h2 className={classes.checkmark}>✔</h2>{' '}
            </Grid>
            <Grid item xs={10}>
              <h2>Medical prescription valid for 12 months</h2>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <h2 className={classes.checkmark}>✔</h2>
          </Grid>
          <Grid item xs={10}>
            <h2>Monthly refills of 30 pills at less than $3 a pill</h2>
          </Grid>
          <Grid item xs={2}>
            <h2 className={classes.checkmark}>✔</h2>
          </Grid>
          <Grid item xs={10}>
            <h2>Free standard shipping in 2-3 days</h2>
          </Grid>
          <Grid item xs={2}>
            <h2 className={classes.checkmark}>✔</h2>
          </Grid>
          <Grid item xs={10}>
            <h2>30-Day money back guarantee</h2>
          </Grid>
          <Grid item xs={2}>
            <h2 className={classes.checkmark}> ✔</h2>{' '}
          </Grid>
          <Grid item xs={10}>
            <h2>Adjustable monthly refills</h2>
          </Grid>
          <Grid item xs={2}>
            <h2 className={classes.checkmark}>✔</h2>{' '}
          </Grid>
          <Grid item xs={10}>
            <h2>Pause anytime</h2>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.button}>
        <Button
          style={{ borderRadius: 0 }}
          variant='contained'
          color='secondary'>
          Continue To Shipping ▶
        </Button>
      </div>
    </div>
  );
}

export default App;
