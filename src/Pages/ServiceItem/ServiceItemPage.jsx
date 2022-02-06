import "./ServiceItem.css"
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function ServiceItemPage() {

    const params = useParams()
    const [serviceItem, setServiceItem] = useState(null)

    function getIndividualServiceFromServer () {

        fetch(`http://localhost:8000/services/${params.id}`)
          .then(resp => resp.json())
          .then(serviceFromServer => setServiceItem(serviceFromServer))
        
    }

    useEffect(getIndividualServiceFromServer, [])

    if (serviceItem === null) {
        return <main>Loading...</main>
    }

    if (serviceItem.name === undefined) {
        return <main>This service is not found</main>
    }
    
    return (

        <>

            <HeaderCommon />

            <section className="service-bio-wrapper">

                <div className="img-box">
                    <img src = {serviceItem.image}></img>
                </div>

                <div className="span-box">
                    <span>{serviceItem.desc}</span>
                </div>

            </section>

            <FooterCommon />
        
        </>

    )
    
}