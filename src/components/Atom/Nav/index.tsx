import React from 'react';

type Props = {
    open:boolean;
    setOpen:Function;
};

export const Nav:React.FC<Props> = ({open,setOpen}) => {
    return(
        <div>
            <nav aria-expanded={open}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Post</li>
                    <li>Work</li>
                </ul>
            </nav>
        </div>
    );
};