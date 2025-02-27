
function Gallary({gallaryProps}){
    return <>
    <div class="row medium-up-3 large-up-4">
     {gallaryProps.map( (element, index) => (
        <div class="column" key={index}>
        <img class="thumbnail" src={element} alt=""/>
      </div>
     ))}

    </div>
    </>
}

export default Gallary;