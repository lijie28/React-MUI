import * as React from 'react';
import '../css/Demographics.css';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export class Demographics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            warning: false,
            gender: null,
            age: null
        }
    }

    isButtonClickable = () => {
        return ((this.state.gender != null) && (this.state.age != null))
    }


    genderOnChange = (event) => {
        this.setState({
            gender: event.target.value,
        })
        // console.log(this.state.gender)
    };

    ageOnChange = (e) => {
        const { value: inputValue } = e.target;
        this.setState({
            age: inputValue
        })
        // console.log(inputValue)
    };


    handleOk = () => {
        this.setState({
            warning: false
        })
    };

    nextPage = () => {
        const reg = /^[0-9]*$/;
        const age = Number(this.state.age);
        if (reg.test(this.state.age) && age < 80 && age > 10) {
            this.props.data.age = this.state.age
            this.props.data.gender = this.state.gender
            // console.log(this.props.data)
            this.props.nextPage();
        } else {
            console.log("warning")
            this.setState({
                warning: true
            })
        }
    }

    render() {
        return (
            <div className='mainBg'>
                < div className='mainArea' >
                    <div className='subDemographicsArea'>
                        <p className='mainText'>
                            Your mTurk ID:
                        </p>

                        <p className='mainText'>
                            What is your gender?
                        </p>
                        <RadioGroup
                            defaultValue="female"
                            aria-labelledby="demo-customized-radios"
                            name="customized-radios"
                            onChange={this.genderOnChange}
                        >
                            <FormControlLabel value="0" control={<Radio />} label="Male" />
                            <FormControlLabel value="1" control={<Radio />} label="Female" />
                            <FormControlLabel value="2" control={<Radio />} label="Non-binary / third gender" />
                            <FormControlLabel value="3" control={<Radio />} label="Prefer not to say" />
                        </RadioGroup>

                        <br />
                        <p className='mainText'>
                            What is your age? {'(please enter numbers only)'}
                        </p>
                        <TextField
                            id="outlined-number"

                            type="number"
                            onChange={this.ageOnChange}
                            variant="outlined" />
                    </div >
                </div >

                {this.isButtonClickable() ? <Button className='proceedButton' variant="contained" onClick={this.nextPage} > Proceed </Button> : <Button className='proceedButton' variant="contained" disabled> Proceed</Button>}
                <Dialog
                    open={this.state.warning}
                    onClose={this.handleOk}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Please enter your age in numbers {'(10 - 80)'}
                    </DialogTitle>
                    {/* <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Please enter your age in numbers
                        </DialogContentText>
                    </DialogContent> */}
                    <DialogActions>
                        <Button onClick={this.handleOk} autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div >
        )
    }
}