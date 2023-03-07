const Register = () => (
	<div>
		<section class='w-full h-full bg-gray-100 bg-repeat-x min-h-screen flex items-center justify-center bg-cover '>
			<div class='bg-gray-200 flex justify-center rounded-2xl shadow-lg  max-w-4xl p-5 items-center m-8'>
				<div class='px-20 '>
					<h2 class='font-bold text-4xl  text-slate-800 whitespace-nowrap flex justify-center'>
						Create an Account
					</h2>

					<form class='gap-2 mt-4 '>
						<label
							for='First Name'
							class=' text-left inline-block w-20  mr-16 '
						>
							First Name
						</label>
						<input
							placeholder='First'
							class='p-2 mt-3 rounded-xl border w-48'
							type='text'
							name='First Name'
						/>{' '}
						<br />
						<label
							for='Last Name'
							class=' text-left inline-block w-20  mr-16 '
						>
							Last Name
						</label>
						<input
							placeholder='Last'
							class='p-2 mt-3 rounded-xl border w-48'
							type='text'
							name='Last Name'
						/>{' '}
						<br />
						<label
							for='Email'
							class=' text-left inline-block w-20 mr-16 '
						>
							Email
						</label>
						<input
							class='p-2 mt-3 rounded-xl border w-48'
							type='text'
							name='email'
							placeholder='Email'
						/>{' '}
						<br />
						<label
							for='Password'
							class='text-left inline-block w-20 mr-16'
						>
							Password
						</label>
						<input
							class='p-2 mt-3 rounded-xl  border w-48'
							type='password'
							name='password'
							placeholder='Password'
						/>{' '}
						<br />
						<label
							for='Password'
							class='text-left inline-block w-20 mr-16 whitespace-nowrap'
						>
							Confirm Password
						</label>
						<input
							class='p-2 mt-3 rounded-xl  border  w-48'
							type='password'
							name='password'
							placeholder='Password'
						/>{' '}
						<br />
						<label class='text-left inline-block w-20  mr-16 whitespace-nowrap'>
							Enter
						</label>
						<input
							class='p-2 mt-3 rounded-xl border  w-48'
							type='date'
							name='bday'
						/>
						<br />
						<label
							class='text-left inline-block w-20 mr-16'
							for='gender'
						>
							Gender
						</label>
						<select
							name='gender'
							class='p-2 mt-3 rounded-xl border w-48'
						>
							<option value=''>Please select one…</option>
							<option value='female'>Female</option>
							<option value='male'>Male</option>
							<option value='non-binary'>Shemale</option>
							<option value='GIGACHAD'>GigaChad</option>
							<option value='Prefer not to answer'>
								Perfer not to Answer
							</option>
						</select>
						<br />
						<button class=' bg-[#686B7A] rounded-2xl py-2 text-white mt-10 hover:scale-105 duration-300 w-full'>
							Create your account
						</button>
						<br />
					</form>

					<div class='mt-10 text-gray-700 grid grid-cols-3 items-center'>
						<hr class='border-gray-700' />
						<p class='text-center text-xs'>OR</p>
						<hr class='border-gray-700' />
					</div>

					<button class='bg-white border-2 py-2 rounded-2xl w-full mt-6 flex justify-center items-center text-sm hover:scale-105 duration-300'>
						Continue with Google
					</button>
					<div class='inline-block relative w-full pb-0 align-middle'>
						{' '}
						<svg
							class='w-5 h-5 absolute -translate-y-11 ml-6 '
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 45 45'
						>
							<path
								fill='#fbc02d'
								d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20
              s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
							/>
							<path
								fill='#e53935'
								d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
							/>
							<path
								fill='#4caf50'
								d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
							/>
							<path
								fill='#1565c0'
								d='M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
							/>
						</svg>
					</div>

					<div class='text-xs flex justify-center items-center mt-3'>
						<p class=' mr-12'>Already have an account?</p>
						<button class='py-2 px-5  border bg-white rounded-xl hover:scale-110 duration-300'>
							Login
						</button>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Register;
