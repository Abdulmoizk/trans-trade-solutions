import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Our Team | Trans Trade Solutions",
  description: "Explore career opportunities at Trans Trade Solutions. We offer positions in logistics, supply chain, documentation, customer service, and more. Join our Trainee Development Program for fresh graduates.",
  keywords: "logistics careers, freight forwarding jobs, supply chain careers, Pakistan logistics jobs, trainee development program, career opportunities",
  openGraph: {
    title: "Careers - Trans Trade Solutions",
    description: "Join our team and grow your career in logistics and supply chain management",
    type: "website",
  },
};

export default function CareersPage() {
    const benefits = [
        {
            title: "Work Environment",
            description: "At Trans Trade Solutions, we offer our employees a vibrant, diverse, and friendly work environment where professional growth and career advancement are our top priorities. The expertise of our teams is at the heart of our success."
        },
        {
            title: "Culture",
            description: "We foster a workplace where management values input, celebrates events, welcomes newcomers, and creates a fun, collaborative atmosphere. We care about each individual and their well-being."
        },
        {
            title: "Learning & Development",
            description: "We prioritize the growth and success of our employees. Our commitment to ongoing learning and development helps foster a culture that esteems expertise and promotes innovation."
        },
        {
            title: "Diversity & Inclusion",
            description: "We embrace diversity and inclusion, fostering a culture where every voice is heard and every perspective is respected. Our commitment is to create a workplace that reflects a variety of backgrounds and experiences."
        },
        {
            title: "Compensation & Benefits",
            description: "We offer a fair and transparent compensation structure that aligns with your role and performance. Your compensation package will reflect your responsibilities, the effectiveness with which you fulfill them, and the value you bring to the company."
        },
        {
            title: "Job Openings",
            description: "Trans Trade Solutions offers diverse career opportunities across various levels in logistics and international freight forwarding. We have openings in Supply Chain, Documentation, Consolidation, Customer Services, and more. Our Trainee Development Program trains fresh graduates to become logistics experts."
        }
    ];

    return (
        <div className="overflow-x-hidden bg-white">
            {/* Modern Hero Section */}
            <section className="relative w-full mt-[120px] sm:mt-[128px] min-h-[60vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20">
                            <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">Careers</span>
                        </div>
                        
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-none tracking-tight">
                            Join Trans Trade
                            <span className="block text-[#ED2228] mt-2">Solutions</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            At Trans Trade Solutions, your contribution truly makes a difference. Explore exciting career opportunities with us and help shape the future of logistics and international freight forwarding.
                        </p>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#ED2228]/5 rounded-full blur-3xl"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20">
                            <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">Impact</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                            Your Contribution
                            <span className="block text-[#ED2228]">Makes a Difference</span>
                        </h2>
                        
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            Trans Trade Solutions has been a leader in the logistics industry for many years. We consistently strive to conduct our business ethically and recognize that our products and services have a positive impact on society and the global market.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ED2228]/5 rounded-full blur-3xl"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-block px-4 py-2 bg-[#ED2228]/10 rounded-full border border-[#ED2228]/20 mb-6">
                            <span className="text-sm font-semibold text-[#ED2228] uppercase tracking-wider">Why Work With Us</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                            Why Work with
                            <span className="block text-[#ED2228]">Trans Trade Solutions?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div 
                                key={index}
                                className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#ED2228] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <h3 className="text-2xl font-black text-[#ED2228] mb-4">{benefit.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative w-full min-h-[500px] bg-gradient-to-br from-[#ED2228] to-[#c01f2e] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/careerbg.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-24 min-h-[500px]">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                            <span className="text-sm font-semibold text-white uppercase tracking-wider">Join Us</span>
                        </div>
                        
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                            Ready to Make a Difference?
                        </h2>
                        
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                            If you have the skills and passion to join our team, we&apos;d love to hear from you.
                        </p>
                        
                        <a
                            href="mailto:hr@transtrade.pk"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#ED2228] text-lg font-black rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 mt-4"
                        >
                            Submit Your Resume
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
