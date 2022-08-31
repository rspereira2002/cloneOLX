import React from 'react'
import { Link } from 'react-router-dom'

const Page = () => {
    return(
        <div>
            <h2>Página Inicial</h2>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Page