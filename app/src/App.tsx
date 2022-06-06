import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useForm} from 'react-hook-form'

interface FormData {
  username: string
  password: string
}


function App() {
  const {registar, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })


  return (
    <div className="min-h-screen bg-sky-100 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-3xl text-sky-600 mt-3 pb-4 text-center">Login</div>
      </div>
      <div className="max-w-md w-full mx-auto bg-white mt-4 border p-8 border-sky-800 rounded-2xl ">
        <form action="" className='space-y-6' onSubmit={onSubmit}>
          <div>
            <label className='text-sm font-bold text-sky-600 pl-4'>Username</label>
            <input 
              ref={registar(
                require: true
                minLength: 5,
                maxLength: 20,
                validate: input => isUsername(input)
              )}
              name="username" type="text" className='w-full p-2 border border-sky-700 rounded-3xl mt-1' />
              {errors.username && "Username is invalid"}
          </div>
          <div>
            <label className='text-sm font-bold text-sky-600 pl-4'>Password</label>
            <input 
              ref={registar()}
              name="password"
              type="text" className='w-full p-2 border border-sky-700 rounded-3xl mt-1' />
          </div>
          <div>
            <button className='w-full p-2 bg-sky-400 hover:bg-sky-500 rounded-3xl text-stone-100'>Login</button>
          </div>
          <div className="flex justify-end items-center mt-2">
            <a href="#" className="text-gray-400 hover:text-gray-600" >Forgot password?</a> 
          </div>
          <div className="p-2 text-sky-600 font-bold mb-1 text-center">OR</div>
          <div className="w-full inline-flex justify-center space-x-4">
            <button className="uppercase h-12 w-12 mt-3 text-stone-100 rounded-3xl bg-sky-400 hover:bg-sky-500">
              <FontAwesomeIcon icon={faGithub} className="text-xl"></FontAwesomeIcon>
            </button>
            <button className="uppercase h-12 w-12 mt-3 text-stone-100 rounded-3xl bg-sky-400 hover:bg-sky-500">
            <FontAwesomeIcon icon={faGoogle} className="text-xl"></FontAwesomeIcon>
            </button>
          </div>
        </form>
      </div>
    </div>
  );  
}

export default App;
