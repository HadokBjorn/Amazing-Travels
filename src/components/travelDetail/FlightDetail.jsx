import dayjs from "dayjs";
import { Card, ComponentContainer, TravelDetail } from "./FlightDetail.style";

export default function FlightDetail({setRenderDetails, flight}){
    return(
        <ComponentContainer>
            <Card>
                <img src={flight.image} alt="city"/>
                <TravelDetail>
                    <p>Decolagem em: {flight.city}</p>
                    <p>Compania aérea: {flight.company}</p>
                    <p>Data do voo: {dayjs(flight.date).format('DD/MM/YYYY')}</p>
                    <p>Horário de decolagem: {dayjs(flight.date).format('HH:mm')}</p>
                    <p>Data de pouso: {dayjs(flight.arrive_date).format('DD/MM/YYYY')}</p>
                    <p>Horário de pouso: {dayjs(flight.arrive_date).format('HH:mm')}</p>
                    <p>Valor da passagem: R$ {(Number(flight.price)/100).toFixed(2).replace(".",",")}</p>
                </TravelDetail>
                <button onClick={()=>setRenderDetails(null)}>Voltar</button>
            </Card>
        </ComponentContainer>
    )
}