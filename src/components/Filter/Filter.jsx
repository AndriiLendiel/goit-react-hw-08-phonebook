import React from "react";
import { FilterWrapper,FilterLabel,FilterInput } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { getFilter } from "../../redux/selectors";

export const Filter =()=> {
const dispatch = useDispatch();
const filter = useSelector(getFilter);
const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
}

    return (
        <FilterWrapper>

        <FilterLabel>Find contacts by name
        <FilterInput type="text"
                name="filter"
                onChange={handleChange}
                value={filter}
                />
        </FilterLabel>

        </FilterWrapper>
        
        
            )

}