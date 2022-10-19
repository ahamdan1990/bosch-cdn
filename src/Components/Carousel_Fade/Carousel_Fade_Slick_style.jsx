import styled from "styled-components";
import { device } from "../../responsive-sizez";

export const CarouselImage = styled.img`
    width:100%;
    height:60vh;

    @media ${device.laptop_1024px} {
        height:50vh;
    }

    @media ${device.mobileL_425px} {
        height:20vh;
    }
`