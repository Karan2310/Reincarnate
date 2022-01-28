import React, { useEffect, useState } from 'react';

const Theme = () => {


    const [darkTheme, setDarkTheme] = useState(false);

    const themeChange = () => {
        setDarkTheme(!darkTheme)
        document.documentElement.setAttribute('data-theme', `${darkTheme ? "dark" : "light"}`)
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', "dark")
    }, []);

    return <div>
        <button onClick={themeChange}>Change Theme</button>
    </div>;
};

export default Theme;
