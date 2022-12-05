import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className="p-8">
      <nav>
        <ul className="flex justify-center gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg no-underline hover:text-[#fcb66b] ${
                  isActive ? 'text-[#fcb66b]' : undefined
                }`
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/preview"
              className={({ isActive }) =>
                `text-lg no-underline hover:text-[#fcb66b] ${
                  isActive ? 'text-[#fcb66b]' : undefined
                }`
              }
              end
            >
              Preview
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
