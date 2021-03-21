import React from 'react';
import '../assets/styles/components/Filter.scss';
import Add from './Add';

const Filter = () => {
  return (
    <>
      <div className='filter__container'>
        <div className='filter__container--add'>
          <Add />
        </div>
        <form className='filter__container' action="">
          <label for="Aircraft">Seleccione Aeronave:</label>
          <select className='select__containerAircraft' name="Aircraft" id="">
            <option className='select__containerAircraft--value' value="Aeronaves">Emb-312 Tucano</option>
            <option className='select__containerAircraft--value' value="Aeronaves">IA-63 Pampa</option>
          </select>
        </form>
        <form action="">
          <label for="Aircraft">Seleccione Matricula:</label>
          <select className='select__containerAircraft' name="Matricula" id="">
            <option className='select__containerMatricula--value' value="">A-114</option>
            <option className='select__containerMatricula--value' value="">E-803</option>
          </select>
        </form>
        <button type='submit' className='filter__container--button'> Buscar </button>
      </div>
    </>
  );
};

export default Filter;
