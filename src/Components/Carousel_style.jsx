import styled from 'styled-components';
import {device} from "../responsive-sizez";

export const CarouselContainer = styled.div`
    position:absolute;
    top:5rem;
    width:100%;
    background:#fff;
    height:60vh;

    @media ${device.laptop_1024px} {
        height:50vh;
    }

    @media ${device.mobileL_425px} {
        height:20vh;
    }
`