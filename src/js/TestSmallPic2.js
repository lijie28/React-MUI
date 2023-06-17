import * as React from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

const picUrl = 'https://lj28.s3.ap-northeast-1.amazonaws.com/test1.png'

export class TestSmallPic2 extends React.Component {
    constructor(props) {
        super(props);
        this.value = '50';
        this.start = Date.now()
    }

    handleChange = (event, newValue) => {
        this.value = newValue.toString();
        console.log(newValue.toString());
    };

    nextPage = () => {
        const time = (Date.now() - this.start).toString();
        this.props.data.small_2 = { 'v': this.value, 't': time };
        // console.log(this.props.data)
        this.props.nextPage();
    }

    render() {
        return (
            <div className='mainBg'>
                < div className='mainArea' >
                    <div className='subArea'>
                        <p className='mainText'>
                            How much does the entity in this photo looks like
                            a human in its physical appearance?
                        </p>
                        <img src={picUrl} style={{ width: '200px', height: '200px' }}></img>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={this.value}
                            onChange={this.handleChange}
                            step={10}
                            valueLabelDisplay="on"
                            style={{ marginTop: '50px' }}
                        />
                        <p className='mainText'>
                            Indicate your opinions by dragging the arrow, a submit button will then show
                        </p>
                    </div >
                </div >
                <Button className='proceedButton' variant="contained" onClick={this.nextPage}> Proceed</Button >
            </div >
        )
    }
}