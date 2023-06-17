import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const picUrl = 'https://lj28.s3.ap-northeast-1.amazonaws.com/test1.png'

export class ShowCode extends React.Component {
    constructor(props) {
        super(props);

    }


    copyTestingId = () => {
        navigator.clipboard.writeText(this.props.data.session_id)
            .then(res => console.log(`${this.props.data.session_id} copied`))
            .catch(err => console.log(err))
    }

    downloadDataForTest = () => {
        const { data } = this.props;
        console.log(`Submitting the data: ${JSON.stringify(data, null, 2)}`);
        this.downloadJson(JSON.stringify(data, null, 2), `${data.session_id}.json`);
    }

    downloadJson(content, fileName) {
        var a = document.createElement("a");
        var file = new Blob([content], { type: 'text/plain' });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    render() {
        return (
            <div className='mainBg'>
                < div className='mainArea' >
                    <div className='subArea'>
                        <p className='mainText'>
                            Thank you. Your response has been recorded.
                        </p>
                        <p className='mainText'>
                            Your verification code is:
                        </p>
                        <p className='mainText'>
                            {this.props.data.session_id} <Link underline="hover" href="#" onClick={this.copyTestingId}>{"<copy>"}</Link>
                        </p>
                        <p className='mainText'>
                            Enter this verification code to get compensated on mTurk.
                        </p>
                        <Button variant="contained" onClick={this.downloadDataForTest} style={{ margin: '10%' }}> Download Data (for test)</Button >
                    </div >
                </div >
            </div >
        )
    }
}