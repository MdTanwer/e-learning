import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        About <span className="text-gradient">Me</span>
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          I am a <span className="font-semibold">Full-Stack Developer</span> and
          <span className="font-semibold"> Senior Data Analyst</span> with over{" "}
          <span className="font-semibold">5 years of experience</span> in the
          healthcare and finance industries. With a strong background in
          <span className="font-semibold">
            {" "}
            Node.js, React.js, PostgreSQL, MongoDB, Firebase, and .NET Core
          </span>
          , I specialize in building scalable web applications, enterprise
          solutions, and AI-driven platforms.
          <br />
          <br />
          Over the last few years, I have contributed to projects ranging from
          <span className="italic"> e-commerce platforms</span> and{" "}
          <span className="italic">learning management systems</span> to
          <span className="italic"> AI-powered assistants</span> and{" "}
          <span className="italic">cloud-based enterprise applications</span>.
          My expertise extends to{" "}
          <span className="font-semibold">AWS, Docker, Jenkins, and Kafka</span>
          , enabling me to deliver efficient, production-ready solutions.
          <br />
          <br />
          Beyond development, I am deeply passionate about{" "}
          <span className="font-semibold">AI, automation, and Web3</span>,
          constantly exploring how cutting-edge technologies can solve
          real-world business challenges. My entrepreneurial mindset has also
          led me to work on innovative projects such as{" "}
          <span className="italic">virtual concierge services</span>,
          <span className="italic"> AI-powered marketing tools</span>, and
          <span className="italic"> blockchain-based solutions</span>.
          <br />
          <br />
          With a strong foundation in{" "}
          <span className="font-semibold">
            problem-solving, data analysis, and system architecture
          </span>
          , I thrive in fast-paced environments where innovation meets
          execution. I am committed to building high-quality, user-centric
          solutions that drive measurable impact.
          <br />
          <br />
          <span className="font-semibold text-[20px]">
            Let’s connect and create technology that makes a difference.
          </span>
        </p>
        <br />
        <span className="text-[22px] font-semibold">Md Tanwir</span>
        <h5 className="text-[18px] font-Poppins">
          Full-Stack Developer | AI Enthusiast | Senior Data Analyst
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
