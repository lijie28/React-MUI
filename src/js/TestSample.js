import * as React from 'react';
import Button from '@mui/material/Button';
import testSampleImg1 from '../img/testCat.png'
import testSampleImg2 from '../img/testMan.jpg'
import testSampleImg3 from '../img/testWoman.jpg'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const titles = ['Does this photo feature a cat?',
    'Does this photo feature a face that is NOT on any printed materials (e.g., t shirt, album, screen)?',
    'Does this photo feature a face that is NOT on any printed materials (e.g., t shirt, album, screen)?'];

const tips = ['Tips: if you think that the probability of this photo featuring a cat is greater than 50%, select “Yes”. ',
    'Tips: select “Yes” if you think that the probability of this photo featuring a face and that the face is not on any printed materials is greater than 50%. ',
    'Tips: do not overinterpret - if unspecified, the face does not need to be a human face. '];

const imgs = [testSampleImg1, testSampleImg2, testSampleImg3]

export class TestSample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
        };
        this.testDatas = [];
        this.start = Date.now()
    }


    isButtonClickable = () => {
        return this.testDatas.length > this.state.page
    }

    selectValue = (v) => {
        return this.testDatas[this.state.page] == v
    }

    nextPage = () => {
        if (this.state.page < 2) {
            this.setState({
                page: this.state.page + 1
            })
        } else {
            this.props.data.test = this.testDatas
            // console.log(this.props.data)
            this.props.nextPage();
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({})
        this.testDatas[this.state.page] = event.target.value
    };

    render() {
        return (
            <div className='mainBg'>
                <div className='mainArea' >
                    <div className='subArea'>
                        <p className='mainText'>
                            {titles[this.state.page]}
                        </p>
                        <img src={imgs[this.state.page]} style={{ width: '200px', height: '200px' }}></img>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            onChange={this.handleChange}
                            style={{ alignContent: 'center' }}
                        >
                            <FormControlLabel checked={this.selectValue('1')} value="1" control={<Radio />} label="Yes" />
                            <FormControlLabel checked={this.selectValue('0')} value="0" control={<Radio />} label="No" />
                        </RadioGroup>
                        <p className='mainText'>
                            {tips[this.state.page]}
                        </p>
                    </div >
                </div >
                {this.isButtonClickable() ? <Button className='proceedButton' variant="contained" onClick={this.nextPage} > Proceed </Button> : < Button className='proceedButton' variant="contained" disabled> Proceed</Button >}
            </div >
        )
    }
}