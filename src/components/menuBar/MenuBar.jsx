import { MenuBarContainer } from "./MenuBar.style";
import { GiAirplaneDeparture } from "react-icons/gi"

export default function MenuBar(){
    return(
        <MenuBarContainer>
            <div className="icon-container">
                <GiAirplaneDeparture size={40}/>
            </div>
            <h1>Amazing Travels</h1>
        </MenuBarContainer>
    )
}