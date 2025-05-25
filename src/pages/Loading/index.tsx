const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center text-white space-y-4">
        <div className="animate-spin inline-block w-10 h-10 border-4 border-gray-300 border-t-transparent rounded-full"></div>
        <p className="text-lg font-light text-gray-400">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
