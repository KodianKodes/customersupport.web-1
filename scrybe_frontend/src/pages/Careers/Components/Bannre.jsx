import image1 from '../Assets/image-1.jpg'
import {BsSearch} from 'react-icons/bs'

function Bannre() {
  return (
    <div className='problem-solvers'>
        <img src={image1} alt="" />
        <div className='problem-solvers-container'>
            <h1>We are looking for briliant problem solvers</h1>
            <div className='input-containers'>
                <div className='input'>
                    <BsSearch className='icon'/>
                    <input type="text" placeholder='Search by Team'/>
                </div>
                <div className='input'>
                <BsSearch className='icon'/>
                    <input type="text" placeholder='Search by Location'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bannre