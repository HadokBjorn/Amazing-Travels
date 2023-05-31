import { Card, FilterButton, PageContainer, TravelDetail } from "./TravelsPage.style";
import PriceFilter from "../../components/priceFilter/PriceFilter";
import {BsFilterCircleFill} from "react-icons/bs"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import FlightDetail from "../../components/travelDetail/FlightDetail";

export default function TravelsPage(){
    const [openFilter, setOpenFilter] = useState(false);
    const [flights, setFlights]=useState(null)
    const [renderDetail, setRenderDetail]=useState(null)
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_URL_API}/cities/${id}/flights`)
        .then((res)=>{
            setFlights(res.data)
            console.log(res.data)
        })
        .catch((err)=>console.log(err))
    },[id])

    
    return(
        <PageContainer>
            
            <FilterButton disabled={true} >
              <BsFilterCircleFill onClick={()=>setOpenFilter(true)} size={40} color="green"/>  
            </FilterButton>
            

            {openFilter?<PriceFilter setOpenFilter={setOpenFilter}/>:""}
            
            {
                flights?
                flights.map((item,i)=>(

                    <Card key={i} onClick={()=>setRenderDetail(item)}>
                        <img src={item.image} alt="city"/>
                        <TravelDetail>
                            <p>Data: {dayjs(item.date).format('DD/MM/YYYY')}</p>
                            <p>Valor: R$ {(item.price/100).toFixed(2).replace(".",",")}</p>
                            <p>Partida: {item.city}</p>
                            {/* <p>Horário: {dayjs(item.date).format('HH:mm')}</p> */}
                        </TravelDetail>
                    </Card>

                )) : 
                <Card>
                    <TravelDetail>
                        <p>Em breve teremos viagens para essa cidade...</p>
                    </TravelDetail>
                </Card>
            }
            {
                renderDetail?<FlightDetail flight={renderDetail} setRenderDetails={setRenderDetail}/>:""
            }

        </PageContainer>
    )
}