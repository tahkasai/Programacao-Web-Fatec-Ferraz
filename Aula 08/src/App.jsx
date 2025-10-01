import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Menu/>
      </header>
      <main className='d-flex justify-content-center align-items-center vh-100'>
        <div className="card p-5">

          <h1 className='text-center mb-4 text-primary'>Incrição do aluno</h1>

          <form action="#" method="post" className=''>

            <div className="row md-3">
              <div className='col-12'>
                <label htmlFor="" className='form-label'>Nome completo</label>
                <input type="text" name="" id="" className= 'form-control rounded-pill border-1 px-2 py-1'/>
              </div>
            </div>
            
            <div className="row mb-4">
              <div className='col-6'>
                <label htmlFor="" className='form-label'>Data de Nascimento</label>
                <input type="date" name="data" id="data" className='form-control rounded-pill border-1 px-2 py-1'/>
              </div>
              <div className='col-6'>
                <label htmlFor="" className='form-label'>CPF</label>
                <input type="number" className='form-control  rounded-pill border-1 px-2 py-1'/>
              </div>
            </div>
            
            <div className="row md-4">
              <div className='col-12'>
                <label htmlFor="" className='form-label'>Email</label>
                <input type="email" name="" id="" className='form-control rounded-pill border-1'/>
              </div>
            </div>

            <div className="row md-4">
              <div className='col-12'>
              <label htmlFor="" className='form-label'>Curso</label>
              <select name="curso" id="curso" className='form-control rounded-pill border-1'>
                <option value="" disabled="disable" selected="selected">selecione um curso</option>
                <option value="ge">Gestão Empresarial</option>
                <option value="ads">Análise e Desenvolvimento de Sistemas</option>
                <option value="gpi">Gestão de Produção Industrial</option>
              </select>
            </div>
            </div>

            <div className='d-flex justify-content-center m-4'>
              <input type="submit" value="Enviar" className='m-1'/>
              <input type="reset" value="Limpar" className='m-1'/>
            </div>
          </form>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
