"use client";

import Avatar from "../Avatar";
import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState, useRef, useEffect } from "react";
import MenuItem from "./MenuItem";

interface UserMenuProps {
  onLogin?: () => void;
  onSignUp?: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ onLogin, onSignUp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative z-50">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
            hidden
            lg:block
            whitespace-nowrap
            text-sm
            font-semibold
            text-black
            bg-white
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
        >
          Become a Host
        </div>

        <div
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:px-2
            border
            border-neutral-200
            bg-white
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
          "
        >
          <AiOutlineMenu />
          <div>
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-50
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            z-50
            border
            border-neutral-200
          "
        >
          <div className="flex flex-col cursor-pointer">
            <MenuItem
              onClick={() => {
                setIsOpen(false);
                onLogin?.();
              }}
              label="Login"
            />
            <MenuItem
              onClick={() => {
                setIsOpen(false);
                onSignUp?.();
              }}
              label="Sign Up"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
