import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="bg-[#fff6ee] min-h-screen flex justify-center items-center  ">
      <div className="flex flex-col justify-center items-center p-4 w-[60%] mx-auto space-y-8">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold">About Me</h1>

          <Link href="/register" className="text-blue-500 underline">
            Link to Registeration Form
          </Link>
        </div>

        <div className="mb-4 flex justify-center items-center flex-col">
          <label className="text-sm font-bold mb-2">Name:</label>
          <p className="text-lg">{`Popoola Joseph Olamide.`}</p>
        </div>

        <div className="mb-4 flex flex-col items-center justify-center">
          <label className="block text-sm font-bold mb-2">AltSchool Id:</label>
          <p className="text-lg">{`ALT/SOE/023/3720`}</p>
        </div>

        <div className="mb-8 flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold mb-2">Biography</h3>
          <p className="text-lg text-center">
            Greetings! I'm Joseph Popoola Olamide, and my enthusiasm lies in
            addressing challenges and fostering growth, whether it's in human
            development or environmental progress. I possess a keen interest in
            Architecture and Tech, fueled by a profound curiosity to comprehend
            their inner workings, particularly in the field of programming. This
            journey traces back to my initial exposure to the captivating realm
            of video games. Unbeknownst to me, my passion for gaming would
            evolve into a doorway to my fascination with technology. What
            initially started as a leisure activity quickly transformed into an
            unquenchable thirst for knowledge.
          </p>
        </div>

        <div className="mb-8 flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold mb-2">
            My goals here at altschool africa
          </h3>
          <p className="text-lg text-center">
            My key goals in this course are to improve my skills as a full stack
            developer and to broaden my professional network. I want to improve
            my skills in full stack programming and tech generally. At the same
            time, I'm very open to the idea of interacting with colleagues and
            mentors in order to establish a supportive professional network
            inside the tech business. This dual emphasis on skill development
            and networking I believe will direct my educational route here on
            Altschool Africa.
          </p>
        </div>

        <div className="flex space-x-8">
          <a
            href="https://github.com/joestackss"
            target="_blank"
            className="text-blue-500 underline"
          >
            My Github
          </a>
          <a href="mailto:archjo@gmail.com" className="text-blue-500 underline">
            Send Me a Mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
