import { faCheck, faClose, faPlus, faSearch, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default props => {
    if(props.hide) {
        return null;
    }else {
        let icon;
        // 
        switch(props.icon) {
            case 'plus':
                icon = <FontAwesomeIcon icon={ faPlus } color='#FFFFFF' />;
                break;
            case 'search': 
                icon = <FontAwesomeIcon icon={ faSearch } color='#FFFFFF' />;
                break;
            case 'close':
                icon = <FontAwesomeIcon icon={ faClose } color='#000000'/>;
                break; 
            case 'check':
                icon = <FontAwesomeIcon icon={ faCheck } color='#FFFFFF'/>;
                break;
            case 'undo':
                icon = <FontAwesomeIcon icon={ faUndo } color='#FFFFFF'/>;
                break;
            case 'trash-o':
                icon = <FontAwesomeIcon icon={ faTrash } color='#FFFFFF'/>;
                break;
            default: 
                icon = <label>{ props.icon }</label>;
        }

        return (
            <button className={'btn btn-' + props.style}
                onClick={props.onClick}>
                { icon }
            </button>
        );
    }
    // <FontAwesomeIcon icon={["fal", "coffee"]} />
};