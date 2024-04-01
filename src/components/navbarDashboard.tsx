function NavbarDashboard() {
  return (
    <nav className="bg-forth p-4 flex justify-between items-center rounded-full">
      <div className="flex-grow">
        <input
          className="w-full lg:w-1/3 border-[1px] border-secondary px-4 py-2 rounded-full text-white  bg-transparent"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center space-x-4">
        <a href="/notifications">
          <img src="assets/icons/notifications.svg" alt="" />
        </a>
        <a href="/profile">
          <img src="assets/icons/avatar.png" alt="" />
        </a>
      </div>
      
        
   
     
    </nav>
  );
}

export default NavbarDashboard;
