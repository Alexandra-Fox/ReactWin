import React from 'react'
import PropTypes from 'prop-types'
import ListItems from './ListItems'

function List(props){
    return(
        <ul>
            {props.students.map((student, index)=> {
            return <ListItems student={student} statuses={props.statuses} key={index} />
        })
    }
        </ul>
    )
}

List.propTypes = {
    students: PropTypes.arrayOf(PropTypes.object).isRequired,
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default List