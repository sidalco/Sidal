import './TabButton.css'
import { useState } from 'react';

const TabButton = (props) => {
    const [activeTab, setActiveTab] = useState('Reciprocating');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
                <button className={activeTab === props.ActiveTabName ? 'active' : ''} onClick={() => handleTabClick(props.ActiveTabName)}>
                    {props.ButtonName}
                </button>
  )
}

export default TabButton