import React, { PureComponent } from 'react'

class FooterComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">All Rights Reserved 2021 @PKS</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent