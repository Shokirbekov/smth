import React from 'react'
import plane from '../img/plane.png'
import home from '../img/house.png'
import pc from '../img/pc.png'
import cas from '../img/case.png'
import soc from '../img/soc.png'
import building from '../img/building.png'
import mountain from '../img/mountain.png'
import gamepad from '../img/gamepad.png'
import man from '../img/man.png'
import leftarrow from '../img/leftarrow.png'
import rightarrow from '../img/rightarrow.png'

const Slider = () => {
  return (
    <div>
        <div className="sl">
            <div className="leftArrow">
                <img src={leftarrow} alt="" />
            </div>
            <div className="slide">
                <img src={plane} alt="" />
                <div className="text">
                    Автомобили
                </div>
            </div>
            <div className="slide">
                <img src={home} alt="" />
                <div className="text">
                Недвижимость
                </div>
            </div>
            <div className="slide">
                <img src={pc} alt="" />
                <div className="text">
                Электроника
                </div>
            </div>
            <div className="slide">
                <img src={cas} alt="" />
                <div className="text">
                Работа
                </div>
            </div>
            <div className="slide">
                <img src={soc} alt="" />
                <div className="text">
                Личные вещи
                </div>
            </div>
            <div className="slide">
                <img src={mountain} alt="" />
                <div className="text">
                Дом и Сад
                </div>
            </div>
            <div className="slide">
                <img src={building} alt="" />
                <div className="text">
                Стройка и ремонт
                </div>
            </div>
            <div className="slide">
                <img src={gamepad} alt="" />
                <div className="text">
                Хобби и Спорт
                </div>
            </div>
            <div className="slide">
                <img src={man} alt="" />
                <div className="text">
                Бизнес и услуги
                </div>
            </div>
            <div className="rightArrow">
                <img src={rightarrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Slider