// ====================== Sublinks for Find AI ==========================
const SubLinks1 = [
    {
        id: 1,
        head: "Rule-Based Agents",
        headers: "AI Marketplace",
        subhead: {
            name: "AI Marketplace",
            des: "Learn about working with AI or explore your spacific needs.",
            subheadlink: { name: " on AI Marketplace", link: "/AI-marketplace" }
        },
                
        sublink: [
            { id: 1, linktext: "", link: "" },
            { id: 2, linktext: "", link: "" },
            { id: 3, linktext: "", link: "" },
            { id: 4, linktext: "", link: "" },
            { id: 5, linktext: "", link: "" },
            { id: 7, linktext: "", link: "" },
            { id: 8, linktext: "", link: "" },
            { id: 9, linktext: "", link: "" },
            { id: 10, linktext: "", link: "" },
            { id: 6, linktext: " ", link: "" },
        ]
    },

    {
        id: 2,
        head: "Privacy concerns",
        headers: "AI heist",
        subhead: {
            name: "project catlog",
            des: "Privacy concerns that have a clear scope and price.",
            subheadlink: { name: "Browse Project Catlog", link: "/services"}
        },

        sublink: [
            { 
                id: 1,
                linktext: "", 
                link: "/services/logo-design", 
                img: "/images/logo-design.png" 
            },
            { 
                id: 2,
                linktext: "Articles & Blog Posts",
                link: "/services/articles-blog-posts", 
                img: "/images/blog.png" 
            },
            { 
                id: 3,
                linktext: "Wordpress",
                link: "/services/wordpress", 
                img: "/images/wordpress.png" 
            },
            { 
                id: 4,
                linktext: "Social Media Marketing", 
                link: "/services/social-media-management", 
                img: "/images/social-marketing.png" 
            },
            { 
                id: 5,
                linktext: "Video Editing",
                link: "/services/video-editing",
                img: "/images/video-editing.png" 
            },
            { 
                id: 6,
                linktext: "Seo",
                link: "/services/seo",
                img: "/images/seo.png" 
            },
        ]
    },
    {
        id: 3,
        head: "Let us find you the right  AI",
        headers: "AI Scout",
        subhead: {
            name: "AI Scout",
            des: "Learn how our recruiters find you expert developers, designers, and marketers.",
            subheadlink: { name: "Talk to AI Scout", link: "/staffing" }
        },
                
        sublink: [
            { id: 1, linktext: "Development & IT", link: "/staffing/development" },
            { id: 2, linktext: "Design & Creative", link: "/staffing/design-creative" },
            { id: 3, linktext: "Marketing", link: "/staffing/marketing" },
        ]
    },
];

// ====================== Sublinks for Find Jobs ==========================
const SubLinks2 = [
    {
        id: 1,
        name: "Latest AI's",
        des: "",
        link: "/jobs/todays-jobs"
    },

    {
        id: 2,
        name: "AI matching to your skill", 
        des: "",
        link: ""
    }
];

// ====================== Sublinks for Why Brenda ==========================
const SubLinks3 = [
    {
        id: 1,
        name: "Chat-gpt",
        des: "Interactions across a wide range of topics.",
        link: "https://openai.com/index/chatgpt/"
    },
    { 
        id: 2,
        name: "Gemini",
        des: "A conversational AI by Google DeepMind",
        link: "https://gemini.google.com/app?hl=en-IN-"
    },
    { 
        id: 3,
        name: "Claude AI",
        des: "An AI chatbot by Anthropic",
        link: "https://claude.ai/new"
    },
    { 
        id: 4,
        name: "Co-Pilot", 
        des: "An AI coding assistant by GitHub",
        link: "https://copilot.microsoft.com/chats/s1dWGt35TkYPEhgD21Yvz"
    }
];

export {SubLinks1, SubLinks2, SubLinks3};