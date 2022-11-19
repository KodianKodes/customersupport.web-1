import image1 from '../Assets/image-1.jpg'
import image2 from '../Assets/image-2.jpg'
import {BsSearch} from 'react-icons/bs'

function Main() {
  return (
    <div className="main-container">
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
        <div className='careers'>
            <div>
                <h1>Careers at scrybe</h1>
                <p>We’re committed to hiring and supporting the growth of all Scrybers. We’re focused, ambitious, and we care about our work and each other. We believe the future is ours to create.</p>
                <p> Explore remote-friendly, flexible opportunities and join our mission to make work life simpler, more pleasant and more productive.</p>
            </div>
            <div className='img-container'>
                <img src={image2} alt="" />
            </div>
        </div>
        <div className="our-promise">
            <h1>Our Promise</h1>
            <div className="promises">
                <div className="promise">
                    <h1>Meaningful work</h1>
                    <p>We are all about work that is truly impactful and adds a sense of value and purpose to our team players.</p>
                </div>
                <div className="promise">
                    <h1>Dynamic environment</h1>
                    <p> Diversity and inclusiveness is one of our goals. We are open to talents from diverse parts of the world..</p>
                </div>
                <div className="promise">
                    <h1>Career opportunities</h1>
                    <p> We empower all Scrybers to grow and expand their skills by availing them with limitless possibilities.</p>
                </div>
                <div className="promise">
                    <h1>Growing together</h1>
                    <p>We dream big and work together at solving problems. We also never forget to have fun.</p>
                </div>
            </div>
        </div>

        <div className='currently-hiring'>
            <h1>Currently Hiring</h1>
            <div className='currently-hiring-container'>
                <div>
                    <h1>Product Designer</h1>
                    <p>Our design team is currently looking to welcome dedicated and brilliant Product design interns to our workforce.</p>
                </div>
                <div>
                    <h1>DevOps Engineer</h1>
                    <p>Our DevOps team is currently looking to welcome dedicated and brilliant DevOps interns to our community.</p>
                </div>
                <div>
                    <h1>Front End Engineer</h1>
                    <p>Our Engineering team is currently looking to welcome experienced, dedicated and brilliant FE developers.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main