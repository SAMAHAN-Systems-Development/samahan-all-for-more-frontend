import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoMdArrowDropdown,IoMdArrowDropup } from 'react-icons/io';
import Image from 'next/image';

import logo from 'public/images/about-page/A4M LOGO.png';

const Navbar = () => {
  const ArrowSize = 15;
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const [openSubDropdown, setOpenSubDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (id: string, isDesktop: boolean) => {
    if (isDesktop) {
      setOpenDropdowns((prev) => (prev.includes(id) ? [] : [id]));
    } else {
      setOpenDropdowns((prev) =>
        prev.includes(id) ? prev.filter((drop) => drop !== id) : [...prev, id]
      );
    }
    if (id !== 'academix') setOpenSubDropdown(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    action: () => void
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      action();
    }
  };

  const renderDropdownItems = (items: string[]) =>
    items.map((item) => (
      <li
        key={item}
        className="cursor-pointer p-2"
        tabIndex={0}
        role="menuitem"
        onClick={() => {
          /* Handle item click logic here */
        }}
        onKeyDown={(event) =>
          handleKeyDown(event, () => {
            /* Handle item click logic here */
          })
        }
      >
        {item}
      </li>
    ));

  return (
    <nav className="bg-white py-4 px-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[100px] flex justify-between items-center">
      <div className="text-blue-900 font-bold text-xl flex items-center">
        <Image src={logo} alt="Logo" width={90} height={90} />
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-blue"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <ul
        className="hidden md:flex space-x-6 text-blue font-medium"
        role="menu"
      >
        {['Home', 'About'].map((item) => (
          <li
            key={item}
            className="cursor-pointer"
            tabIndex={0}
            role="menuitem"
            onClick={() => {
              /* Handle item click logic here */
            }}
            onKeyDown={(event) =>
              handleKeyDown(event, () => {
                /* Handle item click logic here */
              })
            }
          >
            {item}
          </li>
        ))}
        <li className="relative">
          <button
            onClick={() => toggleDropdown('offices', true)}
            className="flex items-center"
            aria-expanded={openDropdowns.includes('offices')}
            aria-controls="offices-dropdown"
          >
            <span>Offices</span>
            <div className="mt-1">
              {openDropdowns.includes('offices') ? (
                <IoMdArrowDropup size={ArrowSize} />
              ) : (
                <IoMdArrowDropdown size={ArrowSize} />
              )}
            </div>
          </button>
          {openDropdowns.includes('offices') && (
            <div
              id="offices-dropdown"
              className="absolute font-normal left-1/2 transform -translate-x-1/2 bg-white w-[255px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-[20px] py-3 px-7 mt-10 z-10"
              role="menu"
            >
              {renderDropdownItems([
                'Office of the President',
                'Office of the Vice President',
                'Office of the Secretary General',
                'Office of the Treasurer',
              ])}
            </div>
          )}
        </li>

        <li
          className="cursor-pointer"
          tabIndex={0}
          role="menuitem"
          onClick={() => {
            /* Handle Central Board click logic here */
          }}
          onKeyDown={(event) =>
            handleKeyDown(event, () => {
              /* Handle Central Board click logic here */
            })
          }
        >
          Central Board
        </li>
        <li
          className="cursor-pointer"
          tabIndex={0}
          role="menuitem"
          onClick={() => {
            /* Handle FAQs click logic here */
          }}
          onKeyDown={(event) =>
            handleKeyDown(event, () => {
              /* Handle FAQs click logic here */
            })
          }
        >
          FAQs
        </li>
        <li className="relative">
          <button
            onClick={() => toggleDropdown('infoPortal', true)}
            className="flex items-center"
            aria-expanded={openDropdowns.includes('infoPortal')}
            aria-controls="infoPortal-dropdown"
          >
            <span>Information Portal</span>
            <div className="mt-0">
              {openDropdowns.includes('infoPortal') ? (
                <IoMdArrowDropup size={ArrowSize} />
              ) : (
                <IoMdArrowDropdown size={ArrowSize} />
              )}
            </div>
          </button>
          {openDropdowns.includes('infoPortal') && (
            <div
              id="infoPortal-dropdown"
              className="absolute font-normal left-1/2 transform -translate-x-1/2 pt-3 pb-4 px-7 z-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-[200px] flex flex-col justify-center items-center rounded-[20px] mt-10"
              role="menu"
            >
              {renderDropdownItems(['Bulletin', 'GuideSite', 'Event Finder'])}
              <li
                role="menuitem"
                tabIndex={0}
                onClick={() => setOpenSubDropdown((prev) => !prev)}
                onKeyDown={(event) =>
                  handleKeyDown(event, () =>
                    setOpenSubDropdown((prev) => !prev)
                  )
                }
              >
                <div className="flex justify-center items-center cursor-pointer">
                  <span className="font-medium">ACADEMIX</span>
                  <div className="mt-[0.5]">
                    {openSubDropdown ? (
                      <IoMdArrowDropup size={ArrowSize} />
                    ) : (
                      <IoMdArrowDropdown size={ArrowSize} />
                    )}
                  </div>
                </div>
                {openSubDropdown && (
                  <ul id="academix-dropdown" className="mt-2" role="menu">
                    {renderDropdownItems(['AcadHub', 'AcadDrive', 'Atheneum'])}
                  </ul>
                )}
              </li>
            </div>
          )}
        </li>
      </ul>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-28 left-0 w-full bg-white flex flex-col items-center space-y-4 pt-4 md:hidden">
          {['Home', 'About', 'Offices', 'Central Board', 'FAQs'].map((item) => (
            <li
              key={item}
              className="text-blue-900 text-lg cursor-pointer"
              tabIndex={0}
              role="menuitem"
              onClick={() => {
                /* Handle item click logic here */
              }}
              onKeyDown={(event) =>
                handleKeyDown(event, () => {
                  /* Handle item click logic here */
                })
              }
            >
              {item === 'Offices' ? (
                <>
                  <button
                    onClick={() => toggleDropdown('offices', false)}
                    className="flex items-center space-x-2"
                    aria-expanded={openDropdowns.includes('offices')}
                    aria-controls="mobile-offices-dropdown"
                  >
                    <span>Offices</span>
                    {openDropdowns.includes('offices') ? (
                      <IoMdArrowDropup size={ArrowSize} />
                    ) : (
                      <IoMdArrowDropdown size={ArrowSize} />
                    )}
                  </button>
                  {openDropdowns.includes('offices') && (
                    <ul
                      id="mobile-offices-dropdown"
                      className="space-y-2 text-center"
                      role="menu"
                    >
                      {renderDropdownItems([
                        'Office of the President',
                        'Office of the Vice President',
                        'Office of the Secretary General',
                        'Office of the Treasurer',
                      ])}
                    </ul>
                  )}
                </>
              ) : (
                item
              )}
            </li>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
