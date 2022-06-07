import { useState, useRef, useLayoutEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [items] = useState(['foo', 'bar'])
  const [inputVal, setInputVal] = useState('default input val')

  const hellowWorldRef = useRef();
  const cancelBtnRef = useRef();
  const submitBtnRef = useRef();

  useLayoutEffect(() => {
    const { current: hellowWorld } = hellowWorldRef;
    hellowWorld.addEventListener('update', e => {
      e.stopImmediatePropagation()
      setInputVal(e.detail[0])
    });

    const { current: cancelBtn } = cancelBtnRef;
    cancelBtn.addEventListener('custom-click', e => {
      e.stopImmediatePropagation()
      console.log('cancel')
    });

    const { current: submitBtn } = submitBtnRef;
    submitBtn.addEventListener('custom-click', e => {
      e.stopImmediatePropagation()
      console.log('submit')
    });
  }, [hellowWorldRef, cancelBtnRef, submitBtnRef]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
      </header>

      <main>
        <my-list
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

        <my-hello-world
          ref={hellowWorldRef}
          data={inputVal}
        />
      </main>
    </div>
  )
}

export default App
