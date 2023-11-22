'use client'
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import '@/styles/styles.css';
import Invierte from './SlidesComponents/Invierte';
import classNames from 'classnames';
import InicioProceso from './SlidesComponents/InicioProceso';
import TipoDeCuenta from './SlidesComponents/TipoDeCuenta';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function CarouselComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      };
  
      emblaApi.on('select', onSelect);
      onSelect(); 
  
      return () => {
        emblaApi.off('select', onSelect); 
      };
    }
  }, [emblaApi]); 


  // Functions to navigate to the next and previous slides
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();

  return (
    <div className="embla hide-carousel" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Invierte />
        </div>
        <div className="embla__slide">
          <InicioProceso />
        </div>
        <div className="embla__slide">
          <TipoDeCuenta />
        </div>
      </div>

      {canScrollPrev && (
        <div onClick={scrollPrev} className='iconContainer embla__button embla__button--prev'>
          <NavigateBeforeIcon style={{ color: '#fff', fontSize: '3rem' }} />
        </div>
      )}
      {canScrollNext && (
        <div onClick={scrollNext} className='iconContainer embla__button embla__button--next'>
          <NavigateNextIcon style={{ color: '#fff', fontSize: '3rem' }} />
        </div>
      )}
     
      <div className='asesoria' >
        <a className='asesoriaAgenda' style={{ 
        color: '#FFF', 
        fontSize: 13, 
        textDecoration: 'none'
        }} >AGENDA TU ASESORÍA ONLINE CON NOSOTROS</a>
        <button  style={{fontWeight: 200, fontSize: 13}} className={classNames('invierte', 'buttonloginAgenda', 'mb-1')}><b>HAZ TU CITA AQUÍ</b></button>
      </div>
    </div>
  )
}

export default CarouselComponent;