import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED', 
    payload: event.target.value
});

export const search = _ => {
    return (dispatch, getState) => {
        // Pegar o state atual, mas deve ser evitado o uso do getState 
        const description = getState().todo.description;
        // 
        const search = description ? `&description__regex=/${description}/` : '';
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data }));
    };
};

/* export const add = (description) => {
    const request = axios.post(URL, { description });
    // o multi lança as duas posições do array abaixo de uma vez só, não garantindo que um aconteça após o outro
    return [ // Usando o react-multi, ao fim da action ele executa a action abaixo que no caso é 'search()'
        { type: 'TODO_ADDED', payload: request }, 
        search()
    ];
}; */

export const add = description => {
    // middleware thunk permite essa ação 
    return dispatch => {
        // Faça o processo de adicionar 
        axios.post(URL, { description })
            /*.then(resp => dispatch({ 
                type: 'TODO_ADDED', 
                payload: resp.data 
            }))*/
            .then(resp => dispatch(clear()))
            // E vai chamando um 'then' atrás do outro sem limitação
            .then(resp => dispatch(search()));
    };
};

export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()));
    };
};

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()));
    };
};

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()));
    };
};

export const clear = _ => {
    // Usando o multi
    return [{type: 'TODO_CLEAR'}, search()]; 
};