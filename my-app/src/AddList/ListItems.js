import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    ul: {
        color: 'red'
    }
}

function ListItems(props){
    return (
        <ul>
            {props.student.name}
             {props.statuses.map(status => {
                if (status.id===props.student.status){
                    if (status.active===true){
                        return <ul style={styles.ul}> {String(status.name)}</ul>
                    }
                }
            })}
        </ul>
        
    )
}

ListItems.propTypes = {
    student: PropTypes.object.isRequired,
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ListItems