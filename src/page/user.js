import React from 'react'

function User (props){
    const { match }  = props
    return (
        <div className="user">
            这是user页面{match.params.id}
        </div>
    )
}
export default User