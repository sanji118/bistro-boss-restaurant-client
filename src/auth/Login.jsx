import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaGithub } from 'react-icons/fa';
import authSideImage from '../assets/others/authentication1.png';
import bgImage from '../assets/others/authentication.png';
import { useAuth } from '../hook/useAuth';

const Login = () => {
    const {user} = useAuth();
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-6 rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row items-center justify-between">
      
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={authSideImage} alt="Side Illustration" className="w-4/5" />
        </div>

       
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="label font-semibold text-gray-800 py-2">Email</label>
              <input type="email" name='email' placeholder="Type here" className="input w-full rounded-lg bg-white" required/>
            </div>
            <div>
              <label className="label font-semibold text-gray-800 py-2">Password</label>
              <input type="password" name="password" placeholder="Enter your password" className="input  w-full rounded-lg bg-white" required/>
            </div>
            <div>
              <div>
                <input type="text" placeholder="Captcha" className="input w-full mr-2 rounded-lg bg-white my-2" />
                <button type="button" className="text-blue-600 hover:underline py-2 font-semibold">Reload Captcha</button>
              </div>
            </div>
            <button className="btn bg-[#D1A054B3] hover:bg-[#c89f62b3] text-white w-full rounded-lg border-none">Sign In</button>
          </form>

          <p className="mt-4 text-center text-[#D1A054] text-xl font-semibold">
            New here?{' '}
            <Link to="/auth/register" className="text-[#D1A054] text-xl font-bold ">
              Create a New Account
            </Link>
          </p>

          <div className="divider text-xl font-medium mt-8">Or sign in with</div>

          <div className="flex justify-center gap-10 py-6">
            <button className="border p-2 rounded-full bg-gray-200">
              <FaGoogle />
            </button>
            <button className="border p-2 rounded-full bg-gray-200">
              <FaFacebookF />
            </button>
            <button className="border p-2 rounded-full bg-gray-200">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
