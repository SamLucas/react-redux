import React from "react";
import { connect } from "react-redux";

const Sidebar = ({ module }) => (
  <aside>
    {module.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li>{lesson.title}</li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

export default connect(state => ({
  module: state
}))(Sidebar);
