import "./Slider.css";
import { FaAngleRight } from "react-icons/fa";
import axios from 'axios'
import { useState, useEffect  } from "react";

export default function Slider(props) {
    const [game, setGame] = useState([]);
    const [mounted, setMoounted] = useState(false);

    const getData = async () => {
        await axios.get(`/game/find/${props.id}`).then((response) => {
            if (mounted) {
                setGame(response.data);
            }
        });
    };

    useEffect(() => {
        setMoounted(true);
        getData();
    }, [mounted]);

    return (
        <div>
            <img className="image" src="https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S1_2560x1440-36f16374c9c29a18a46872795b483d72_2560x1440-36f16374c9c29a18a46872795b483d72" alt={game.name} />
            <div className="bar">
                <span className="disponivel">Já está disponível</span>
                <button className="mais">
                    <a href={props.cardLink}>
                        Saiba mais <FaAngleRight />{" "}
                    </a>
                </button>
                <div className="classification">
                    <div className="square">{props.classificationNumber}</div>
                    <span className="class-text">
                        {props.classificationText}
                    </span>
                </div>
            </div>
        </div>
    );
}
