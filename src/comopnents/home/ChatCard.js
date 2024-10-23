import { Link } from 'react-router-dom';
import './ChatCard.css'

export default function(props){

    return(
        <>
            <div className="cardCont">
                <div className="cardImgCont lside cardContEle">
                    <img className='cardImg' src={props.iconUrl} alt='Icon' />
                </div>
                <div className='rside cardContEle'>
                    <div method='post'>
                        <div className="cardSelectCont rsideEle">
                            <span className='selectText'>{props.title} chat with: </span>
                        </div>
                        <div className="cardDisc rsideEle">
                            By clicking Start I agree with Strangle.in <a href="/t&c">terms and conditions</a> and I am 18 years old or above.
                        </div>
                        <Link to={props.hostUrl} className='startBtn rsideEle'><button className="cardBtn ">Start</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};