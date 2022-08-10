import React, { forwardRef } from "react";
import { Box } from '@material-ui/core';
import styled from "styled-components";
import imgBackground02 from '../../assets/image/background02.png'
import Marquee from "react-fast-marquee";
import { AiFillTwitterCircle } from "react-icons/ai"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Twitter = forwardRef((props, ref) => {

    return (
        <StyledComponent ref={ref} mt={"100px"}>
            <StateStr01>The Hunt: Twitter Activity</StateStr01>
            <MarqueeBox01 mt={"10px"}>
                <Marquee speed={"50"} gradientColor={[0, 0, 0]} style={{ borderRadius: "20px" }}>
                    <EachTwitterBox01><EachTwitterBox02><AiFillTwitterCircle fontSize={"4rem"} color={"#1da1f2"} /></EachTwitterBox02></EachTwitterBox01>
                    <EachTwitterBox01><EachTwitterBox02><AiFillTwitterCircle fontSize={"4rem"} color={"#1da1f2"} /></EachTwitterBox02></EachTwitterBox01>
                    <EachTwitterBox01><EachTwitterBox02><AiFillTwitterCircle fontSize={"4rem"} color={"#1da1f2"} /></EachTwitterBox02></EachTwitterBox01>
                    <EachTwitterBox01><EachTwitterBox02><AiFillTwitterCircle fontSize={"4rem"} color={"#1da1f2"} /></EachTwitterBox02></EachTwitterBox01>
                    <EachTwitterBox01><EachTwitterBox02><AiFillTwitterCircle fontSize={"4rem"} color={"#1da1f2"} /></EachTwitterBox02></EachTwitterBox01>
                    <EachTwitterBox01><EachTwitterBox02><AiFillTwitterCircle fontSize={"4rem"} color={"#1da1f2"} /></EachTwitterBox02></EachTwitterBox01>
                </Marquee>
            </MarqueeBox01>
            <TwitterArticleBox01 mt={"100px"} mb={"100px"}>
                <NewArticleBox01>
                    <StateStr01>{"The Hunt: News & Articles"}</StateStr01>
                    <CarouselBox01 mt={"20px"}>
                        <ButtonBack01><MdKeyboardArrowLeft color={"white"} fontSize={"4rem"} /></ButtonBack01>
                        <ButtonNext01><MdKeyboardArrowRight color={"white"} fontSize={"4rem"} /></ButtonNext01>

                        <CarouselProvider
                            naturalSlideWidth={1000}
                            naturalSlideHeight={450}
                            totalSlides={6}
                            infinite={true}
                        >
                            <DotGroup>
                                <ButtonBack>
                                    <ButtonBack01><MdKeyboardArrowLeft color={"white"} fontSize={"4rem"} /></ButtonBack01>
                                </ButtonBack>
                                <ButtonNext>
                                    <ButtonNext01><MdKeyboardArrowRight color={"white"} fontSize={"4rem"} /></ButtonNext01>
                                </ButtonNext>
                                <Slider>
                                    <Slide index={0}>I am the first Slide.</Slide>
                                    <Slide index={1}>I am the second Slide.</Slide>
                                    <Slide index={2}>I am the first Slide.</Slide>
                                    <Slide index={3}>I am the second Slide.</Slide>
                                    <Slide index={4}>I am the first Slide.</Slide>
                                    <Slide index={5}>I am the second Slide.</Slide>
                                </Slider>

                            </DotGroup>


                        </CarouselProvider>
                    </CarouselBox01>
                </NewArticleBox01>
                <DaoPollsBox01>
                    <StateStr01>The Hunt: DAO Polls</StateStr01>
                    <CarouselBox01 mt={"20px"}>
                        <ButtonBack01><MdKeyboardArrowLeft color={"white"} fontSize={"4rem"} /></ButtonBack01>
                        <ButtonNext01><MdKeyboardArrowRight color={"white"} fontSize={"4rem"} /></ButtonNext01>

                        <CarouselProvider
                            naturalSlideWidth={400}
                            naturalSlideHeight={350}
                            totalSlides={2}
                        >
                            <Slider>
                                <Slide index={0}>I am the first Slide.</Slide>
                                <Slide index={1}>I am the second Slide.</Slide>
                                <Slide index={0}>I am the first Slide.</Slide>
                                <Slide index={1}>I am the second Slide.</Slide>
                                <Slide index={0}>I am the first Slide.</Slide>
                                <Slide index={1}>I am the second Slide.</Slide>
                            </Slider>
                            {/* <Dot>
                                <ButtonDot01><MdKeyboardArrowLeft color={"white"} fontSize={"4rem"} /></ButtonDot01>

                            </Dot> */}
                            <ButtonBack>
                                <ButtonBack01><MdKeyboardArrowLeft color={"white"} fontSize={"4rem"} /></ButtonBack01>
                            </ButtonBack>
                            <ButtonNext>
                                <ButtonNext01><MdKeyboardArrowRight color={"white"} fontSize={"4rem"} /></ButtonNext01>
                            </ButtonNext>
                        </CarouselProvider>
                    </CarouselBox01>
                </DaoPollsBox01>
            </TwitterArticleBox01>
        </StyledComponent>
    )
})

const StyledComponent = styled(Box)`
    display: flex;
    width: 90%;
    flex-direction: column;
`
const StateStr01 = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: center;
    font-family: 'Changa One', Impact, sans-serif;
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 400;
    letter-spacing: 1px;
    text-shadow: 1px 1px 6px #000;
    text-align: center;
    color: #fff;

`
const MarqueeBox01 = styled(Box)`
    display: flex;
    width: 100%;
    height: 250px;
    background-image: url(${imgBackground02});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    align-items: center;
    box-shadow: 0 0 10px 0 #000;
`
const EachTwitterBox01 = styled(Box)`
    display: flex;
    width:400px;
    height: 250px;
    align-items: center;
`
const EachTwitterBox02 = styled(Box)`
    display: flex;
    width:400px;
    height: 230px;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 30px;
`
const TwitterArticleBox01 = styled(Box)`
    display: flex;
    width: 100%;
`
const NewArticleBox01 = styled(Box)`
    display: flex;
    flex: 1;
    margin-right:20px;
    flex-direction: column;
    align-items: center;
`
const DaoPollsBox01 = styled(Box)`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`
const CarouselBox01 = styled(Box)`
    display: flex;
    position: relative;
    width: 100%;
    height: 400px;
    justify-content: center;
    align-items: center;
    background-image: url(${imgBackground02});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 #000; 
`
const ButtonBack01 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: none;
    border: none;
    left: 20px;
    top: 50%;
    transform: translateY(-50%); 
    cursor: pointer;
`
const ButtonNext01 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: none;
    border: none;
    right: 20px;
    top: 50%;
    transform: translateY(-50%); 
    cursor: pointer;
`
const ButtonDot01 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: none;
    border: none;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%); 
    cursor: pointer;
`

export default Twitter;
