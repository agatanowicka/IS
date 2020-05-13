import React, { Component } from "react";
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from "react-visibility-sensor";

export class LeftCol extends Component {
    render() {
        return (
            <VisibilitySensor>
                {({ isVisible }) => (
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: isVisible ? 1 : 0 }}
                        config={{ delay: 100, duration: 2000 }}
                    >
                        {props => (
                            <div style={props}
                                className='leftColHeading'>
                                <h1>MONITORING I OSTRZEGANIE O TEMPERATURZE</h1>
                            </div>
                        )}
                    </Spring>)}
            </VisibilitySensor>
        );
    }
}
export default LeftCol;