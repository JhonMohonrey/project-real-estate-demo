import React from 'react';
import menuBtn from './asset/menu.png'
import exitBtn from './asset/door.png'
import home from './asset/home.png'
import agent from './asset/agent.png'
import blogs from './asset/blogs.png'
import whiteHome from './asset/White property.png'
import whiteAgent from './asset/White agent.png'
import whiteBlogs from './asset/White blogs.png'

function Header(props) {
    let [menuData, setMenuData] = React.useState(true)
    let [active, setActive] = React.useState([
        {
            property: true,
            agent: false,
            blogs: false,
        }
    ])

    let propertyBtn = () => {
        setActive(prev => {
            return {
                property: true,
                agent: false,
                blogs: false,
            }
        })
    }

    let agentBtn = () => {
        setActive(prev => {
            return {
                property: false,
                agent: true,
                blogs: false,
            }
        })
    }

    let blogsBtn = () => {
        setActive(prev => {
            return {
                property: false,
                agent: false,
                blogs: true,
            }
        })
    }

    let menu = () => {
        setMenuData(prev => !prev)
        setActive(prev => {
            return {
                property: true,
                agent: false,
                blogs: false,
            }
        })
    }
    let exit = () => {
        setMenuData(prev => !prev)
    }

    return (
        <div className='header'>
            <div className='desktopContainer'>
                <div className='title'>
                    <h2>Estate.com</h2>
                </div>

                <div className='blogs'>
                    <h3>Property</h3>
                    <h3>Agent</h3>
                    <h3>Blogs</h3>
                </div>

                <div className='login'>
                    <button className='loginBtn'>Login</button>
                    <button className='contactBtn'>Contact</button>
                </div>
            </div>
            
            <div className='MobileContainer'>
                <div className='mainPanel'>
                    <div>
                        <h2>Estate.com</h2>
                    </div>
                    <div className='menuBtn'>
                        <img onClick={menu} src={menuBtn} />
                    </div>
                </div>
                <div className={menuData ? "bottomPanel hidden" : "bottomPanel"}>
                    <div className='titlePan'>
                        <h2>Estate.com</h2>

                        <img onClick={exit} src={exitBtn} />
                    </div>

                    <div className='containerSection'>
                        <div
                        onClick={propertyBtn}
                        className={active.property ? 'option active' : "option"}>
                            <img src={active.property ? whiteHome : home} />
                            <h2>Property</h2>
                        </div>
                        <div 
                        onClick={agentBtn}
                        className={active.agent ? 'option active' : "option"}>
                            <img src={active.agent ? whiteAgent : agent} />
                            <h2>Agent</h2>
                        </div>
                        <div 
                        onClick={blogsBtn}
                        className={active.blogs ? 'option active' : "option"}>
                            <img src={active.blogs ? whiteBlogs : blogs} />
                            <h2>Blogs</h2>
                        </div>
                    </div>
                    <div className='btn'>
                        <button>Login</button>
                        <button className='contactBtn'>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;