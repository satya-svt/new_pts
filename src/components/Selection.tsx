
// Selection component definition

import React from 'react';



interface SelectionProps {

  title: string;

  color: string;

}



const Selection: React.FC<SelectionProps> = ({ title, color }) => {

  return (

    <div className={`selection ${color}`}>

      <h3>{title}</h3>

    </div>

  );

};



export default Selection;
