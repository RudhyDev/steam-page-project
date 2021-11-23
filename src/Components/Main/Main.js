import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import './Main.css'

export default function Main() {
  return (
    <>
      <Navbar/>
      <Slider
        imageLink='https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S1_2560x1440-36f16374c9c29a18a46872795b483d72_2560x1440-36f16374c9c29a18a46872795b483d72'
        alt='Battle Field 2042'
        classificationNumber='10'
      />
      
    </>
  );
}
