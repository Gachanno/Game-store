import { Link } from '@tanstack/react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import c from './style.module.scss'
import { useQuery } from '@tanstack/react-query';
import { ISaleGame } from '@/src/Shared/types/types';
import { saleService } from '@/src/Shared/api/sale.service';


const SliderGameCards = () => {
    
    const { data:dataHighlights } = useQuery({
        queryKey: ['sale list'],
        queryFn: () => saleService.getSaleGame()
    })

return (
    <div className={c.swiper__layout}>
        <Swiper
            spaceBetween={15}
            initialSlide={0}
            slidesPerView={4}
            speed={500}
            className={c.swiper}
            >
            {dataHighlights?.map((element:ISaleGame) =>(
                <SwiperSlide key={element.idGame} className={c['swiper-slide--custom']}>
                    <Link to='/' className={c['swiper__card-wrapper']}>
                        <span className={c['swiper__sale-value']}>-{element.saleVale}%</span>
                        <img src={element.urlImage.replace('@', '')} alt={element.nameGame} className={c.swiper__img} loading="lazy"/>
                        <div className={c['swiper__text-wrapper']}>
                            <span className={c['swiper__game-name']}>{element.nameGame}</span>
                            <span className={c['swiper__game-edition']}>{element.edition}</span>
                            <span className={c['swiper__old-price']}><s>{element.priceWithoutSale}</s> ₽</span>
                            <span className={c['swiper__new-price']}>{element.price} ₽</span>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}

export default SliderGameCards