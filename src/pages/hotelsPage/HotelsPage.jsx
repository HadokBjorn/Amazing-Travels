import { Card, FilterButton, HotelDetail, PageContainer } from "./HotelsPage.style";
import PriceFilter from "../../components/priceFilter/PriceFilter";
import {BsFilterCircleFill} from "react-icons/bs"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function HotelsPage(){
    const {id} = useParams();
    const navigate=useNavigate();
    const [openFilter, setOpenFilter] = useState(false);
    const [hotels, setHotels] = useState(null);
    
    console.log(id)

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_URL_API}/cities/${id}/hotels`)
            .then((res)=>{
                setHotels(res.data)
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    },[id])
    
    return(
        <PageContainer>
            <FilterButton disabled={true} >
              <BsFilterCircleFill onClick={()=>setOpenFilter(true)} size={40} color="green"/>  
            </FilterButton>
            

            {openFilter?<PriceFilter setOpenFilter={setOpenFilter}/>:""}
            
            {
                hotels?
                hotels.map((item, i)=>(
                    <Card key={i}>
                        <img src={item.images[0].image} alt="city"/>
                        <HotelDetail>
                            <p>{item.hotel}</p>
                            <p>{item.description}</p>
                            <p>Diária: R$ {(item.price_per_day/100).toFixed(2).replace(".",",")}</p>

                        </HotelDetail>
                    </Card>
                )):
                    <Card>
                        <HotelDetail>
                            <p>Em breve teremos hotéis disponíveis</p>
                        </HotelDetail>
                    </Card>
            }
            
            <button onClick={()=>navigate(`/cities/${id}/travels`)}>{"<< Passagens Aéreas"}</button>
        </PageContainer>
    )
}