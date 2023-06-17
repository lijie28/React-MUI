import * as React from 'react';
import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Grid } from '@mui/material';


const picUrl1 = 'https://lj28.s3.ap-northeast-1.amazonaws.com/big1.jpg'
const picUrl2 = 'https://lj28.s3.ap-northeast-1.amazonaws.com/small2.jpg'
const picUrl3 = 'https://lj28.s3.ap-northeast-1.amazonaws.com/small3.jpg'
const picUrl4 = 'https://lj28.s3.ap-northeast-1.amazonaws.com/small4.jpg'

export class TestBigPic3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
        this.picSizeWidth = '200px'
        this.picSizeHeight = '200px'
        this.start = Date.now()
    }


    isButtonClickable = () => {
        return this.state.value != null
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: event.target.value
        })
    };

    nextPage = () => {
        const time = (Date.now() - this.start).toString();
        this.props.data.big_3 = { 'v': this.state.value, 't': time };
        // console.log(this.props.data)
        this.props.nextPage();
    }

    render() {
        return (
            <div className='mainBg'>
                < div className='mainArea' >
                    <div className='subArea'>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={3}>
                                <img src={picUrl2} style={{ width: this.picSizeWidth, height: this.picSizeHeight }}></img>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={picUrl3} style={{ width: this.picSizeWidth, height: this.picSizeHeight }}></img>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={picUrl4} style={{ width: this.picSizeWidth, height: this.picSizeHeight }}></img>
                            </Grid>
                            <Grid item xs={3}>
                                ← Target Person
                            </Grid>
                        </Grid>
                        <p className='mainText'>
                            The photo below features the target person AND that this target person is
                            PHYSICALLY interacting with others  (e.g., hand holding, touching, kissing, hugging)
                        </p>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={6}>
                                <img src={picUrl1} style={{ width: this.picSizeWidth, height: this.picSizeHeight }}></img>
                            </Grid>
                            <Grid item xs={4}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    onChange={this.handleChange}
                                    style={{ alignContent: 'center' }}
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="0" control={<Radio />} label="No" />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                    </div >
                </div >
                {this.isButtonClickable() ? <Button className='proceedButton' variant="contained" onClick={this.nextPage} > Proceed </Button> : <Button className='proceedButton' variant="contained" disabled> Proceed</Button>}
            </div >
        )
    }
}