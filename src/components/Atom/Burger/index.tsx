import React from 'react';

type Props = {
    open:boolean;
    setOpen:Function;
};

export const Burger:React.FC<Props> = ({
    open,setOpen,
}) => {
    return(
        <>
            <div className="hamburger">
                <button
                    type="button"
                    className="button hamburger"
                    aria-controls="global-nav"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                  <span className="hamburgerLine">
                      <span className="visuallyHidden">
                          メニューを開閉する
                      </span>
                  </span>  
                </button>
            </div>
        </>
    );
}