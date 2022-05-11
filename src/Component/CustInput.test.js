import {screen,fireEvent } from "@testing-library/react";
import CustInput from "./CustInput";

const setup = ()=>{
    const utils = screen(<CustInput/>)
    const input = screen.getByLabelText('username-label')
    return{
        input,
        ...utils,
    }
}

test('It should keep a $ in front of the input',()=>{
    const {input} = setup()
    fireEvent.change(input, { target: {value: '23'}})
    expect(input.value).toBe('$23')
})
test('It should allow a $ to be in the input when the value is changed',()=>{
    const {input} = setup()
    fireEvent.change(input, { target: {value: '23.0'}})
    expect(input.value).toBe('$23.0')
})
test('It should not allow letters to be inputted',()=>{
    const {input} = setup()
    expect(input.value).toBe('')
    fireEvent.change(input, { target: {value: 'God day'}})
    expect(input.value).toBe('')
})
test('It should allow the $ to be deleted',()=>{
    const {input} = setup()
    fireEvent.change(input, { target: {value: '23'}})
    expect(input.value).toBe('$23')
    fireEvent.change(input, { target: {value: ''}})
    expect(input.value).toBe('$23')
})