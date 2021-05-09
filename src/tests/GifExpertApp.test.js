import React from 'react';
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('test on GifExpertApp', () => {


    test('should show correctly', () => {

        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();
    })

    test('should show a categories list', () => {
        const categories = ['Alien', 'Saitama'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })


})
