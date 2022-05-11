/* eslint-disable testing-library/no-unnecessary-act */
import { render, unmountComponentAtNode } from "react-dom";
import  act  from "react-dom/test-utils";
import User from "./User"

let Container = null;
beforeEach(()=>{
    Container =document.createElement('div');
    document.body.appendChild(Container);
});

afterEach(()=>{
    unmountComponentAtNode(Container);
    Container = null;
});

it("renders user data",async ()=>{
    const fakeUser ={
        name:"joni Baez",
        age:"32",
        address:"123,Charming Avenue"
    };
    jest.spyOn(global,"fetch").mockImplemetation(()=>
     Promise.resolve({
         json: ()=> Promise.resolve(fakeUser)
     })
    );

    await act(async()=>{
        render(<User id="123"/>,Container);
    });

    expect(Container.querySelector("summary").textContent).toBe(fakeUser.name);
    expect(Container.querySelector("strong").textContent).toBe(fakeUser.age);
    expect(Container.textContent).toContain(fakeUser.address);

    global.fetch.mockRestore();
});