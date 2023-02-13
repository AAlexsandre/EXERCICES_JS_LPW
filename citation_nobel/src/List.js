import nobelPrices from "./nobelPrices";
import ListItem from './ListItem';

const List = () => {
    let RIP = nobelPrices.filter(nobel => nobel.category== 'Peace');
    //la comparaison doit être fait avec une fonction use state.
    return (
        <ul>
            {RIP.map(nobel =>  <ListItem nobel={nobel} />)}
        </ul>
    );
}

export default List;