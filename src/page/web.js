import React from 'react'

class C extends React.Component{
    render() {
        console.log('component', C.Component)
    return (<div>这是c组件</div>)
    }
}
function Web (props){
    return (
        <div className="web">
            只是web页面 {JSON.stringify(props)}
        </div>
    )
}
export default Web 