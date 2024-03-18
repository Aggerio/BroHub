const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 flex justify-between items-center">
      <div className="logo">
        <a href="/home">BROHUB</a>
      </div>
      <div className="links flex gap-10">
        {["Feed", "Chat", "Events", "Profile"].map((item, index) => (
          <div key={index}>
            <a
              className={`text-lg capitalize font-semibold ${
                index === 4 ? "ml-32" : ""
              }`}
              href={"/" + item.toLowerCase()}
            >
              {item}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
