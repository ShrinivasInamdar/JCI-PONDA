import { useEffect, useRef, useState } from "react";
import { Rocket, Target, HeartHandshake } from "lucide-react";

const VisionMissionSection = () => {
  const visionRef = useRef<HTMLDivElement | null>(null);
  const creedRef = useRef<HTMLDivElement | null>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);

  const [visionVisible, setVisionVisible] = useState(false);
  const [creedVisible, setCreedVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            if (target === visionRef.current) setVisionVisible(true);
            if (target === creedRef.current) setCreedVisible(true);
            if (target === missionRef.current) setMissionVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (visionRef.current) observer.observe(visionRef.current);
    if (creedRef.current) observer.observe(creedRef.current);
    if (missionRef.current) observer.observe(missionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-600 dark:text-blue-400">
        Vision, Creed & Mission
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Vision */}
        <div
          ref={visionRef}
          className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-700 ease-in-out ${
            visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center mb-4">
            <Target className="w-7 h-7 text-blue-600 dark:text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Our Vision</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            To be the leading global network of young active citizens. We envision a world where young people have the capacity to create positive change in their communities, creating a better future for all.
          </p>
        </div>

        {/* Creed */}
        <div
          ref={creedRef}
          className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-700 ease-in-out ${
            creedVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center mb-4">
            <HeartHandshake className="w-7 h-7 text-blue-600 dark:text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Creed</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Faith in humanity. Belief in giving more than we take. These values guide our actions as responsible citizens working to create lasting positive change.
          </p>
        </div>

        {/* Mission */}
        <div
          ref={missionRef}
          className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-700 ease-in-out ${
            missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center mb-4">
            <Rocket className="w-7 h-7 text-blue-600 dark:text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Our Mission</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            To provide development opportunities that empower young people to create positive change. We focus on personal development, community service, and international cooperation to build a better world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
