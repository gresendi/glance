import './Quote.css'
import QuoteApi  from '../../utils/QuoteAPI/'

const Quote = () =>{

 
  let quote = QuoteApi.getQuote()

  return (
   <>
      <p className='quote'>"{quote.text}"</p>
      <p className='quote'>-{quote.author?quote.author:<></>}</p>
      
   </>
  )
}
export default Quote