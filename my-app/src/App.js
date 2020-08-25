import React, { useEffect } from 'react';
import Loader from './Loader';
import List from './AddList/List'
import NoActive from './AddList/NoActive';

function App() {

    const [nameStudents, getNameStudents] = React.useState([]);
    const [statusStudents, getStatusStudents] = React.useState([]);
    const [loading, setloading] = React.useState(true);

    const [data, setData] = React.useState([])
    const [stat, setStat] = React.useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/paraplancrm/api/students')
            .then(response => response.json())
            .then(json => setData(json))
        fetch('https://my-json-server.typicode.com/paraplancrm/api/statuses')
            .then(response => response.json())
            .then(json => setStat(json))
    }, [])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/paraplancrm/api/students')
            .then(response => response.json())
            .then(nameStudents => {
                getNameStudents(nameStudents)
                setloading(false)
            })

        fetch('https://my-json-server.typicode.com/paraplancrm/api/statuses')
            .then(response => response.json())
            .then(statusStudents => {
                getStatusStudents(statusStudents)
                setloading(false)
            })
    }, [])

    return ( 
        <div className = 'wrapper' >
        { loading && <Loader />}

        <h1> ListStudents </h1> 
        <pre> { JSON.stringify(data, null, 2) } </pre> 
        
        <h1> ListSatus </h1>
        <pre> { JSON.stringify(stat, null, 2) } </pre>  
 
        <h1>Статусы активных учеников</h1>
        <List students={nameStudents} statuses={statusStudents}/>
        <h1>Статусы НЕ активных учеников</h1>
        <NoActive students={nameStudents} statuses={statusStudents}/>

        <button> Список активных </button>  
        <button> список пассивных </button> 
        </div>
    )
}
export default App