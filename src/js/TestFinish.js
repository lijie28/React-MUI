import * as React from 'react';
import Button from '@mui/material/Button';

export class TestFinish extends React.Component {

    render() {
        return (
            <div className='mainBg'>
                <div className='mainArea' >
                    <div className='subArea'>
                        <div>
                            <p className='mainText'>
                                You have finished the practice tasks.
                            </p>
                            <br />
                            <p className='mainText' style={{ 'font-weight': 'bold' }}>
                                Instructions may change on different pages.
                            </p>
                            <p className='mainText' style={{ 'font-weight': 'bold' }}>
                                Make your judgement based on the “more likely than not” standard.
                            </p>
                            <p className='mainText' style={{ 'font-weight': 'bold' }}>
                                Do not overinterpret.
                            </p>
                            <br />
                            <p className='mainText'>
                                Proceed to the main tasks when you are ready.
                            </p>
                        </div >
                    </div >
                </div >
                <Button className='proceedButton' variant="contained" onClick={this.props.nextPage} > Proceed</Button >
            </div >
        )
    }
}