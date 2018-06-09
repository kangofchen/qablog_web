import React, {Component} from 'react';
import ExcellentHomePage from './components/ExcellentHomePage';
import BrandDisplay from './components/BrandDisplay';
import PlatformBlackIntro from './components/PlatformBlackIntro';
import LandingIntroBanner from "./components/LandingIntroBanner/LandingIntroBanner";
import SimpleFooter from "./components/SimpleFooter/SimpleFooter";

export default class Homepage extends Component {
    static displayName = 'Homepage';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="homepage-page">
                <SimpleFooter/>
                <ExcellentHomePage/>
                <LandingIntroBanner/>
                <BrandDisplay/>
                <PlatformBlackIntro/>
            </div>
        );
    }
}
