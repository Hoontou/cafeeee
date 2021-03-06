import react from 'react';

import LightBox from '../../../components/LightBox';

import './Coffee.css';

import 게이샤1 from '../../../img/menu/story3.jpg';
import 게이샤2 from '../../../img/menu/story4.jpg';
import 게이샤3 from '../../../img/menu/story5.jpg';
import 게이샤샤 from '../../../img/menu/게이샤.jpg';
import 에티오피아 from '../../../img/menu/에티오피아.jpg';
import 디카페인 from '../../../img/menu/디카페인.jpg';
import 메이데이 from '../../../img/menu/메이데이.jpg';
import 라떼2 from '../../../img/menu/에스프레소/라떼1.jpg';
import 바닐라 from '../../../img/menu/에스프레소/바닐라.jpg';
import 아이스크림커피1 from '../../../img/menu/에스프레소/아이스크림커피1.jpg';
import 아이스크림커피2 from '../../../img/menu/에스프레소/아이스크림커피2.jpg';
import 시그니처1 from '../../../img/menu/콜드브루/시그니처1.jpg';
import 시그니처2 from '../../../img/menu/콜드브루/시그니처2.jpg';
const 게이샤 = [게이샤1, 게이샤2, 게이샤3];
const 게이샤다 = [게이샤샤];
const 에티오피아다 = [에티오피아];
const 메이데이다 = [메이데이];
const 디카페인다 = [디카페인];
const 라떼 = [라떼2];
const 바닐라다 = [바닐라];
const 아이스크림커피 = [아이스크림커피1, 아이스크림커피2];
const 시그니처 = [시그니처1, 시그니처2];

const Coffee = () => {
  return (
    <div class='container'>
      <h5 class='fw-bolder stagger-item-menuhead'>BREWING COFFEE</h5>
      <hr class='stagger-item-menuhead'></hr>
      <div class='mn-margin'>
        <p>
          <h5 class='원두타입'>[Light Type]</h5>
          <div>
            <LightBox src={게이샤다} menu={'Colombia Geisha ·'} />
          </div>
          <div>
            <LightBox src={에티오피아다} menu={'Ethiopia Guji Natural ·'} />
          </div>
        </p>
        <p>
          <h5 class='원두타입'>[Medium Type]</h5>
          <div>
            <LightBox src={메이데이다} menu={'Mayday ·'} />
          </div>
        </p>
        <p>
          <h5 class='원두타입'>[Dark Type]</h5>
          <div>
            <LightBox src={디카페인다} menu={'Decaff ·'} />
          </div>
        </p>
      </div>
      <h5 class='fw-bolder stagger-item-menuhead'>ESPRESSO</h5>
      <hr class='stagger-item-menuhead'></hr>
      <div class='mn-margin stagger-item-menu'>
        <p>
          <div>
            <LightBox src={라떼} menu={'Latte ·'} />
          </div>
          <div>
            <LightBox src={바닐라다} menu={'Vanilla latte ·'} />
          </div>
          <div>
            <button class='mn-lb'>Einspener</button>
          </div>
          <div>
            <LightBox src={아이스크림커피} menu={'Affogato ·'} />
          </div>
        </p>
      </div>
      <h5 class='fw-bolder stagger-item-menuhead'>COLD BREW</h5>
      <hr class='stagger-item-menuhead'></hr>
      <div class='mn-margin stagger-item-menu'>
        <p>
          <div>
            <button class='mn-lb'>Black</button>
          </div>
          <div>
            <button class='mn-lb'>White</button>
          </div>
          <div>
            <button class='mn-lb'>Cream vanilla</button>
          </div>
          <div>
            <LightBox src={시그니처} menu={'Ambient_coffee ·'} />
          </div>
        </p>
      </div>
    </div>
  );
};

export default Coffee;
