import nobelPrices from "./nobelPrices";
import ListItem from './ListItem';

const List = () => {
    // let RIP = nobelPrices.filter(nobel => nobel.category == 'Peace');
    let categories = nobelPrices.filter(nobel => nobel.category);

    const unique = [...new Map(categories.map((m) => [m.category, m])).values()];


    //la comparaison doit être fait avec une fonction use state.
    return (
        <select>
            {unique.map(nobel => <ListItem nobel={nobel} />)}
        </select>
    );
}

export default List;