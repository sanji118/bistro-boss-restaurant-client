import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaGithub } from 'react-icons/fa';
import authSideImage from '../assets/others/authentication1.png';
import bgImage from '../assets/others/authentication.png';
import { useAuth } from '../hook/useAuth';
import { toast } from 'react-toastify';

const Register = () => {
    const {createUser, signInGoogle, signInGithub, updateUserProfile, user} = useAuth();
    const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        
        createUser(email, password)
        .then(()=> updateUserProfile({
            displayName: name,
            password: password,
            email: email
        }))
        .then(()=>{
            navigate('/');
            toast.success('Registered successfully!')
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    const handleGoogleSignUp = ()=>{
        signInGoogle()
        .then(()=>{
            navigate('/')
            toast.success('Successfully Signed up with Google.')
        })
    }

    const handleGithubSignUp = ()=>{
        signInGithub()
        .then(()=>{
            navigate('/');
            toast.success('Successfully Signed up with Github.')
        })
    }



  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-6 rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row items-center justify-between">

        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center">Sign Up</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label font-semibold text-gray-800 py-2">Name</label>
              <input type="text" name='name' placeholder="Type here" className="input w-full rounded-lg bg-white" />
            </div>
            <div>
              <label className="label font-semibold text-gray-800 py-2">Email</label>
              <input type="email" name='email' placeholder="Type here" className="input w-full rounded-lg bg-white" />
            </div>
            <div>
              <label className="label font-semibold text-gray-800 py-2">Password</label>
              <input type="password" name='password' placeholder="Enter your password" className="input  w-full rounded-lg bg-white" />
            </div>
            <button className="btn bg-[#D1A054B3] hover:bg-[#c89f62b3] text-white w-full rounded-lg border-none">Sign Up</button>
          </form>

          <p className="mt-4 text-center text-[#D1A054] text-xl font-semibold">
            Already registered ?{' '}
            <Link to="/auth/login" className="text-[#D1A054] text-xl font-bold">
              Go to log in
            </Link>
          </p>

          <div className="divider text-xl font-medium my-5">Or sign up with</div>

          <div className="flex justify-center gap-10 py-3">
            <button onClick={handleGoogleSignUp} className="border p-2 rounded-full bg-gray-200">
              <FaGoogle />
            </button>
            <button className="border p-2 rounded-full bg-gray-200">
              <FaFacebookF />
            </button>
            <button onClick={handleGithubSignUp} className="border p-2 rounded-full bg-gray-200">
              <FaGithub />
            </button>
          </div>
        </div>


        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={authSideImage} alt="Side Illustration" className="w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default Register;
