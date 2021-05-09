import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />>', () => {

    const title = 'Prueba titulo';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('should show component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should show title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('img should had url and alt from props', () => {
        const img = wrapper.find('img');
        // console.log(img.props()); //obtiene todos los props como objeto
        // console.log(img.prop('src')); //obtiene el prop especificado
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('div should had animate__fadeInLeft', () => {
        const div = wrapper.find('div');
        const res = div.prop('className').includes('animate__fadeInLeft');

        expect(res).toBe(true);


    })
    
    
})

