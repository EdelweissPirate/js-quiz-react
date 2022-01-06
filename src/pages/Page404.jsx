import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Page404() {
    const [logoData, setlogoData] = useState(null)
    
    useEffect(() => {
        fetch('https://api.github.com/users/EdelweissPirate')
            .then((response) => response.json())
            .then(setlogoData)
            .catch((e) => {
                return console.log(e)
            })
    }, []);

    let iconURL = ''

    logoData ? iconURL = logoData.avatar_url : console.log("Looking GitHub...")

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <h1>404</h1>
            <Link to='/'>
                <img src={iconURL} alt='missing logo' height='80%'/>
            </Link>
        </div>
    )
}

export default Page404
