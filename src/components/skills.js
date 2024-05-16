import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <main className="main">
      <section id="skills" className="toad-fullscreen">
        <article className="skills">
          <div className="t-6">
            <p>Java<span></span><span className="skills"></span></p>
          </div>
          <div className="t-6">
            <p>Html/Css/Javascript<span></span><span className="skills"></span></p>
          </div>
          <div className="t-6">
            <p>ReactJs/NextJs/Typescript<span></span><span className="skills"></span></p>
          </div>
          <div className="t-6">
            <p>NodeJs/Express<span></span><span className="skills"></span></p>
          </div>
          <div className="t-6">
            <p>Sql/Mysql/Mongodb<span></span><span className="skills"></span></p>
          </div>
          <div className="t-6">
            <p>ML/AI<span></span><span className="skills"></span></p>
          </div>
          <div className="t-6">
            <p>Python/Django/FastAPI<span></span><span className="skills"></span></p>
          </div>
          <div className="t-6">
            <p>Aws<span></span><span className="skills"></span></p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Skills;
