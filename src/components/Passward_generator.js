import React, { useCallback, useEffect, useState } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';

export const Passward_generator = () => {

  const [length, setlength] = useState(8);
  const [Character1, setcharacter1] = useState(true);
  const [number1, setnumber1] = useState(false);
  const [password, setpassword] = useState("");





  const generate_pass = useCallback(() => {
    let dome = 'abcdefghijklmnopqrstuvwxyz';
    const char1 = '! @#$%^&*()_-+={[}]|\:;"<,>.?/'
    const num = '0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      if (Character1) {
        dome = dome + char1;
      }

      if (number1) {
        dome = dome + num;
      }

      // Generate a random index to select a character from the combined string
      // const randomIndex = Math.floor(Math.random() * dome.length);
      // result += dome.charAt(randomIndex);

      let randomeIndex = Math.floor(Math.random() * dome.length);
      result += dome.charAt(randomeIndex);
    }

    console.log(result);
    setpassword(result);
  }, [Character1, number1, length]);


  const copypass = () => {
    const copyText = document.getElementById('showpass');
    copyText.select();
    document.execCommand('copy');
  }


  useEffect(() => {
    generate_pass();
  }, [Character1, number1, length]);
  return (
    <>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>

        <div className="container my-5" style={{ display: 'flex', backgroundColor: 'rgb(70, 73, 77)', color: 'white', justifyContent: 'center', alignContent: 'center', display: 'inline-block', flexDirection: 'column', borderRadius: '1rem' }}>

          <div className="row text-center">
            <h2 className='mt-5 mb-3'>Password Generator</h2>
          </div>



          {/* Input and copy Field started */}
          <div className="row" style={{ justifyContent: 'center' }}>

            <InputGroup style={{ width: '80%', borderRadius: '0.7rem' }}>
              <FormControl
                type="text"
                id='showpass'
                value={password}
                placeholder='Password'
                readOnly
                style={{ height: '2.5rem', borderTopLeftRadius: '0.7rem', borderBottomLeftRadius: '0.7rem', color: 'orange' }}
              />
              <Button className='btn btn-primary' onClick={copypass} style={{ width: '20%', borderTopRightRadius: '0.7rem', borderBottomRightRadius: '0.7rem' }}><b style={{ fontSize: '1em' }}>Copy</b></Button>
            </InputGroup>

          </div>

          {/* Input and copy Field Ended */}



          {/* Ranges and checkboxes started */}
          <div className="container row mt-4 mb-3" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', color: 'orange' }}>

            <div className="col col-lg-6 col-md-8 col-sm-8 text-center" style={{ display: 'flex', justifyContent: 'end' }}>
              <input type="range" value={length} onChange={(e) => setlength(e.target.value)} min={0} max={25} style={{ width: '50%' }} /> <b>  Length</b>: {length}
            </div>

            <div className="col col-lg-3 col-md-2 col-sm-2" >

              <label htmlFor="number">
                <input id="number" defaultChecked={number1} onChange={() => setnumber1(!number1)} type="checkbox" /> <b>Numbers</b>
              </label>
            </div>


            <div className="col col-lg-3 col-md-2 col-sm-2">

              <label htmlFor="char">
                <input id="char" defaultChecked={Character1} onChange={() => setcharacter1(!Character1)} type="checkbox" /> <b>Characters</b>
              </label>
            </div>
          </div>

          {/* Ranges and checkboxes Ended */}


        </div>


      </div>

    </>
  )
}
