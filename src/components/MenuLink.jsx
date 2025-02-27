
function MenuLink({menuProps}){
    return <>
    <div class="row column">
      <ul class="menu">
      {menuProps.map( (element, index) => (
         <li key={index}><a href="#">{element}</a></li>
      ))}
       
      </ul>
    </div>
    </>
}

export default MenuLink;