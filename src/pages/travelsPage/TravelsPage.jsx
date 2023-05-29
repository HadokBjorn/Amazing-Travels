import { Card, FilterButton, PageContainer, TravelDetail } from "./TravelsPage.style";
import imageExample from "../../assets/background_first-card.png"
import PriceFilter from "../../components/priceFilter/PriceFilter";
import {BsFilterCircleFill} from "react-icons/bs"
import { useState } from "react";

export default function TravelsPage(){
    const [openFilter, setOpenFilter] = useState(false);

    
    return(
        <PageContainer>
            <FilterButton disabled={true} >
              <BsFilterCircleFill onClick={()=>setOpenFilter(true)} size={40} color="green"/>  
            </FilterButton>
            

            {openFilter?<PriceFilter setOpenFilter={setOpenFilter}/>:""}
            
            <Card>
                <img src={imageExample} alt="city"/>
                <TravelDetail>
                    <p>Data</p>
                    <p>Preço</p>
                    <p>Local de partida</p>
                </TravelDetail>
            </Card>

            <Card>
                <img src={imageExample} alt="city"/>
                <TravelDetail>
                    <p>Data</p>
                    <p>Preço</p>
                    <p>Local de partida</p>
                </TravelDetail>
            </Card>

            <Card>
                <img src={imageExample} alt="city"/>
                <TravelDetail>
                    <p>Data</p>
                    <p>Preço</p>
                    <p>Local de partida</p>
                </TravelDetail>
            </Card>

            <Card>
                <img src={imageExample} alt="city"/>
                <TravelDetail>
                    <p>Data</p>
                    <p>Preço</p>
                    <p>Local de partida</p>
                </TravelDetail>
            </Card>

            <Card>
                <img src={imageExample} alt="city"/>
                <TravelDetail>
                    <p>Data</p>
                    <p>Preço</p>
                    <p>Local de partida</p>
                </TravelDetail>
            </Card>

            <Card>
                <img src={imageExample} alt="city"/>
                <TravelDetail>
                    <p>Data</p>
                    <p>Preço</p>
                    <p>Local de partida</p>
                </TravelDetail>
            </Card>

        </PageContainer>
    )
}