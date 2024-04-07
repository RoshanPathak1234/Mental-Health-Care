import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <div className="">
        <div className="name">
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Name'/>
        </div>
        <div className="email">
          <input type="email" />
        </div>
       <div className="paasword">
        <input type="password" />
       </div>
      </div>
    </div>
  )
}

export default LoginForm
