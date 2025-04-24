const Container = ({ children }) => {
  return (
    <div className="w-full">
      <div className="w-full h-auto">
        <div className="xl:w-[80%] w-[90%] mx-auto p-4 md:py-16 py-8 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
