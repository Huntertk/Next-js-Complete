import Image from 'next/image';
import NatureImage from '../../public/img.jpg';

const Home = () => {
  return (
    <div>
      <Image src={NatureImage} alt='Nature Image' width={196} height={196} priority/>
    </div>
  )
}

export default Home