/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react';
import { Theme } from "../../interface";
import "./Header.scss";

const Header = ({ theme}: Theme) => {
  const ulRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
      ulRef.current?.childNodes[0].childNodes.forEach((li, i) => {
            li.addEventListener("click", () => {
                ulRef.current?.children[0].children[i].classList.toggle("active");
                ulRef.current?.childNodes[0].childNodes.forEach((li, j) => {
                       i!==j && ulRef.current?.children[0].children[j].classList.remove("active");
                        
              })
            })
      })
  }, [])
  return (
    <div>
       <div className="navigation">
              <div className="ul" ref={ulRef}>
                <ul>
                    <li>
                        <a href="#">
                            <span><i className="bx bx-home"></i></span>
                            <p>Home</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i className="bx bx-search"></i></span>
                            <p>Search</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i className="bx bx-account"></i></span>
                            <p>Profile</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i className="bx bx-message"></i></span>
                            <p>Message</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i className="bx bx-contact"></i></span>
                            <p>Contact</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="indicator">
                
            </div>
          </div>
    </div>
  )
}

export default Header