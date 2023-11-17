import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
    );
}

export default Header;
