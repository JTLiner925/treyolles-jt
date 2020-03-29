import React from 'react';
import Card from './components/Card.js';
import './List.css';
import { directive } from '@babel/types';

function List(props){
    const listHeader = `${props.lists.header}`
    return (
        <section className='List'>
            <header>
                {listHeader}
            </header>
            <div className='List-cards'>
                {props.children}
            </div>
        </section>
    );
}

// export default List;