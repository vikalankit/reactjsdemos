import React from 'react';

function Menus(){
    const menus = ['Home', ' About Us', 'Contact Us','Home'];
    const menuItems = menus.map((item,index) => {return <li key={index}><a href='#'>{index}{item}</a></li>});
    return(
        <div>
            <ul>
                {menuItems}
            </ul>
        </div>
    );
}

export default Menus;