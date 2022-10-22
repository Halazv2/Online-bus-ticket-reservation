const Register = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-white sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="w-auto h-12 mx-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600 max-w">
          Or{" "}
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            start your 14-day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
