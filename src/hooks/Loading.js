import Loader from '../gif/Spinner.gif';
function Loading() {
  return (
    <div className='loader'>
      <img src={`${Loader}`} alt="" />
    </div>
  )
}

export default Loading