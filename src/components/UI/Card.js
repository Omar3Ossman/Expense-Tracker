import './Card.css'

function Card (props){
    
    const classes = 'card ' + props.className;
    return (
        <div className= {classes}>
            {/*children is a reserved keyword name that indicates that it has components inside (like div,p,..etc)*/} 
            {props.children}   
        </div>
    );
}

export default Card;