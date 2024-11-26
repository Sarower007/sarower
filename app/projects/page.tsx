

const projects = [
  {
    title: 'Project One',
    description: 'A web application built with Next.js and Tailwind CSS.',
    link: '#',
    image: '/images/project1.jpg',
  },
  {
    title: 'Project Two',
    description: 'A mobile app developed using React Native.',
    link: '#',
    image: '/images/project2.jpg',
  },
  {
    title: 'Project Three',
    description: 'A full-stack application with Node.js and Express.',
    link: '#',
    image: '/images/project3.jpg',
  },
  {
    title: 'Project Four',
    description: 'A static website created using HTML, CSS, and JavaScript.',
    link: '#',
    image: '/images/project4.jpg',
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio</h1>
      
      <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mb-8">
        Welcome to my portfolio! Here you will find a selection of my recent projects, showcasing my skills and expertise in web development and design. Click on any project to learn more.
      </p>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
