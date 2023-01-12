const List = ({bdatos,search}) => {

    return ( 
        <ul>
          {bdatos.filter((bdatos) => {
            return search.toLowerCase() === "" ? bdatos : bdatos.name.toLowerCase().includes(search.toLowerCase())
          }).map(({ id, name, email }) =>
            <li
                key={id}
            >
                {name} --- {email}
            </li>)}
      </ul>
      
     );
}
 
export default List;


