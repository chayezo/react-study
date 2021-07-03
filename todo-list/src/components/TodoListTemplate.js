import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({ children }) => {
    return (
        <div className='TodoListTemplate'>
            <div className='TodoHeadBlock'>
                <div className='app-title'>WHAT TO DO</div>
                <h1>2021년 07월 02일</h1>
            </div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default TodoListTemplate;