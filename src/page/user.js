import React from 'react'

function User (props){
    const { match }  = props
    console.log('user', props)
    return (
        <div className="user">
            这是user页面
        </div>
    )
}
export default User