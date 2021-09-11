import './Carousel.module.scss';

/* eslint-disable-next-line */
export interface CarouselProps {
    title: string;
}

export function Carousel(props: CarouselProps) {
    return (
        <div>
            <h1>Hi from my Carousel!</h1>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Carousel;
