import SectionTitle from '../../components/SectionTitle';
import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';

const Category = () => {
    const slides = [
        { image: slide1, category: 'SALADS' },
        { image: slide2, category: 'SOUPS' },
        { image: slide3, category: 'PIZZAS' },
        { image: slide4, category: 'DESSERTS' }
    ];

  return (
    <div className='my-10'>
        <div>
            <SectionTitle subtitle={'From 11:00am to 10:00pm'} title={'ORDER ONLINE'} />
        </div>
        <div class="carousel carousel-center max-w-screen-xl space-x-4 p-4 my-10">
            {
                slides.map((slide, id)=>(
                    <div key={id} className='carousel-item relative'>
                        <img src={slide.image} />
                        <div className='absolute bottom-4 left-0 right-0 flex justify-center'>
                            <p className='cinzel text-xl md:text-2xl text-white'>{slide.category}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category