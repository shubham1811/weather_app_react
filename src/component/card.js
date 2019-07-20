import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  card: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Samplecard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.card}>
    <div class="redcol">
      <CardContent>
      <Typography className="hj">
        <Box textAlign="center" m={0}>
          <p class="day animated finite slideInLeft delay-1s">{props.week}</p>
        </Box>
      </Typography>
        <Typography component="div">
          <Box textAlign="center" m={1}>
          <i class="material-icons iconscard animated infinite zoomIn delay-2s">{props.ico}</i>
          </Box>
        </Typography>
        <Typography>
          <span className="sjp animated finite fadeInUp delay-1s">{props.seas}</span>
          <Typography component="span">
            <span className="sjp2 sjp animated finite fadeInUp delay-1s">{props.arraydata}&#8451;</span>
          </Typography>
        </Typography>
      </CardContent>
    </div>
    </Card>
  );
}
