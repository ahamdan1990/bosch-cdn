import React  from 'react'
import CarouselBlock from '../../Components/Carousel_Block';
import { Logo,LogoCdn, HeaderLogos, HeaderTimeline,PageContainer,StripHeader, StripHeaderHeading, SectionsContainer,Section,StripHeaderHeadingText, SectionMax, SectionHeader, SectionImgContainer, SectionHeading, SectionText} from './homepage.style';
import { Card } from '../../Components/Card/Card.component';
import {database} from "../../database.js";

const Homepage = () => {

    return (
        <div>
            <HeaderTimeline></HeaderTimeline>
            <PageContainer>
                <HeaderLogos>
                    <LogoCdn src="./cdn_logo.png" />
                    <Logo src="./bosch_logo.png" />
                </HeaderLogos>

                <CarouselBlock></CarouselBlock>

                <StripHeader>
                    <StripHeaderHeading>
                        <StripHeaderHeadingText>
                            Offering in Lebanon professional air conditioning,ventilation, heating and hot water solutions from Bosch Thermotechnology.
                        </StripHeaderHeadingText>
                    </StripHeaderHeading>
                </StripHeader>

                <SectionsContainer>

                    <Section>
                        <SectionMax>

                            <SectionHeader>
                                <SectionHeading>
                                    Air Conditioning And Ventilation
                                </SectionHeading>
                                <SectionText>
                                    Simply providing a pleasant environment for your home.
                                </SectionText>
                            </SectionHeader>

                            <SectionImgContainer>

                                <Card 
                                    imageSrc={database.Air_Conditioning.imageSrc}
                                    headerText={database.Air_Conditioning.headerText}
                                    contentText={database.Air_Conditioning.contentText}
                                    linkHref={database.Air_Conditioning.linkHref}
                                ></Card>

                                <Card 
                                    imageSrc={database.Ventilation.imageSrc}
                                    headerText={database.Ventilation.headerText}
                                    contentText={database.Ventilation.contentText}
                                    linkHref={database.Ventilation.linkHref}
                                ></Card>

                            </SectionImgContainer>

                        </SectionMax>
                    </Section>

                    <Section>
                        <SectionMax>

                            <SectionHeader>
                                <SectionHeading>
                                Hot Water Solutions
                                </SectionHeading>
                                <SectionText>
                                Benefit from free solar energy - with pioneering solar technology from Bosch.
                                </SectionText>
                            </SectionHeader>

                            <SectionImgContainer>
                            <Card 
                                    imageSrc={database.Thermosiphon.imageSrc}
                                    headerText={database.Thermosiphon.headerText}
                                    contentText={database.Thermosiphon.contentText}
                                    linkHref={database.Thermosiphon.linkHref}
                                ></Card>
                                <Card 
                                    imageSrc={database.Collectors.imageSrc}
                                    headerText={database.Collectors.headerText}
                                    contentText={database.Collectors.contentText}
                                    linkHref={database.Collectors.linkHref}
                                ></Card>
                                <Card 
                                    imageSrc={database.Gas_Water.imageSrc}
                                    headerText={database.Gas_Water.headerText}
                                    contentText={database.Gas_Water.contentText}
                                    linkHref={database.Gas_Water.linkHref}
                                ></Card>
                            </SectionImgContainer>

                        </SectionMax>
                    </Section>

                    <Section>
                        <SectionMax>

                            <SectionHeader>
                                <SectionHeading>
                                Large solar thermal plants
                                </SectionHeading>
                                <SectionText>
                                Benefit from free solar energy - with pioneering solar technology from Bosch.
                                </SectionText>
                            </SectionHeader>

                            <SectionImgContainer>
                            <Card 
                                    imageSrc={database.Large_Solar.imageSrc}
                                    headerText={database.Large_Solar.headerText}
                                    contentText={database.Large_Solar.contentText}
                                    linkHref={database.Large_Solar.linkHref}
                                    Last={true}
                                ></Card>
                            </SectionImgContainer>

                        </SectionMax>
                    </Section>
                </SectionsContainer>
            </PageContainer>
        </div>
    )
}

export default Homepage;