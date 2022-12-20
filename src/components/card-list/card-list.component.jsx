import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) =>
(
    <div className="card-list">
        {monsters.map( (monster) =>
        {
            const {name, email, id} = monster;

            return(
                <Card id={id} name={name} email={email} key={id}/>
            )
        })}
    </div>
);

export default CardList;
