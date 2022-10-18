import styled from "styled-components";
import { device } from "../../responsive-sizez";

export const CardContainer = styled.div`
    display:flex;
    flex-flow:column;
    margin:1rem;
    position:relative;
    width:${props => props.Last? 100 : 33.333333}%;
    background:#fff;

    @media ${device.laptop_1024px} {
        width:90%;
    }

    @media ${device.mobileL_425px} {
        margin-top:4rem;
    }
`

export const CardImg = styled.img`
    width:100%;
    height:100%;
`

export const CardContent = styled.div`
    display: flex;
    flex-flow: column;
    padding: 20px 0;
    justify-content:center;
    align-items:center;
    @media ${device.mobileL_425px} {
        
    }
`

export const CardContentHeading = styled.h4`
    margin-top: 0;
    font-size: 1.7rem;
    line-height: 34px;
    margin-bottom:1rem;
    @media ${device.mobileL_425px} {
        font-size:2.7rem;
    }
`

export const CardContentText = styled.p`
    line-height: 1.375rem;
    margin: 0 0 15px;
    font-weight:600;
    @media ${device.mobileL_425px} {
        font-size:1.4rem;
        line-height: 2.3rem;
    }
`

export const BtnLink = styled.a`
    display: inline-block;
    margin-bottom: 0;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    user-select: none;
    text-decoration: none;
    padding: 13px 20px;
    font-size: 16px;
    line-height: 1.3;
    border-radius: 1px;
    transition: 0.5s;
    white-space: normal;
    height: auto;
    overflow: hidden;
    color: #000;
    background-color: transparent;
    border-color: #bfc0c2;
    opacity: 1;
    width:70%;
    align-self:center;
    margin: 1rem auto;
`