import React from 'react';
import { FilterButton } from '../container/FiltersButtion';
import { todoFilters } from '../constant/todoFilters';

export const Footer = () => (
    <footer className='footer'>
        <FilterButton children='Active' filter={todoFilters.SHOW_ACTIVE} />
        <FilterButton children='All' filter={todoFilters.SHOW_ALL} />
        <FilterButton children='Completed' filter={todoFilters.SHOW_COMPLETED} />
    </footer>
)
