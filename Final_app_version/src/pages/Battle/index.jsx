import React, {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom';
import { ShowCard, ShowCard2, ToggleCard } from '../../components';

import { toggleCard2 } from '../../actions/card';


export default function Battle() {
  const hero_left_index = Math.floor(Math.random() * (+731 - +1)) + 1
  const hero_right_index = Math.floor(Math.random() * (+731 - +1)) + 1
  const [battle1, setBattle1] = useState({ image: {}, work: {}, appearance: {}, biography: {} })
  const [battle2, setBattle2] = useState({ image: {}, work: {}, appearance: {}, biography: {} })

  // const { id } = card
  // const dispatch = useDispatch()
  // const toggleCardVis = id => dispatch(toggleCard2(id))

  useEffect(() => {

    async function displayBattle() {
      const response_left = await fetch(`https://www.superheroapi.com/api.php/6891348727638701/${hero_left_index}`);
      const rawData_left = await response_left.json();
      const response_right = await fetch(`https://www.superheroapi.com/api.php/6891348727638701/${hero_right_index}`);
      const rawData_right = await response_right.json();
      setBattle1(rawData_left)
      setBattle2(rawData_right)
    }

    displayBattle();

  }, []);

  return (
    <>
        <ShowCard show={battle1}/>
        <ShowCard show={battle2} />
        {/* handleClick={() => toggleCardVis(id)} */}
    </>
  )
};
