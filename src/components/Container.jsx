import { useState, useEffect } from 'react';
import { useShorten } from './useShorten';
import NavBar from './UI/nav-bar/NavBar';
import MobNav from './UI/mob-nav/MobNav'
import Nav from './UI/nav-bar/nav-comp/Nav';
import Logo from './UI/nav-bar/nav-comp/Logo';
import Action from './UI/nav-bar/nav-comp/Action';
import Box from './UI/box/Box';
import Header from './header/Header';
import URLFormContainer from './URLForm/URLFormContainer';
import URLForm from './urlform/urlform-comp/URLForm';
import URLList from './urlform/urlform-comp/URLList';
import StatSec from './stat-sec/StatSec';
import Footer from './footer/Footer';

function Container() {
    const [submitURL, setSubmitURL] = useState('');
    const { shortenedURL, isLoading, errorMessage } = useShorten(submitURL);
    const [isClicked, setIsClicked] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 901;
    const [urls, setUrls] = useState(function () {
        const storedUrls = localStorage.getItem('urls');
        if (storedUrls) {
            return JSON.parse(storedUrls);
        } else {
            return []
        }
    });

    useEffect(() => {
        localStorage.setItem('urls', JSON.stringify(urls));
    }, [urls]);

    useEffect(() => {
        if (shortenedURL) {
            setUrls(prevUrls => [...prevUrls, shortenedURL]);
        }
    }, [shortenedURL]);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <>
            {width > breakpoint ?
                (<NavBar>
                    <Box className={"nav"}>
                        <Logo />
                        <Nav />
                    </Box>
                    <Action />
                </NavBar>) : (
                    <NavBar>
                        <Box className={'nav'}>
                            <Logo />
                            <div className={`bars ${isClicked ? 'change' : ''}`} onClick={() => setIsClicked(!isClicked)}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </Box>
                        {isClicked && <MobNav />}
                    </NavBar>
                )}
            <Header />
            <URLFormContainer>
                <URLForm setSubmitURL={setSubmitURL} />
                <URLList urls={urls} setUrls={setUrls} isLoading={isLoading} errorMessage={errorMessage} />
            </URLFormContainer>
            <StatSec />
            <Footer />
        </>
    );
}

export default Container;
