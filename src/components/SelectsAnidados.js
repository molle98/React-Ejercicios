import React, { useState } from 'react';

import SelectList from "./SelectList";


const SelectsAnidados = () => {
    const[state, setState] = useState("");
    const[town, setTown] = useState("");
    const[suburb, setSuburb] = useState("");

    let TOKEN = "1893c82c-b9d9-404b-b5b8-cb0d0442849a"

    return (
      <div>
        <h2>Selects Anidados</h2>
        <h3>Mexico</h3>
        <SelectList
          title="estado"
          url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
          handleChange={(e) => {
            setState(e.target.value);
          }}
        />
        {state && (
          <SelectList
            title="municipios"
            url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}

            `}
            handleChange={(e) => {
              setTown(e.target.value);
            }}
          />
        )}
        {town && (
          <SelectList
            title="colonia"
            url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}

          `}
            handleChange={(e) => {
              setSuburb(e.target.value);
            }}
          />
        )}

        <pre>
          <code>
            {state} - {town} - {suburb}
          </code>
        </pre>
      </div>
    );
}
 
export default SelectsAnidados;