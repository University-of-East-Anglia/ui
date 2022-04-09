import React, { Component } from "react";
import Slider from "react-slick";
import { Card } from "../Card";
import "./Carousel.scss";

export interface ComponentProps {
  slides: SlideObj[];
}
interface SlideObj {
  image: string;
  type: string;
  excerpt: string;
  link: string;
  anchor: string;
  title: string;
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

export class Carousel extends Component<ComponentProps> {
  render() {
    var settings = {
      accessibility: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          {this.props.slides.map((slide, index) => (
            <div key={index}>
              <Card
                image={slide.image}
                type={slide.type}
                excerpt={slide.excerpt}
                link={slide.link}
                anchor={slide.anchor}
                title={slide.title}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
