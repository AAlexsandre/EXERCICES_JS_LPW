const ListItem = ({nobel: {category}}) => {
    return (
        <option className={category}>{category}</option>
    );
}

export default ListItem;