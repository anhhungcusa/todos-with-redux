import React from 'react';


export const Button = ({children, onClick, isActive = false}) => (
    <button className={`btn ${isActive && 'active'}`} onClick={onClick}  disabled={isActive}>{children}</button>
)

