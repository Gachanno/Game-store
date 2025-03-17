import { Link } from '@tanstack/react-router';
import { useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.scss'
import { highlightsService } from '@/src/Shared/api/highlights.service';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IHighlights } from '@/src/Shared/types/types';


const SliderHighlights = () => {
    const [previousIndex, setPreviousIndex] = useState(0)
    
    const { data:dataHighlights, refetch:refetchWhitelist } = useQuery({
        queryKey: ['highlights list'],
        queryFn: () => highlightsService.getHighlights()
    })

    const {mutate, isPending} = useMutation({
        mutationKey: ['edit highlights whitelist'],
        mutationFn: (id:string) => highlightsService.editWhitelistHighlights(id),
        onSuccess(){
            refetchWhitelist()
        }
    })

    const againAnimation = (swiper:SwiperClass) =>{
        if(swiper.activeIndex === previousIndex){
            const bulletWrapper = swiper.pagination.bullets.find(item => item.matches('.swiper-pagination-bullet-active'))
            const bullet = bulletWrapper?.querySelector('.highlight__bullet-animation')
            bullet?.classList.toggle('highlight__bullet-animation')
            window.requestAnimationFrame(()=>{
                window.requestAnimationFrame(() =>{
                    bullet?.classList.toggle('highlight__bullet-animation')
                })
            })
        }
    }

return (
    <div className='swiper__layout'>
        <Swiper
            modules={[Autoplay, Pagination]}
            grabCursor
            spaceBetween={500}
            initialSlide={0}
            slidesPerView={1}
            speed={500}
            slideToClickedSlide
            pagination={{
                clickable: true,
                renderBullet: function () {
                    return `<div class="swiper-pagination-bullet">
                    <div class='highlight__bullet-animation'></div>
                    </div>`;
                },    
            }}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            onSlideChangeTransitionEnd={(swiper)=>{
                setPreviousIndex(swiper.activeIndex)
            }}
            onBeforeTransitionStart={(swiper)=> againAnimation(swiper) }
            >
            {dataHighlights?.map((element:IHighlights) =>(
                <SwiperSlide key={element.idGame} className='swiper-slide--custom'>
                <img src={element.urlImage.replace('@', '')} alt={element.nameGame} className='highlight__img'/>
                <div className='highlight__wrapper'>
                    <Link to='/' className='highlight__buy'>
                        Купить
                    </Link>
                    <button
                    disabled={isPending}
                    onClick={() => mutate(element.id)}
                    className={`
                        ${'highlight__whitelist'}
                        ${element.whitelist
                            ?
                            'highlight__whitelist--active'
                            :
                            ''
                        }
                        `}
                    data-js-wishlist={element.id}
                    >
                    <div className='highlight__circle-wrapper'>
                        <div className='highlight__circle-line'></div>
                        <div className='highlight__circle-line'></div>
                    </div>
                    <span>
                        {element.whitelist
                        ? 
                        'Убрать из списка желаемого'
                        :
                        'Добавить в список желания'}
                        </span>
                    </button>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}

export default SliderHighlights