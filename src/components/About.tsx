import { Shield, Bug, Code2, FileCode } from 'lucide-react';

function About() {
  const expertise = [
    { icon: Shield, label: 'Penetration Testing' },
    { icon: Bug, label: 'Bug Bounty Hunting' },
    { icon: Code2, label: 'Exploit Development' },
    { icon: FileCode, label: 'Security Auditing' },
  ];

  return (
    <section className="mb-20">
      <div className="border-2 border-black p-8 font-mono">
        <div className="text-gray-600 text-sm mb-6">
          <span className="text-green-600">$</span> cat expertise.json
        </div>

        <div className="pl-4 border-l-2 border-gray-300 ml-1">
          <pre className="text-sm text-gray-800 mb-6">
{`{
  "role": "Security Researcher",
  "focus": "Offensive Security",
  "mission": "Find. Report. Fix."
}`}
          </pre>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="border border-black p-4 hover:bg-black hover:text-white transition-colors duration-200 cursor-default"
                >
                  <Icon size={20} className="mb-2" />
                  <div className="text-sm">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
