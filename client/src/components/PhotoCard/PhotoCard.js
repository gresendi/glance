
import './PhotoCard.css'




const PhotoCard = ({ name, location, userLink, unslpashLink}) => {
  return (
    
       <div className='bottom-left'>
        
    <a className='name' href={userLink}>Photo by {' '} {name}</a>
      <p > <a className='name' href={unslpashLink}>Unsplash</a></p>
       
       </div>
   
  )
}

export default PhotoCard