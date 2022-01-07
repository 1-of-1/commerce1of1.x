import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: "url(/bkg1.png)",
    backgroundRepeat: "no-repeat"
  },
  home: {
    display: 'grid',
    gridTemplateRows: '340px 470px 266px',
    gridTemplateColumns: "1fr 1fr 1fr"
  },
  card_group: {
    display: 'grid',
    gridTemplateColumns: "repeat(3, 470px)",
    columnGap: "17px",
    rowGap: "1em",
    gridRowStart: "2",
    gridColumnStart: "2"
  },
  card1: {
    //paddingTop: '24px',
    //height: "100%",
  },
  card2: {
    //height: "100%",
  },
  card3: {
  },
  card_body: {
    width: "95%",
    display: "grid",
    textAlign: "center",
    textShadow: "1px 1px 1px #000000",
    paddingTop: "13px"

  },
  card_title: {
    backgroundColor: "#485461",

  },
  card_text: {

  },
  card_img1: {
    height: "470px",
    width: "95%",
    boxShadow: "10px 8px 8px -4px lightblue"
  },
  card_img2: {
    height: "470px",
    width: "95%",
    boxShadow: "10px 8px 8px -4px lightblue"
  },
  card_img3: {
    height: "470px",
    width: "95%",
    boxShadow: "10px 8px 8px -4px lightblue"
  },
  titleDiv:{
    display: 'flex',
    justifyContent: 'center',
    gridColumnStart: "2",
    paddingTop: "95px"

  },
  title: {
    fontSize: "80px !important",
  }

  
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
    <div className={classes.root}>
      <div className={classes.home}>
      <div className={classes.titleDiv}><h1 className={classes.title}>1 / 1</h1></div>
      <div class={classes.card_group}>
      <div class={classes.card1}>
        <img class={classes.card_img1} src="../wd1.JPG" alt="Card image cap"/>
        <div class={classes.card_body}>
          <h5 class={classes.card_title}>Custom Clothing & Footware</h5>
          <p class={classes.card_text}>Exclusive customs T-shirts, Sweatsuits, footweare & more</p>
        </div>
      </div>
      <div class={classes.card2}>
        <img class={classes.card_img2} src="../oneof.jpg" alt="Card image cap"/>
        <div class={classes.card_body}>
          <h5 class={classes.card_title}> 1of1</h5>
          <p class={classes.card_text}>Curated favorites and collaborations from 1of1© and freinds </p>
        </div>
      </div>
      <div class={classes.card3}>
        <img class={classes.card_img3} src="../featured.JPG" alt="Card image cap"/>
        <div class={classes.card_body}>
          <h5 class={classes.card_title}>Featured Designers </h5>
          <p class={classes.card_text}>Highlighed Top Designers and custom pices</p>
        </div>
      </div>
    </div>
      </div>
    </div>
    </div>
  )
  }