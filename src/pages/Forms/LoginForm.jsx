import React , {useState} from 'react'

// const LoginForm = () => {
//   return (
//     <div>
//       <div className="flex flex-align-center lex-just-center h-screen">
//         <div className="name">
//           <label htmlFor="">Name</label>
//           <input type="text" placeholder='Name'/>
//         </div>
//         <div className="email flex-item">
//           <input type="email" />
//         </div>
//        <div className="paasword flex-item">
//         <input type="password" />
//        </div>
//       </div>
//     </div>
//   )
// }

// export default LoginForm

// gpt 


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleGoogleSignIn = () => {
    // Implement Google sign-in logic here
    console.log('Signing in with Google...');
  };

  const handleFacebookSignIn = () => {
    // Implement Facebook sign-in logic here
    console.log('Signing in with Facebook...');
  };

  const handleGitHubSignIn = () => {
    // Implement GitHub sign-in logic here
    console.log('Signing in with GitHub...');
  };

  const handleLinkedInSignIn = () => {
    // Implement LinkedIn sign-in logic here
    console.log('Signing in with LinkedIn...');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, such as sending the data to a server or performing client-side validation
    console.log('Email:', email);
    console.log('Password:', password);
    // Clear the form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Login</button>
        <div className="social-buttons">
          <button onClick={handleGoogleSignIn} className="google">Sign in with Google</button>
          <button onClick={handleFacebookSignIn} className="facebook">Sign in with Facebook</button>
          <button onClick={handleGitHubSignIn} className="github">Sign in with GitHub</button>
          <button onClick={handleLinkedInSignIn} className="linkedin">Sign in with LinkedIn</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
