import { Mail, Github, Linkedin } from 'lucide-react';

function Contact() {
  const links = [
    { icon: Mail, label: 'Email', value: 'supun@example.com', href: 'mailto:supun@example.com' },
    { icon: Github, label: 'GitHub', value: '/supunhalangoda', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', value: '/supunhalangoda', href: 'https://linkedin.com' },
  ];

  return (
    <section>
      <div className="border-2 border-black p-8 font-mono">
        <div className="text-gray-600 text-sm mb-6">
          <span className="text-green-600">$</span> cat contact.sh
        </div>

        <div className="pl-4 border-l-2 border-gray-300 ml-1 space-y-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 border border-black hover:bg-black hover:text-white transition-colors duration-200 group"
              >
                <Icon size={20} />
                <div className="flex-1">
                  <div className="text-xs text-gray-600 group-hover:text-gray-300">
                    {link.label}
                  </div>
                  <div className="text-sm font-mono">{link.value}</div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
          <span className="text-green-600">$</span> echo "Let's make the internet safer together"
        </div>
      </div>
    </section>
  );
}

export default Contact;
