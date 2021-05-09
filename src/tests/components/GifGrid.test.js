import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs'); //simula la llamada al archivo y se manipula la informacion que este contiene

describe('test on <GifGrid />', () => {

    const category = 'cat';

    test('should show correctly', () => {

        useFetchGifs.mockReturnValue({ //simulamos el hook en su estado base
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();

    })

    test('should show items when imgs are loaded from useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cat.jpg',
            title: 'Cat'
        }]

        useFetchGifs.mockReturnValue({ //simulamos el hook con informacion
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />);

        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })


})
