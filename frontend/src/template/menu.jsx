import React from 'react';

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div className='navbar-header'>
                <a className="navbar-brand" href="#">
                    <i className="fa fa-calendar-check"></i> TodoApp
                </a>
            </div>

            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="/todo">Tarefas</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">Sobre</a></li>
                </ul>
            </div>
        </div>
        </nav>
);