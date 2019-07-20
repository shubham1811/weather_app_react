import React, { Component } from 'react';
import Samplecard from './card';
import Header from './header';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';





class Mainui extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[
        {
          "monday":49
        },
        {
          "tuesday":71
        },
        {
          "wednesday":83
        },
        {
          "thrusday":-2
        },
        {
          "friday":35
        },
        {
          "saturday":24
        }
      ]
    };
  }
  render(){
      const monf = this.state.data.filter(user => user.monday === 49)
      const mon = monf.map((i) =>{return(i.monday)})

      const tuesf = this.state.data.filter(user => user.tuesday === 71)
      const tue = tuesf.map((i) =>{return(i.tuesday)})

      const wedf = this.state.data.filter(user => user.wednesday === 83)
      const wed = wedf.map((i) =>{return(i.wednesday)})

      const thrusf = this.state.data.filter(user => user.thrusday === -2)
      const thrus = thrusf.map((i) =>{return(i.thrusday)})

      const fridf = this.state.data.filter(user => user.friday === 35)
      const frid = fridf.map((i) =>{return(i.friday)})

      const satf = this.state.data.filter(user => user.saturday === 24)
      const sat = satf.map((i) =>{return(i.saturday)})


    return(
      <div>
      <Header/>
      <div class="cont1">
      <Grid container spacing={3}>
      <Grid item xs={4}>
        <Samplecard arraydata={mon[0]} ico={"wb_cloudy"} seas={"CLOUDY"} week={"Monday"}/>
      </Grid>
      <Grid item xs={4}>
        <Samplecard arraydata={tue[0]} ico={"brightness_4"} seas={"SUNNY"} week={"Tuesday"}/>
      </Grid>
      <Grid item xs={4}>
          <Samplecard arraydata={wed[0]} ico={"wb_sunny"} seas={"SUNNY"} week={"Wednesday"}/>
      </Grid>
    </Grid>
    </div>
    <div class="cont1">
    <Grid container spacing={3}>
    <Grid item xs={4}>
        <Samplecard arraydata={thrus[0]} ico={"wb_incandescent"} seas={"COLD"} week={"Thrusday"}/>
    </Grid>
    <Grid item xs={4}>
        <Samplecard arraydata={frid[0]} ico={"flash_on"} seas={"RAIN"} week={"Friday"}/>
    </Grid>
    <Grid item xs={4}>
        <Samplecard arraydata={sat[0]} ico={"ac_unit"} seas={"SNOW"} week={"saturday"}/>
    </Grid>
  </Grid>
  </div>
  </div>
    );
  }
}

export default Mainui;
