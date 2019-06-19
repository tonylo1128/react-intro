import React from 'react'

export default class List extends React.Component {
    render() {
        return (
            <div>
                {this.props.list.map((item, index) => {
                    return (
                        <p 
                        onClick={() => this.props.click(item, index)} 
                        key={index}>
                        {item}
                        </p>
                    )
                    })}
            </div>
        )
    }
}
