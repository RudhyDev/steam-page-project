import './Container.css';

export default function Container(props) {
  return (
    <div className='container-div'>
      <h1 className='container-title'>{props.title}</h1>
      <div className='container-cards'>
        {props.children}
      </div>
    </div>
  )
}