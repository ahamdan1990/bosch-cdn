import React from "react";
import { CardContainer, CardContent, CardContentHeading, CardContentText, CardImg, BtnLink } from "./Card.style";
import ReactReadMoreReadLess from "react-read-more-read-less";

export const Card = ({imageSrc,headerText,contentText,linkHref,Last}) => {
    
    return (
        <CardContainer Last={Last}>
            <CardImg src={imageSrc} />
            <CardContent>
                <CardContentHeading>
                    {headerText}
                </CardContentHeading>
                <CardContentText>
                    <ReactReadMoreReadLess  
                        charLimit={90}
                        readMoreText={"Read more ▼"}
                        readLessText={"Read less ▲"}
                    >
                    {contentText}
                    </ReactReadMoreReadLess>
                </CardContentText>
                <BtnLink href={linkHref} target="_blank">
                    Open Datasheet
                </BtnLink>
            </CardContent>
        </CardContainer>
    )
}