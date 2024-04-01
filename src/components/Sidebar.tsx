function Sidebar() {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-primary flex flex-col rounded-tr-[3.5rem] border-[1px] border-secondary border-l-0">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse p-12">
          <img src="../assets/Horizontal Logo.svg" className="h-8" />
        </a>
        <ul className="space-y-2 font-medium flex flex-col justify-center p-3">

          <li className="flex items-right justify-start px-2 text-grayP hover:bg-third rounded-3xl">
            <img src="/assets/icons/dashboard.svg" alt="icon" />
            <a href="/dashboard" className="flex items-center p-2 text-grayP rounded-lg ">
              <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
            </a>
          </li>

          <li className="flex items-right justify-start px-2 text-grayP hover:bg-third rounded-3xl">
            <img src="/assets/icons/devices.svg" alt="icon" />
            <a id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="flex items-center p-2 text-grayP rounded-lg ">
              <span className="flex">Devices<img src="/public/assets/icons/arrow.svg"  className="w-5"/></span> 
            </a>
            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Camera 1</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Camera 2</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Camera 3</a>
      </li>

    </ul>
</div>
          </li>
          
          <li className="flex items-right justify-start px-2 text-grayP hover:bg-third rounded-3xl">
            <img src="/assets/icons/upload.svg" alt="icon" />
            <a href="/dashboard/upload" className="flex items-center p-2 text-grayP rounded-lg ">
              <span className="flex-1 ms-3 whitespace-nowrap">Upload</span>
            </a>
          </li>
          <li className="flex items-right justify-start px-2 text-grayP hover:bg-third rounded-3xl">
            <img src="/assets/icons/settings.svg" alt="icon" />
            <a href="/dashboard/settings" className="flex items-center p-2 text-grayP rounded-lg ">
              <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
            </a>
          </li>
          <li className="flex items-right justify-start px-2 text-grayP hover:bg-third rounded-3xl">
            <img src="/assets/icons/help.svg" alt="icon" />
            <a href="/dashboard/help" className="flex items-center p-2 text-grayP rounded-lg ">
              <span className="flex-1 ms-3 whitespace-nowrap">Help</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

