import * as React from 'react';
import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const picUrl = 'https://lj28.s3.ap-northeast-1.amazonaws.com/small1.jpg'

export class TestSmallPic1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
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
        this.props.data.small_1 = { 'v': this.state.value, 't': time };
        // console.log(this.props.data)
        this.props.nextPage();
    }

    render() {
        return (
            <div className='mainBg'>
                < div className='mainArea' >
                    <div className='subArea'>
                        <p className='mainText'>
                            Does this photo feature a face that is NOT on any printed materials (e.g., t shirt, album, screen)?
                        </p>
                        <img src={picUrl} style={{ width: '200px', height: '200px' }}></img>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            onChange={this.handleChange}
                            style={{ alignContent: 'center' }}
                        >
                            <FormControlLabel value="1" control={<Radio />} label="Yes" />
                            <FormControlLabel value="0" control={<Radio />} label="No" />
                        </RadioGroup>
                    </div >
                </div >
                {this.isButtonClickable() ? <Button className='proceedButton' variant="contained" onClick={this.nextPage} > Proceed </Button> : <Button className='proceedButton' variant="contained" disabled> Proceed</Button>}
            </div >
        )
    }
}