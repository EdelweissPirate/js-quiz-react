import { useState, useEffect } from "react";
import menuObjects from "../data/menuObjects";
import CustomLink from "../shared/CustomLink";

function Menu({ menuNum, setMenuNum, setGameVar}) {    
    const [mN, setMN] = useState(menuNum)
    const [menuHeader, setMenuHeader] = useState(menuObjects[mN].header)
    const [menuOptions, setMenuOptions] = useState(menuObjects[mN].options)
    const [menuPaths, setMenuPaths] = useState(menuObjects[mN].paths)

    useEffect(() => {
        menuNum > 2 ? setMenuNum(0) : setMN(menuNum)

        setMenuHeader(menuObjects[mN].header)
        setMenuOptions(menuObjects[mN].options)
        setMenuPaths(menuObjects[mN].paths)

    }, [menuNum, setMenuNum, mN, menuHeader, menuOptions, menuPaths]);

    function handleClick(i) {
        setMenuNum(mN + 1)
        if(setGameVar){
            setGameVar(menuOptions[i])
        };
    };

    return (
        <div>
            <h3>
                {menuHeader}
            </h3>

            <ul style={menuStyles}>
                {menuOptions.map((item, i) => (
                    <CustomLink key={mN + i} 
                    path={menuPaths[i]}
                    button={true}
                    children={item.toUpperCase()} 
                    clickHandle={() => {handleClick(i)}} />
                ))}
            </ul>
        </div>
    )
}

const menuStyles = {
    listStyle: 'none', 
    display: 'flex', 
    justifyContent:'center', 
    flexDirection:'column', 
    alignItems: 'center', 
    padding: 0,
};

export default Menu
