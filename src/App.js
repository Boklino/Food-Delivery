import img from "./img/foods.avif";
function App() {
  return (
    <section class="w-full h-full bg-gray-100 bg-repeat-x min-h-screen flex items-center justify-center bg-cover">
      <div class="bg-gray-200 flex rounded-2xl shadow-lg  max-w-4xl p-5 items-center">
        <div class="px-20 md:w-1/2">
          <h2 class="font-bold text-2xl text-slate-800">Login</h2>
          <p class="text-xs mt-3 text-slate-800">
            If you are already a member, Easily log in
          </p>
          <form class="flex flex-col gap-4 mt-4">
            <input
              class="p-2 mt-6 rounded-xl border"
              type="text"
              name="email"
              placeholder="Email"
            />
            <div>
              <input
                class="p-2 w-full rounded-xl  border"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button class=" bg-[#686B7A] rounded-2xl py-2 text-white mt-4 hover:scale-105 duration-300">
              Login
            </button>
          </form>

          <div class="mt-10 text-gray-700 grid grid-cols-3 items-center">
            <hr class="border-gray-700" />
            <p class="text-center text-xs">OR</p>
            <hr class="border-gray-700" />
          </div>

          <button class="bg-white border-2 py-2 rounded-2xl w-full mt-6 flex justify-center items-center text-sm hover:scale-105 duration-300">
            Login with Google
          </button>
          <div class="inline-block relative w-full pb-0 align-middle">
            {" "}
            <svg
              class="w-5 h-5 absolute -translate-y-8 ml-6 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 45 45"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20
                    s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
          </div>

          <div class="mt-8 text-xs border-b border-gray-500 py-4">
            <a href=""> Forgot your password?</a>
          </div>
          <div class="text-xs flex justify-between items-center mt-3">
            Don't have an account?
            <button class="py-2 px-5 border bg-white rounded-xl hover:scale-110 duration-300">
              Register
            </button>
          </div>
        </div>

        <div class="w-1/2 md:block hidden">
          <img class=" rounded-2xl" src={img} alt="Food background" />
        </div>
      </div>
    </section>
  );
}

export default App;
