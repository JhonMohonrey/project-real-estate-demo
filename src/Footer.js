import React from 'react';
import tweeter from './asset/Social/social.png'
import fbActive from './asset/Social/fb active.png'
import fbNotActive from './asset/Social/fb not active.png'
import githubActive from './asset/Social/github active.png'
import githubNotActive from './asset/Social/github not active.png'
import IGNotActive from './asset/Social/id not active.png'
import IGActive from './asset/Social/ig active.png'
import TweetActive from './asset/Social/tweet active.png'
import TweetNotActive from './asset/Social/tweet not active.png'


function Footer(props) {
    let [social, setSocial] = React.useState(
        {
            tweet: false,
            fb: true,
            ig: false,
            github: false,
        }
    )

    let tweet = () => {
        setSocial({
            tweet: true,
            fb: false,
            ig: false,
            github: false,
        })
    }

    let faceBook = () => {
        setSocial({
            tweet: false,
            fb: true,
            ig: false,
            github: false,
        })
    }

    let Instagram = () => {
        setSocial({
            tweet: false,
            fb: false,
            ig: true,
            github: false,
        })
    }

    let Github = () => {
        setSocial({
            tweet: false,
            fb: false,
            ig: false,
            github: true,
        })
    }
    return (
        <div className='footerContainer'>
            <div className='container'>
                <div className='topContainer'>
                    <div>
                        <h1>Estate.com</h1>
                    </div>
                    <div className='property'>
                        <p>Property</p>
                        <p>Agent</p>
                        <p>Blog</p>
                    </div>
                    <div className='social'>
                        <img
                        onClick={tweet}
                        src={social.tweet ? TweetActive : TweetNotActive} />
                        <img
                        onClick={faceBook}
                        src={social.fb ? fbActive : fbNotActive} />
                        <img
                        onClick={Instagram}
                        src={social.ig ? IGActive : IGNotActive} />
                        <img
                        onClick={Github}
                        src={social.github ? githubActive : githubNotActive} />
                    </div>
                </div>
                <div className='line'></div>
                <div className='copyright'>
                    <p>	&#169; Copyright 2024, All Rights Reserved by Jhon Mohonrey Ramos</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;