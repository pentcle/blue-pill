import React, {Component} from "react"

import IconTwitter from './icons/IconTwitter';
import IconGithub from './icons/IconGithub';
import IconYearnFooter from './icons/IconYearnFooter';
import IconCalendar from "./icons/IconCalendar";

class Footer extends Component {
    render() {
        return (<footer>
            <a className="icon-link" href={'https://x.com/yearnfi'} target={'_blank'} rel={'noreferrer'}><span>Twitter</span><IconTwitter/></a>
            <a className="icon-link" href={'https://github.com/yearn'} target={'_blank'} rel={'noreferrer'}><span>Github</span><IconGithub/></a>
            <a className="icon-link" href={'https://yearn.fi'} target={'_blank'} rel={'noreferrer'}><span>Yearn</span><IconYearnFooter/></a>
        </footer>);
    }
}

export default Footer;
