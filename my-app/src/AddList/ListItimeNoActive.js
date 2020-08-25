import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    ul: {
        color: 'red'
    }
}

function ListItemsNoActive(props){
    return (
        <ul>
            {props.student.name}
             {props.statuses.map(status => {
                if (status.id===props.student.status){
                    if (status.active===false){
                        return <ul style={styles.ul}> {String(status.name)}</ul>
                    }
                }
            })}
        </ul>
    )
}

ListItemsNoActive.propTypes = {
    student: PropTypes.object.isRequired,
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ListItemsNoActive