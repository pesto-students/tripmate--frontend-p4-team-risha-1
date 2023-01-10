import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="p-3 container mx-auto bg-white flex items-center shadow-sm">
      <div class="p-1 flex">
        <h1 class="uppercase text-black font-black">Tripmate</h1>
      </div>
      <div className="flex justify-end">
        <ul class="flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Faqs</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
