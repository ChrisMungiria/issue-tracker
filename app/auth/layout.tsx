const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div className="flex-1 bg-blue-500 h-full hidden sm:block">
        <img
          src="/background.jpg"
          alt=""
          className="w-full h-full hidden sm:block object-cover"
        />
      </div>
      <div className="flex-1 flex items-center justify-center relative h-full w-full">
        <img
          src="/background.jpg"
          alt=""
          className="absolute z-10 w-full h-full sm:hidden block object-cover"
        />
        <div className="absolute z-20 bg-white rounded-md shadow-xl">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
