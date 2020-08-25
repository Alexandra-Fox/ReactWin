import React from 'react'
import PropTypes from 'prop-types'
import ListItemsNoActive from './ListItimeNoActive'

function NoActive(props){
    return(
        <ul>
            {props.students.map((student, index)=> {
            return <ListItemsNoActive student={student} statuses={props.statuses} key={index} />
        })
    }
        </ul>
    )
}

NoActive.propTypes = {
    students: PropTypes.arrayOf(PropTypes.object).isRequired,
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NoActive