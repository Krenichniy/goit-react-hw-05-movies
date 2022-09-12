import styled from "styled-components";
import { Link } from 'react-router-dom';
export const StyledLink = styled(Link)`
    color:teal;
    text-decoration:none;
    &:hover{
        color:blue;
    }
`
export const StyledMoviesList = styled.ul`
        margin:0;
        padding:0;
        list-style:none;
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
`
export const StyledItem = styled.li`
        display:flex;
         align-items:center;
`

export const StyledTitle = styled.p`
        width:200px;
`