import React from 'react';
import WhatMakesUsUnique from "./whatMakeUsUnique";
import StudentWorkAt from "./studentWorkAtComponent";
import Story from "./storiesComponent";
import Contact from "./contactComponent";

class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <main>
                <WhatMakesUsUnique />
                <StudentWorkAt />
                <Story />
                <Contact />
            </main>
        );
    }
}
export default Main;