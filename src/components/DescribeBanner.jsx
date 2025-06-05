import chefService from '../assets/home/chef-service.jpg'

const DescribeBanner = ({title, description}) => {
  return (
    <div className='my-10 text-center p-24 text-white' style={{ backgroundImage: `url(${chefService})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
        <div className='mx-auto p-10 bg-[#15151599]'>
            <h1 className='cinzel text-xl md:text-4xl'>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default DescribeBanner