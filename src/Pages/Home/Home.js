import { useQuery } from '@tanstack/react-query';
import Advertised from './Advertised';
import Banner from './Banner';

const Home = () => {
    const { data: phones = [] } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('advertised.json')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            {phones.length && <Advertised phones={phones}></Advertised>}
        </div>
    );
};

export default Home;