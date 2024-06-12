import React, {useContext} from 'react';

const textContext = React.createContext("default");
const user = {name : "this is text"}

export default function Header() {
    function Article() {
        return(
            <div>
                <textContext.Provider value="test111">
                    <Third />
                </textContext.Provider>
            </div>
        )
    }

    const Second = () => {
        return (
            <>
                <Third />
            </>
        )
    }

    const Third = () => {
        const body1 = useContext(textContext)
        
        return (
            <div>
                {body1}
            </div>
        );
    };

    return (
        <>

            <header className="header">
                <div>About Coffee</div>
            </header>
        </>
    );
}