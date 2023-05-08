import React from "react"
import { Context } from "./Auth"

function injectContext (ComponentToInject) {

    return class ContextComponent extends React.Component {

        render() {

            return (
                (
                    <Context.Consumer>
                        {
                            (context) => <ComponentToInject {...this.props} context={context}/>
                            //remmeber EXPORT DEFAULT injectContext(ComponentToInject); Then => import ComponentToInject
                            // result <ComponentToInject {...this.props> reality is <ContextComponent {...this.props}
                        }

                    </Context.Consumer>
                )
            )
        }



    }



}

export default injectContext;

