import React, { useCallback, useState, useEffect } from "react";
import classes from "./About.module.scss";

import Table from "components/UI/Table/Table";

const Language = ["Javascript", "Typescript", "Java", "Html", "Css", "MySql"];
const Skills = [
  "React",
  "React-native",
  "Redux",
  "React-Query",
  "Material UI",
  "Bootstrap",
  "Express",
  "Git",
  "Slack",
  "Notion",
];
const Education = ["명지대학교", "융합소프트웨어 학부", "2016 - 2021"];
const Awards = [
  "명지대학교 ICT 융합대학 스마트 캠퍼스 라이프 공모전 - 대상",
  "명지대학교 SW코딩 경진대회 - 장려상",
  "명지대학교 튜터링 - 우수 튜터상",
];

const AboutList = {
  Language,
  Skills,
  Education,
  Awards,
};

const About = () => {
  const [position, setPosition] = useState(0);

  const onScroll = useCallback(() => {
    setPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div className={classes.container}>
      <div className={classes.introduction}>
        <h1>About</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div
        className={classes.background}
        style={{ backgroundPositionY: position / -2 }}
      ></div>
      {Object.keys(AboutList).map((title, index) => (
        <div
          style={{
            opacity: (position - (300 + index * 300)) / 50,
          }}
        >
          <Table title={title} list={AboutList[title]} />
        </div>
      ))}
    </div>
  );
};

export default About;
