const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-screen h-screen bg-blue-500 flex items-center justify-center">
      {children}
    </section>
  );
};

export default AuthLayout;
