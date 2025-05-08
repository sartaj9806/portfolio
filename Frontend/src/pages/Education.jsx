import React from 'react';

const Education = () => {
    return (
        <section  id="education" className="px-4 lg:px-[10vw] py-[68px] bg-zinc-900 text-white">
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-500">Education</h2>

            <div className="space-y-8">
                {/* BCA Degree */}
                <div className="bg-zinc-800 p-6 rounded-md shadow-lg border-l-4 border-purple-500">
                    <h3 className="text-2xl font-semibold text-purple-400">Bachelor of Computer Applications (BCA)</h3>
                    <p className="text-gray-300 mt-1">Indira Gandhi National Open University (IGNOU)</p>
                    <p className="text-gray-400 text-sm mt-1 italic">Open and Distance Learning Mode</p>
                    <p className="text-gray-400 text-sm mt-2">Expected Graduation: 2026</p>
                </div>

                {/* YouTube/Online Learning */}
                <div className="bg-zinc-800 p-6 rounded-md shadow-lg border-l-4 border-purple-500">
                    <h3 className="text-2xl font-semibold text-purple-400">Self-Taught Developer</h3>
                    <p className="text-gray-300 mt-1">Completed multiple practical projects and tutorials from YouTube and other platforms (MERN stack, C++, etc.)</p>
                    <p className="text-gray-400 text-sm mt-2 italic">No formal certificates, but strong hands-on experience</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
