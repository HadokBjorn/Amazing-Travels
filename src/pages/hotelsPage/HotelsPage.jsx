import { Card, FilterButton, PageContainer, TravelDetail } from "./HotelsPage.style";
import PriceFilter from "../../components/priceFilter/PriceFilter";
import {BsFilterCircleFill} from "react-icons/bs"
import { useState } from "react";

export default function HotelsPage(){
    const [openFilter, setOpenFilter] = useState(false);

    
    return(
        <PageContainer>
            <FilterButton disabled={true} >
              <BsFilterCircleFill onClick={()=>setOpenFilter(true)} size={40} color="green"/>  
            </FilterButton>
            

            {openFilter?<PriceFilter setOpenFilter={setOpenFilter}/>:""}
            
            <Card>
                <img src={"https://img.freepik.com/fotos-gratis/viagens-maritimas-moderno-ninguem-infinito_1203-4520.jpg?2&w=740&t=st=1685420758~exp=1685421358~hmac=371961138188caa003e560a425d6866ff8dea641b030318b69f0a138e73f72cd"} alt="city"/>
                <TravelDetail>
                    <p>Data</p>
                    <p>Preço</p>
                    <p>Local de partida</p>
                </TravelDetail>
            </Card>
            
            <Card>
                <img src={"https://img.freepik.com/fotos-gratis/viagens-maritimas-moderno-ninguem-infinito_1203-4520.jpg?2&w=740&t=st=1685420758~exp=1685421358~hmac=371961138188caa003e560a425d6866ff8dea641b030318b69f0a138e73f72cd"} alt="city"/>
                <TravelDetail>
                    <p>Data</p>
                    <p>Preço</p>
                    <p>Local de partida</p>
                </TravelDetail>
            </Card>

            <Card>
                <img src={"https://img.freepik.com/fotos-gratis/viagens-maritimas-moderno-ninguem-infinito_1203-4520.jpg?2&w=740&t=st=1685420758~exp=1685421358~hmac=371961138188caa003e560a425d6866ff8dea641b030318b69f0a138e73f72cd"} alt="city"/>
                <TravelDetail>
                    <p>Data</p>
                    <p>Preço</p>
                    <p>Local de partida</p>
                </TravelDetail>
            </Card>

            <Card>
                <img src={"https://img.freepik.com/fotos-gratis/viagens-maritimas-moderno-ninguem-infinito_1203-4520.jpg?2&w=740&t=st=1685420758~exp=1685421358~hmac=371961138188caa003e560a425d6866ff8dea641b030318b69f0a138e73f72cd"} alt="city"/>
                <TravelDetail>
                    <p>Data</p>
                    <p>Preço</p>
                    <p>Local de partida</p>
                </TravelDetail>
            </Card>

            <Card>
                <img src={"https://img.freepik.com/fotos-gratis/viagens-maritimas-moderno-ninguem-infinito_1203-4520.jpg?2&w=740&t=st=1685420758~exp=1685421358~hmac=371961138188caa003e560a425d6866ff8dea641b030318b69f0a138e73f72cd"} alt="city"/>
                <TravelDetail>
                    <p>Data</p>
                    <p>Preço</p>
                    <p>Local de partida</p>
                </TravelDetail>
            </Card>

            <Card>
                <img src={"https://img.freepik.com/fotos-gratis/viagens-maritimas-moderno-ninguem-infinito_1203-4520.jpg?2&w=740&t=st=1685420758~exp=1685421358~hmac=371961138188caa003e560a425d6866ff8dea641b030318b69f0a138e73f72cd"} alt="city"/>
                <TravelDetail>
                    <p>Data</p>
                    <p>Preço</p>
                    <p>Local de partida</p>
                </TravelDetail>
            </Card>

        </PageContainer>
    )
}