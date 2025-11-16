function Skills() {
  const skills = [
    { category: 'Security', items: ['Web App Security', 'Network Pentesting', 'Reverse Engineering', 'Malware Analysis'] },
    { category: 'Languages', items: ['Python', 'JavaScript', 'C/C++', 'Bash/Shell'] },
    { category: 'Tools', items: ['Burp Suite', 'Metasploit', 'Wireshark', 'IDA Pro'] },
    { category: 'Platforms', items: ['Linux', 'Docker', 'AWS', 'Azure'] },
  ];

  return (
    <section className="mb-20">
      <div className="border-2 border-black p-8 font-mono">
        <div className="text-gray-600 text-sm mb-6">
          <span className="text-green-600">$</span> ls -la /skills/
        </div>

        <div className="pl-4 border-l-2 border-gray-300 ml-1 space-y-6">
          {skills.map((skillSet, index) => (
            <div key={index}>
              <div className="text-sm font-bold mb-3 text-gray-800">
                drwxr-xr-x {skillSet.category}/
              </div>
              <div className="pl-6 space-y-1 text-sm text-gray-700">
                {skillSet.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-gray-400">-rw-r--r--</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
