import React from 'react'

function User (props){
    const { match }  = props
    return (
        <div className="user">
            这是user页面{JSON.stringify(props)}
        </div>
    )
}
export default User