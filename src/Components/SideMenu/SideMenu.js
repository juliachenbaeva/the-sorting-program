import React from 'react';
import './SideMenu.scss';

export const SideMenu = ({actives, chooseSort}) => {

    const handleClick = (type) => {
        chooseSort(type);
    }

    return (
        <div className='side_menu'>
            <h3>Выберите алгоритм</h3>
            <button className={actives.heap ? 'active' : ''} onClick={() => handleClick('heap')}>Heap sort</button>
            <button className={actives.gnome ? 'active' : ''} onClick={() => handleClick('gnome')}>Gnome sort</button>
        </div>
    )
}
