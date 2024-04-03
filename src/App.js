import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import SectionIcon from '@mui/icons-material/Book'; 

function App() {
  const [open, setOpen] = useState(false);

  const actions = [
    { icon: <Link to="section1" spy={true} smooth={true} duration={500}><SectionIcon /></Link>, name: 'Introduction' },
    { icon: <Link to="section2" spy={true} smooth={true} duration={500}><SectionIcon /></Link>, name: 'Competitive Analysis' },
    { icon: <Link to="section3" spy={true} smooth={true} duration={500}><SectionIcon /></Link>, name: 'Creating Interface' },
    { icon: <Link to="section4" spy={true} smooth={true} duration={500}><SectionIcon /></Link>, name: 'Deployment' },
  ];

  return (
    <div className="App">
      <Header />
      <Body />
      <SpeedDial
  ariaLabel="Navigation Speed Dial"
  sx={{ position: 'fixed', bottom: 16, right: 16 }}
  icon={<SpeedDialIcon icon={<MenuIcon />} openIcon={<MenuIcon />} />}
  onClose={() => setOpen(false)}
  onOpen={() => setOpen(true)}
  open={open}
  FabProps={{ color: 'inherit' }} 
>
  {actions.map((action, index) => (
    <SpeedDialAction
      key={index}
      icon={action.icon}
      tooltipTitle={action.name}
      tooltipOpen
      onClick={() => setOpen(false)}
    />
  ))}
</SpeedDial>
    </div>
  );
}

export default App;
