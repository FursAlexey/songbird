import React from 'react';
import './AnswerList.scss';

function AnswerList() {
  return (
    <div className="answer-list">
      <ul>
        <li><span className="circle"></span>Ворон</li>
        <li><span className="circle"></span>Журавль</li>
        <li><span className="circle"></span>Ласточка</li>
        <li><span className="circle"></span>Козодой</li>
        <li><span className="circle"></span>Кукушка</li>
        <li><span className="circle"></span>Синица</li>
      </ul>
    </div>
  );
}

export default AnswerList;
