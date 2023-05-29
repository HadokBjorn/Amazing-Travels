import { useState } from "react";
import { FilterContainer, ReturnButton } from "./PriceFilter.style";
import {TiBackspace} from "react-icons/ti"

export default function PriceFilter({setOpenFilter}){
    
    const [values, setValues] = useState({minValue: "", maxValue: ""})

    function handleFilter(e){
        setValues({...values,[e.target.name]:e.target.value})
    }
    function applyFilter(e){
        e.preventDefault()
        console.log("Aplica filtro")
    }

    return(
        <FilterContainer>
        <form onSubmit={applyFilter}>
            <ReturnButton>
                <TiBackspace size={30}  onClick={()=>setOpenFilter(false)}/>
            </ReturnButton>
            <div>
                <label htmlFor="minValue">Menor preço: {values.minValue}</label>
                <input type="range" name="minValue" min={1} max={100} onChange={handleFilter}/>
                <label htmlFor="maxValue">Maior preço: {values.maxValue}</label>
                <input type="range" name="maxValue" min={1} max={100} onChange={handleFilter}/>
            </div>
            
            <button type="submit">Filtrar</button>

        </form>
            
        </FilterContainer>
    )
}