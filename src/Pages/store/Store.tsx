import 'swiper/css';
import 'swiper/css/pagination';
import c from './style.module.scss'
import SliderHighlights from '@/src/Entities/sliders/sliderHighlights';




const Store = () => {
  return (
    <main className={c.main}>
      <div className={c['main__element-wrapper']}>
        <h1>Основые предложения</h1>
        <SliderHighlights/>
      </div>
      <div className={c['main__element-wrapper']}>
        <h1>Игры по скидке</h1>    
      </div>
    </main>
  )
}

export default Store