import React,{useState,ReactNode} from 'react';
import {Nav} from '../Atom/Nav';
import {Burger} from '../Atom/Burger';

type Props ={
    children:ReactNode;
};

export const Layout:React.FC<Props> = ({children}) => {
    const [open,setOpen] = useState(false);

    return(
        <>
            <Burger open={open} setOpen={setOpen}/>
            <Nav open={open} setOpen={setOpen}/>
            <div>
                <main>{children}</main>
            </div>
        </>
    )
}

