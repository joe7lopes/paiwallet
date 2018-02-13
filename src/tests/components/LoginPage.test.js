import React from 'react';
import {shallow} from '../config';
import { Login } from '../../components/auth/login';

describe('<Login />', () => {

    it('Should render login page', ()=>{
        const wrapper = shallow(<Login startLogin={()=>{}} />);
        expect(wrapper).toMatchSnapshot();
    });

    // it('should call startLogin on button click', () => {
    //     const startLogin = jest.fn();
    //     const wrapper = shallow(<Login startLogin={startLogin} />);
    //     wrapper.find('button').simulate('click');
    //     expect(startLogin).toHaveBeenCalled();
    //   });

});