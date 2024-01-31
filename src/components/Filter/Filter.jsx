import React from "react";
import { FilterWrapper,FilterLabel,FilterInput } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { getFilter } from "../../redux/selectors";
import { FaSearch } from "react-icons/fa";
const Filter =()=> {
const dispatch = useDispatch();
const filter = useSelector(getFilter);
const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
}

    return (
        <FilterWrapper>
        <FilterLabel>
        <span style={{
            textAlign: 'left',
            width: '40%',
        }}>Find contacts by name</span>

        <div style={{
            position: 'relative',
            width: '80%'
        }}><FaSearch style={{
            position: 'absolute',
            left: '10px',
            top: '10px',
            height: '30px',
        }}/>
        <FilterInput type="text"
                name="filter"
                onChange={handleChange}
                value={filter}
                />
          
        </div>


        </FilterLabel>
        </FilterWrapper>
            )
}
export default Filter