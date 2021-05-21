import React from 'react';
import s from './Error404.module.sass';
// import Tilt from 'react-tilt';

function Error404() {
    return (
        <div className={s.pageError}>
            {/*<Tilt className={s.tilt} options={{max: 20}}>*/}
                <div className={s.tiltInner}>
                    <img src='https://image.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg' alt='404'/>
                </div>
            {/*</Tilt>*/}
        </div>
    )
}

export default Error404
