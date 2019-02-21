import React,{useState}from 'react';
import {ResourseList} from './Resourselist';

const App = () =>{
    const [resource,setResource] = useState('posts');

    return(
        <div>
            <div>
                <button onClick={() => setResource('posts')}>Post</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourseList resource={resource}/>
        </div>

    );

}

export default App;
