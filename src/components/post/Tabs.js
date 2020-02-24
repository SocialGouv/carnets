import styled from "styled-components";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Tabs = ({ post }) => {
  const [activeTab, setActiveTab] = useState(0);
  const lineBreak = str => str.replace(/(?:\r\n|\r|\n)/g, "  \n");

  const tabs = [
    { title: "Priorités", data: post.priorities },
    { title: "Échéances / Événements", data: post.term },
    { title: "Besoins", data: post.needs }
  ];

  return (
    <Wrapper>
      <ul className="nav nav-tabs">
        {tabs.map((tab, i) => (
          <li className="nav-item" key={i}>
            <a
              tabIndex={i}
              role="menuitem"
              onClick={() => setActiveTab(i)}
              onKeyPress={() => setActiveTab(i)}
              className={`nav-link ${activeTab === i ? "active" : ""}`}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content" id="myTabContent">
        {tabs.map((tab, i) => (
          <div
            key={i}
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
            className={`tab-pane fade ${activeTab === i ? "show active" : ""}`}
          >
            <div className="text markdown-body">
              <ReactMarkdown source={lineBreak(tab.data || "")} />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .nav-tabs {
    margin-top: 1rem;
  }

  .tab-pane {
    border-radius: 0 0 4px 4px;
    border-left: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;

    .markdown-body {
      padding: 1rem;
    }
  }

  .nav-item a {
    outline: 0;
    cursor: pointer;
  }
`;

export default Tabs;
