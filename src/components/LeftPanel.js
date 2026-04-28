import React from 'react';

const features = [
  { icon: '🎨', text: 'Beautiful portfolio templates' },
  { icon: '🚀', text: 'Easy to create and customize' },
  { icon: '🔍', text: 'Get discovered by recruiters' },
  { icon: '📊', text: 'Track your profile views' },
  { icon: '💼', text: 'Showcase your best work' },
];

function LeftPanel() {
  return (
    <div className="auth-left">
      <div className="brand-logo">PortfolioHub</div>
      <h1 className="left-heading">
        Welcome to Your<br />Professional Journey
      </h1>
      <p className="left-sub">
        Create your stunning portfolio in minutes and get discovered by top recruiters worldwide.
      </p>
      <ul className="feature-list">
        {features.map((f, i) => (
          <li key={i}>
            <span className="icon">{f.icon}</span>
            {f.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftPanel;
