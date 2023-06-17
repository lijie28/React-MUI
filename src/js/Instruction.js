import * as React from 'react';
import Button from '@mui/material/Button';

export class Instruction extends React.Component {

    render() {
        return (
            <div className='mainBg'>
                <div className='mainArea' >
                    <div className='subArea'>
                        <div>
                            <p className='mainText'>
                                Thank you for taking this annotation task.
                            </p>
                            <p className='mainText'>
                                On the following pages, we will ask you to indicate
                                your judgement based on given instructions.
                            </p>
                            <p className='mainText' style={{ 'font-weight': 'bold' }}>
                                Make your judgement based on the “more likely than not” standard.
                            </p>
                            <p className='mainText'>
                                Proceed to the next page for three practice tasks.
                            </p>
                        </div >
                    </div >
                </div >
                <Button className='proceedButton' variant="contained" onClick={this.props.nextPage} > Proceed</Button >
            </div >
        )
    }
}