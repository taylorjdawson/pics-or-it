import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleCreate = () => {
    setMenu(false);
    navigate('/create');
  };

  const handleMyBounties = () => {
    setMenu(false);
    navigate('/my-bounties');
  };

  const handleAllBounties = () => {
    setMenu(false);
    navigate('/');
  };

  const handleFaq = () => {
    setMenu(false);
    window.open('https://info.poidh.xyz/', '_blank');
  };

  const handleDiscord = () => {
    setMenu(false);
    window.open('https://discord.gg/Pm28qNuth7', '_blank');
  };

  const handleGithub = () => {
    setMenu(false);
    window.open('https://github.com/kaspotz/pics-or-it', '_blank');
  };

  const handleArbiscan = () => {
    setMenu(false);
    window.open(
      'https://arbiscan.io/address/0xdffe8a4a4103f968ffd61fd082d08c41dcf9b940',
      '_blank'
    );
  };

  const handleDune = () => {
    setMenu(false);
    window.open(
      'https://dune.com/yesyes/poidh-pics-or-it-didnt-happen',
      '_blank'
    );
  };

   const handleTwitter = () => {
    setMenu(false);
    window.open(
      'https://twitter.com/poidhxyz',
      '_blank'
    );
  };

   const handleAbout = () => {
    setMenu(false);
    window.open(
      'https://paragraph.xyz/@poidh/about-pics-or-it-didnt-happen',
      '_blank'
    );
  };

  return (
    <div>
      <span className="hamburger-menu-wrap">
        {!menu && (
          <FaBars onClick={() => setMenu(!menu)} color="#F4595B" size={25} />
        )}
      </span>
      {menu && (
        <div className="menu-wrap">
          <span className="menu-close-wrap">
            <FaX onClick={() => setMenu(!menu)} color="#F4595B" size={25} />
          </span>
          <ul className="menu-list-wrap">
            <li onClick={handleAllBounties}>home</li>
            <li onClick={handleCreate}>create bounty</li>
            <li onClick={handleMyBounties}>my bounties</li>
            <li onClick={handleFaq}>how it works</li>
            <li onClick={handleAbout}>about us</li>
            <li onClick={handleTwitter}>twitter</li>
            <li onClick={handleDiscord}>discord</li>
            <li onClick={handleDune}>dune analytics</li>
            <li onClick={handleGithub}>github</li>
            <li onClick={handleArbiscan}>arbiscan</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navigation;
