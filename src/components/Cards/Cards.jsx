import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  //   console.log(confirmed);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography varaint="h5" component="h1">
              <CountUp
                start={0}
                end={confirmed.value}
                durations={2.5}
                separator=","
              />
            </Typography>
            <Typography colr="textSecondary">
              Updated On {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaint="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={recovered.value}
                durations={2.5}
                separator=","
              />
            </Typography>
            <Typography colr="textSecondary">
              Last Update {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaint="body2">Recovered from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={deaths.value}
                durations={2.5}
                separator=","
              />
            </Typography>
            <Typography colr="textSecondary">
              Last Update {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaint="body2">
              Number of Deaths by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
