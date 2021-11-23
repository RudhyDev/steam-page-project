import './Slider.css'
import { FaAngleRight } from 'react-icons/fa'


export default function Slider(props){

    return(
        <div>
            <img className="image" src={props.imageLink} alt={props.alt} />
            <div className='bar'>
                <span className='disponivel'>Já está disponível</span>
                <button className='mais'>
                    <a href={props.cardLink}>Saiba mais <FaAngleRight/> </a>
                </button>

            </div>
        </div>
    )
}