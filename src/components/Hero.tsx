import { Terminal } from 'lucide-react';

function Hero() {
  return (
    <section className="mb-20">
      <div className="border-2 border-black p-8 font-mono">
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Terminal size={16} className="text-green-600" />
          <span className="text-gray-600">~/portfolio</span>
        </div>

        <div className="space-y-2">
          <div className="text-gray-600">
            <span className="text-green-600">$</span> cat introduction.txt
          </div>
          <div className="pl-4 border-l-2 border-gray-300 ml-1">
            <h1 className="text-5xl font-bold mb-2 tracking-tight">Supun Halangoda</h1>
            <p className="text-xl text-gray-700">Hacker | Security Researcher</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-300">
          <div className="text-gray-600 text-sm">
            <span className="text-green-600">$</span> ./whoami.sh
          </div>
          <div className="pl-4 mt-2 text-gray-700 leading-relaxed">
            Breaking systems to make them stronger. Passionate about finding vulnerabilities
            and securing the digital world.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
