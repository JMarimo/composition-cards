import './App.css';
import Card from './components/card/Card';

const cardTwo = {
  title: 'Вторая карточка',
  text: 'бла бла бла второй раз',
}

const cardOne = {
  title: 'Первая карточка',
  text: 'бла бла бла',
  src: 'https://main-cdn.sbermegamarket.ru/hlr-system/184/270/554/108/184/0/100029480871b0.jpg'
}

function App() {
  return (
    <div className="cards">
      <Card {...cardOne}> {<img src={cardOne.src} className="card-img-top" alt="..." />} </Card>
      <Card {...cardTwo}/>
    </div>
  );
}

export default App;