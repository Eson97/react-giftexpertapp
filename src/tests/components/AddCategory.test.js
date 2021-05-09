import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('test on <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;
    // const wrapper= shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should show correctly', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('should change textbox', () => {

        const value = 'hola mundo'
        
        //POR ALGUNA RAZON SI LO LLAMO DESDE VARIABLE NO FUNCIONA
        // const input = wrapper.find('input');
        
        // input.simulate('change', { target: { value } });

        // expect(input.prop('value')).toBe(value);
        
        wrapper.find('input').simulate('change', { target: { value } });

        expect(wrapper.find('input').prop('value')).toBe(value);

    })

    test('should NOT post info with onSubmit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();

    })

    test('should call setCatgories and clear textbox', () => {
        
        const value = 'hola mundo';
        
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');
    })


})
