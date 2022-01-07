import { useState, useEffect } from 'react'

// https://api.github.com/users/username

function Footer(props){
    const [creatorData, setCreatorData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    let iconURL = '';

    useEffect(() => {
        setLoading(true)
        fetch('https://api.github.com/users/EdelweissPirate')
            .then((response) => response.json())
            .then(setCreatorData)
            .then(() => {setLoading(false)})
            .catch(setError)
    }, [])

    if(loading) return <h1>Loading...</h1> 
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>

    creatorData ? iconURL = creatorData.avatar_url : console.log("Looking for GitHub...")

    return (
        <footer style={{backgroundColor: 'darkBlue', color:"white", alignItems: 'center'}}>
            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h4 style={{padding: '0px 20px'}}>
                    TEST YOUR MIGHT
                </h4>
                <div style={{display:'flex', justifyContent: 'flex-end', padding: 20, alignItems: 'center'}}>
                    <h5 style={{paddingRight:20}}>
                    Copyright {props.year}
                    </h5>
                    <a href='https://github.com/EdelweissPirate' target="_blank" rel="noopener noreferrer" title="visit GitHub.com">
                        <img src={iconURL} alt='missing logo' height={50}/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer
