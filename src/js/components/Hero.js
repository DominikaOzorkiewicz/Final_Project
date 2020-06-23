import React from 'react';



export const Hero = () => {


    return (
        <div className='hero' >
            <Header/>
            <Banner/>
        </div>
    );
}


const Header = () => {

    return (
        <header className='header'>
            <div className='header__container container' >

                <a href='/' className='logo'>Happy paws</a>

                <nav className='menu' >
                    <ul>
                        <li href='#app' className='menu__link' >
                            <a className='menu__link-el' >Make paws happy!</a>
                        </li>

                        <li href='#about' className='menu__link' >
                            <a className='menu__link-el' >About us</a>
                        </li>

                        <li href='#contact' className='menu__link' >
                            <a className='menu__link-el' >Contact</a>
                        </li>
                    </ul>
                </nav>


            </div>
        </header>
    );

}


const Banner = () => {

    return (
        <div className='banner'>
            <div className='banner__container container' >



            </div>
        </div>

    );

}