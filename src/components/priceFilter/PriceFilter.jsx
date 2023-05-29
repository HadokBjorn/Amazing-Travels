import { useState } from "react";
import { FilterContainer } from "./PriceFilter.style";

export default function PriceFilter({setOpenFilter}){
    /* const minPriceRef = useRef()
    const maxPriceRef = useRef() */
    const [values, setValues] = useState({minValue: "", maxValue: ""})

    function handleFilter(e){
        setValues({...values,[e.target.name]:e.target.value})
    }

    return(
        <FilterContainer>
        
        <input type="range" name="minValue" min={1} max={100} onChange={handleFilter}/>
        <p>{values.minValue}</p>
        <input type="range" name="maxValue" min={1} max={100} onChange={handleFilter}/>
        <p>{values.maxValue}</p>

        <button onClick={()=>setOpenFilter(false)}>Filtrar</button>
            
        </FilterContainer>
    )
}