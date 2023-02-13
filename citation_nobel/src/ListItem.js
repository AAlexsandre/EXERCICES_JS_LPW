const ListItem = ({nobel: {category, name, year}}) => {
    return (
        <li className={category}>{name} ({year})</li>
    );
}

export default ListItem;