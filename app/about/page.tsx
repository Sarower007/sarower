// pages/about.tsx

import { FC } from 'react';

const About: FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#002e02] text-white text-center py-16">
        <h1 className="text-4xl font-bold text-[#97C93E]">About Me</h1>
        <p className="text-lg mt-4">Web Developer & Designer</p>
        <button className="mt-8 bg-[#97C93E] text-white py-2 px-4 rounded-full hover:bg-[#002e02] transition-colors duration-300">
          Let's Connect
        </button>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row justify-between items-center py-16 px-8">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-[#002e02]">Hello! I'm Sarower Alam Zia</h2>
          <p className="text-lg mt-4 leading-relaxed">
            I'm a passionate Web Developer & Designer with over 6 years of experience. I specialize in both front-end
            and back-end development, providing innovative solutions tailored to your needs. I am also experienced in UX/UI
            design, ensuring an optimal user experience on all devices.
          </p>

          <p className="text-lg mt-4 leading-relaxed">
            I thrive on solving problems and turning ideas into beautiful, functional websites and applications.
            Whether it's building responsive websites or creating user-friendly designs, I am passionate about every aspect of the development process.
          </p>

          {/* Skills */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-[#002e02]">Skills</h3>
            <ul className="list-disc pl-6 mt-4">
              <li className="text-lg text-[#97C93E]">HTML, CSS, JavaScript</li>
              <li className="text-lg text-[#97C93E]">React.js, Next.js</li>
              <li className="text-lg text-[#97C93E]">WordPress Development</li>
              <li className="text-lg text-[#97C93E]">Figma, UX/UI Design</li>
              <li className="text-lg text-[#97C93E]">PHP, MySQL</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:w-1/3 text-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Sarower Alam Zia"
            className="rounded-full w-48 h-48 object-cover mx-auto"
          />
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-[#f4f4f9] py-16 px-8">
        <h2 className="text-3xl font-bold text-[#002e02] text-center">Education</h2>
        <div className="mt-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#002e02]">Bachelor of Science in Computer Science</h3>
            <p className="text-lg text-[#97C93E]">University of XYZ, 2014 - 2018</p>
            <p className="text-md mt-2 text-gray-600">
              Studied various subjects like algorithms, data structures, web development, and UX/UI design.
              Gained hands-on experience with real-world projects during internships and academic workshops.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-[#002e02] text-center">Experience</h2>
        <div className="mt-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#002e02]">Web Developer at ABC Tech</h3>
            <p className="text-lg text-[#97C93E]">2020 - Present</p>
            <p className="text-md mt-2 text-gray-600">
              I am responsible for building and maintaining websites using Next.js, React.js, and WordPress. I collaborate
              with cross-functional teams to deliver scalable and user-friendly websites for clients in various industries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#002e02]">Junior Web Developer at XYZ Innovations</h3>
            <p className="text-lg text-[#97C93E]">2018 - 2020</p>
            <p className="text-md mt-2 text-gray-600">
              Worked on front-end development using HTML, CSS, JavaScript, and React. Assisted in developing e-commerce
              websites, collaborating with senior developers to implement interactive features and improve user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Hobbies and Personal Choices Section */}
      <section className="bg-[#f4f4f9] py-16 px-8">
        <h2 className="text-3xl font-bold text-[#002e02] text-center">Hobbies & Personal Choices</h2>
        <div className="mt-8 space-y-6 text-center">
          <p className="text-lg text-gray-600">
            Apart from coding and designing, I enjoy photography, playing chess, and traveling to new places. I am passionate
            about learning new technologies and continuously improving my skills. I also enjoy exploring new design trends
            and incorporating them into my projects.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            My choice of tools for development includes VS Code, Git, and Figma. For design, I prefer working with minimal
            and clean aesthetics that offer simplicity and functionality.
          </p>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-8 bg-[#f4f4f9] text-center">
        <div className="space-x-6">
          <a
            href="https://www.linkedin.com/in/sarower-alam-zia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-[#97C93E] hover:text-[#002e02] transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sarower"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-[#97C93E] hover:text-[#002e02] transition duration-300"
          >
            GitHub
          </a>
          <a
            href="mailto:sarowerweb@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-[#97C93E] hover:text-[#002e02] transition duration-300"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
