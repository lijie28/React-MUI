
import * as React from 'react';
import '../css/Common.css';
import { TestSample } from './TestSample.js';
import { Instruction } from './Instruction.js';
import { TestFinish } from './TestFinish.js';
import { TestSmallPic1 } from './TestSmallPic1.js';
import { TestSmallPic2 } from './TestSmallPic2.js';
import { TestSmallPic3 } from './TestSmallPic3.js';
import { TestBigPic1 } from './TestBigPic1.js';
import { TestBigPic2 } from './TestBigPic2.js';
import { TestBigPic3 } from './TestBigPic3.js';
import { Demographics } from './Demographics.js';
import { ShowCode } from './ShowCode.js';

const ShowPage = {
    homepage: 'Homepage',
    instruction: 'Instruction',
    testSample: 'TestSample',
    testFinish: 'TestFinish',
    testSmallPic1: 'TestSmallPic1',
    testSmallPic2: 'TestSmallPic2',
    testSmallPic3: 'TestSmallPic3',
    testBigPic1: 'TestBigPic1',
    testBigPic2: 'TestBigPic2',
    testBigPic3: 'TestBigPic3',
    demographics: 'Demographics',
    showCode: 'ShowCode'
}

export class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPage: ShowPage.instruction,
        }
        this.loadFinish();
    }

    loadFinish = () => {
        console.log("loadFinish")
    }

    setShowPage = (showPage) => {
        this.setState({
            showPage: showPage
        })
    }

    nextPage = () => {
        if (this.state.showPage === ShowPage.instruction) {
            this.setShowPage(ShowPage.testSample)
        }
        else if (this.state.showPage === ShowPage.testSample) {
            this.setShowPage(ShowPage.testFinish)
        }
        else if (this.state.showPage === ShowPage.testFinish) {
            this.setShowPage(ShowPage.testSmallPic1)
        }
        else if (this.state.showPage === ShowPage.testSmallPic1) {
            this.setShowPage(ShowPage.testSmallPic2)
        }
        else if (this.state.showPage === ShowPage.testSmallPic2) {
            this.setShowPage(ShowPage.testSmallPic3)
        }
        else if (this.state.showPage === ShowPage.testSmallPic3) {
            this.setShowPage(ShowPage.testBigPic1)
        }
        else if (this.state.showPage === ShowPage.testBigPic1) {
            this.setShowPage(ShowPage.testBigPic2)
        }
        else if (this.state.showPage === ShowPage.testBigPic2) {
            this.setShowPage(ShowPage.testBigPic3)
        }
        else if (this.state.showPage === ShowPage.testBigPic3) {
            this.setShowPage(ShowPage.demographics)
        }
        else if (this.state.showPage === ShowPage.demographics) {
            this.setShowPage(ShowPage.showCode)
        }
    }


    render() {
        const { data } = this.props;
        return (
            this.state.showPage === ShowPage.instruction ?
                <Instruction nextPage={this.nextPage} /> :
                this.state.showPage === ShowPage.testSample ?
                    <TestSample nextPage={this.nextPage} data={data} /> :
                    this.state.showPage === ShowPage.testFinish ?
                        <TestFinish nextPage={this.nextPage} /> :
                        this.state.showPage === ShowPage.testSmallPic1 ?
                            <TestSmallPic1 nextPage={this.nextPage} data={data} /> :
                            this.state.showPage === ShowPage.testSmallPic2 ?
                                <TestSmallPic2 nextPage={this.nextPage} data={data} /> :
                                this.state.showPage === ShowPage.testSmallPic3 ?
                                    <TestSmallPic3 nextPage={this.nextPage} data={data} /> :
                                    this.state.showPage === ShowPage.testBigPic1 ?
                                        <TestBigPic1 nextPage={this.nextPage} data={data} /> :
                                        this.state.showPage === ShowPage.testBigPic2 ?
                                            <TestBigPic2 nextPage={this.nextPage} data={data} /> :
                                            this.state.showPage === ShowPage.testBigPic3 ?
                                                <TestBigPic3 nextPage={this.nextPage} data={data} /> :
                                                this.state.showPage === ShowPage.demographics ?
                                                    <Demographics nextPage={this.nextPage} data={data} /> :
                                                    this.state.showPage === ShowPage.showCode ?
                                                        <ShowCode nextPage={this.nextPage} data={data} /> :
                                                        null
        )
    }
}