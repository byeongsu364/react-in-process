import React from 'react'
import { useParams } from 'react-router-dom'

const CompanyDetail = () => {

    const {name} = useParams()

    return (
        <div>Company {name} 안내</div>
    )
}

export default CompanyDetail