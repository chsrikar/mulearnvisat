// Leadership — shown in AnimatedTestimonials
export const leadership = [
    {
        id: 1,
        name: "Alex Benny",
        role: "Campus Lead",
        image: "/images/member1.png",
        bio: "Leading μLearn VISAT has been an incredible journey. Together, we're building a community where every student can discover their true potential and grow without limitations.",
    },
    {
        id: 2,
        name: "Chinthapenta Srikar",
        role: "Co-Lead",
        image: "/images/member2.png",
        bio: "At μLearn, we believe learning goes beyond classrooms. I'm passionate about creating an ecosystem where students collaborate, innovate, and support each other's growth.",
    },
    {
        id: 3,
        name: "Devika Baiju",
        role: "Creative & Marketing Lead",
        image: "/images/member3.png",
        bio: "Creativity is the bridge between ideas and impact. I love crafting stories and campaigns that showcase the amazing things our community builds every day.",
    },
]

// Core Committees — shown in grouped grid cards
export const committees = [
    {
        name: "Tech Committee",
        color: "primary",
        members: [
            { id: 4, name: "Albin Saju", image: "/images/member4.png" },
            { id: 5, name: "Anashwara", image: "/images/member5.png" },
            { id: 6, name: "Amal", image: "/images/member1.png" },
        ],
    },
    {
        name: "Media Committee",
        color: "accent",
        members: [
            { id: 7, name: "Anand M S", image: "/images/member2.png" },
            { id: 8, name: "Pratham", image: "/images/member3.png" },
        ],
    },
    {
        name: "Design Committee",
        color: "emerald",
        members: [
            { id: 9, name: "Elna", image: "/images/member4.png" },
            { id: 10, name: "Aryanandana", image: "/images/member5.png" },
            { id: 11, name: "Gagan", image: "/images/member1.png" },
            { id: 12, name: "Anjana", image: "/images/member2.png" },
        ],
    },
    {
        name: "Outreach Committee",
        color: "amber",
        members: [
            { id: 13, name: "Albin Jose", image: "/images/member3.png" },
            { id: 14, name: "Abhinand", image: "/images/member4.png" },
            { id: 15, name: "Tadrupa", image: "/images/member5.png" },
        ],
    },
]

// Interest Group Leads — shown in IG Leads section
export const igLeads = [
    { id: 16, name: "Alex Benny", role: "IoT", image: "/images/member1.png" },
    { id: 17, name: "Pratham", role: "Web Development", image: "/images/member3.png" },
    { id: 18, name: "Elna", role: "UI/UX", image: "/images/member4.png" },
    { id: 19, name: "Albin Jose", role: "Non-Circuit", image: "/images/member3.png" },
    { id: 20, name: "Rifa", role: "Innovation & Entrepreneurship", image: "/images/member2.png" },
    { id: 21, name: "Devika Baiju", role: "Comics", image: "/images/member3.png" },
    { id: 22, name: "Srikar", role: "AI & ML", image: "/images/member2.png" },
]

// Backward-compatible default export
export const committee = leadership
