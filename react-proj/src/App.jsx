import { useState, useRef, useLayoutEffect, useEffect, useCallback } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [items] = useState(['foo', 'bar'])
  const [inputVal, setInputVal] = useState('default input val')

  const inputRef = useRef();
  const cancelBtnRef = useRef();
  const submitBtnRef = useRef();

  useEffect(() => {
    const { current: input } = inputRef;
    input.addEventListener('update', e => {
      e.stopImmediatePropagation()
      setInputVal(e.detail[0])
    });

    const { current: cancelBtn } = cancelBtnRef;
    cancelBtn.addEventListener('custom-click', e => {
      e.stopImmediatePropagation()
      console.log('cancel')
    });

    // FIXME: the [inputVal] alwals be 'default input val'
    const { current: submitBtn } = submitBtnRef;
    submitBtn.addEventListener('custom-click', printCurrentInputVal);
  }, []);
  
  function printCurrentInputVal () {
    console.log(inputVal)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={printCurrentInputVal}>Hello Vite + React!</p>
      </header>

      <main>
        {/* NOTE: web component use [class] */}
        <my-list
          class="my-list"
          array-items={items}
          string-items={JSON.stringify(items)}
        />

        <div className="buttons">
          <my-button type="secondary" ref={cancelBtnRef}>
            cancel
          </my-button>
          <my-button size="large" ref={submitBtnRef}>
            submit
          </my-button>
        </div>

        <my-input
          ref={inputRef}
          value={inputVal}
        />
      </main>
    </div>
  )
}

export default App
