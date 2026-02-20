const website = {
    header:{
        headerLinks: [
            {content: "", link: "", target: "", icon: "", status: "", overWrite: []}
        ],
        headerLeft: {
            logo: "",
            img: "",
            icon: `<i class="fa-solid fa-chart-pie"></i>`,
            link: "",
            logoName: "W",
        },
        linkHidden: ["home", ""],
        linkShowLength: 5,
    },
    sidebar: {
        sidebarLinks: [
            {
                content: "Home",
                class: "home", link: "index.html",
                target: "_self", icon: `<i class="fa-solid fa-tent"></i>`,
                status: "",
                overWrite: []
            },
            {content: "Blogs", class: "", link: "", target: "", icon: `<i class="fa-solid fa-blog"></i>`, status: "", overWrite: []},
            {
                content: "Posts",
                class: "posts",
                link: "#posts", target: "_self", 
                icon: `<i class="fa-solid fa-tv"></i>`, 
                status: "new", 
                overWrite: []
            },
            {
                content: "Reading", class: "", link: "", target: "", icon: `<i class="fa-solid fa-comment"></i>`, status: "",
                overWrite: [
                    {content: "Elonmask speech", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                ]
            },

            {content: "Social media's", class: "", link: "#ShowChannels", target: "_self", icon: `<i class="fa-solid fa-circle-stop"></i>`, status: "", overWrite: []},
            {content: "Exarsice", class: "", link: "", target: "", icon: `<i class="fa-solid fa-person-biking"></i>`, status: "", overWrite: [
                {
                    content: "To be thin", class: "", link: "", target: "", icon: `<i class="fa-solid fa-person-biking"></i>`, status: "", overWrite: [
                        {
                            content: "7 Min 7 Planking Exercises To Make Belly Cry HARD 8 minutes, 26 seconds", class: "", link: "https://youtu.be/1t8xr7dmYTI?si=zTuFL9L-ALLZwJDr", target: "", icon: `<i class="fa-solid fa-person-biking"></i>`, status: "", overWrite: []
                        },
                        {
                            content: "30 Min FULL BODY WORKOUT with WARM UP | No Equipment & No Repeat | Rowan Row 32 minutes", class: "", link: "https://youtu.be/UIPvIYsjfpo?si=W7m8WYt4svnW6nq8", target: "", icon: `<i class="fa-solid fa-person-biking"></i>`, status: "", overWrite: []
                        },
                    ]
                },
                {
                    content: "Face Exarsice", class: "", link: "", target: "", icon: `<i class="fa-solid fa-person-biking"></i>`, status: "", overWrite: [
                        {
                            content: "How to Get a Defined Jawline Fast - Best Jawline Workout at Home", class: "", link: "https://youtu.be/eColilYJRPo?si=CTWP4tcD_luQvumO", target: "", icon: `<i class="fa-solid fa-person-biking"></i>`, status: "", overWrite: []
                        },
                        {
                            content: "How to Get A More Defined Jawline - In Only 5 Minutes! 5 minutes, 59 seconds", class: "", link: "https://youtu.be/3p5PDRtG93Y?si=2dK6zB7URtuqqJA0", target: "", icon: `<i class="fa-solid fa-person-biking"></i>`, status: "", overWrite: []
                        },
                    ]
                },
            ]},
            {content: "Importent videos", class: "", link: "", target: "", icon: `<i class="fa-solid fa-play"></i>`, status: "new", overWrite: []},
            {
            content: "Wikipedia importent links", class: "", link: "", target: "", icon: `<i class="fa-solid fa-globe"></i>`, status: "", 
            overWrite: [
                {content: "Story", class: "", link: "", target: "", icon: ``, status: "new",
                overWrite: [
                    {
                        content: "bn: Google", class: "", link: "https://w.wiki/48J6", target: "", icon: ``, status: "new", overWrite: [],
                       
                    },
                    {
                        content: "en: Google", class: "", link: "https://w.wiki/34Em", target: "", icon: ``, status: "new", overWrite: [],
                       
                    },
                    {
                        content: "en: Alphabet Inc", class: "", link: "https://w.wiki/3hp5", target: "", icon: ``, status: "new", overWrite: [],
                       
                    },
                    {
                        content: "bn: Alphabet Inc", class: "", link: "https://w.wiki/53w9", target: "", icon: ``, status: "new", overWrite: [],
                       
                    },
                    {
                         content: "bn: C Programming", class: "", link: "https://w.wiki/4zQP", target: "", icon: ``, status: "new", overWrite: [],
                    },
                    {
                         content: "en: C Programming", class: "", link: "https://w.wiki/8Ri", target: "", icon: ``, status: "new", overWrite: [],
                    }
                ]
            },
            ]
            },
            {content: "Learn Programming", class: "", link: "", target: "", icon: `<i class="fa-solid fa-code"></i>`, status: "", overWrite: [
                {content: "JavaScript", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "TypeScript", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "C Programming", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "C++", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Java", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Go", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Rust", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Kotlin", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Dart (Flutter)", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Erlang/Elixir", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "PHP", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "C#", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Swift", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Ruby", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Perl", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Scala", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Lua", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Bash", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "Terraform (HCL)", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                {content: "JavaScript", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
            ]},
            {content: "Computer science", class: "", link: "", target: "", icon: `<i class="fa-solid fa-laptop-code"></i>`, status: "", overWrite: []},
            {content: "Learning", class: "", link: "", target: "", icon: `<i class="fa-solid fa-graduation-cap"></i>`, status: "", overWrite: []},
            {content: "learn Technology", class: "", link: "", target: "", icon: `<i class="fa-solid fa-microchip"></i>`, status: "", overWrite: []},
            {content: "Notes", class: "", link: "", target: "", icon: `<i class="fa-solid fa-book-open"></i>`, status: "", overWrite: []},
            {content: "Prodcast's", class: "", link: "", target: "", icon: `<i class="fa-solid fa-podcast"></i>`, status: "", overWrite: []},
            {content: "Random Learn", class: "", link: "", target: "", icon: `<i class="fa-solid fa-shuffle"></i>`, status: "", overWrite: []},
            {content: "Tech blogs", class: "", link: "", target: "", icon: `<i class="fa-solid fa-robot"></i>`, status: "", overWrite: []},
            {content: "Best songs", class: "", link: "", target: "", icon: `<i class="fa-solid fa-music"></i>`, status: "", overWrite: []},
            {content: "My goals", class: "", link: "", target: "", icon: `<i class="fa-solid fa-bullseye"></i>`, status: "", overWrite: []},
            {content: "Brain practice's", class: "", link: "", target: "", icon: `<i class="fa-solid fa-code-merge"></i>`, status: "", overWrite: []},
            {content: "Math", class: "", link: "", target: "", icon: `<i class="fa-solid fa-square-root-variable"></i>`, status: "pro", overWrite: []},
            {content: "Learn Outside too", class: "", link: "", target: "", icon: `<i class="fa-solid fa-building-circle-arrow-right"></i>`, status: "old", overWrite: []},
            {content: "Learn Talk", class: "", link: "", target: "", icon: `<i class="fa-solid fa-square-poll-horizontal"></i>`, status: "", overWrite: []},
            {content: "Course's", class: "", link: "", target: "", icon: `<i class="fa-brands fa-youtube"></i>`, status: "", overWrite: []},
            {content: "Science", class: "", link: "", target: "", icon: `<i class="fa-solid fa-rocket"></i>`, status: "", overWrite: []},
            {content: "Solve MCQ", class: "", link: "", target: "", icon: `<i class="fa-solid fa-question"></i>`, status: "", overWrite: []},
            
        ]
    }
}
const MyProfile = {
    profile_img: "profile.png",
    name: "tuhin",
    email: "",

}

const ShowDefaultImg = [
    "im1.png", "im2.png", "im3.png", "im4.png", "im5.png",
     "im6.png", "im7.png", "im8.png", "im9.png"
]

const icons = [
    {
        platform: "youtube",
        icon: `<i class="fa-brands fa-youtube"></i>`
    },
    {
        platform: "facebook",
        icon: `<i class="fa-brands fa-facebook"></i>`
    },
    {
        platform: "twitter",
        icon: `<i class="fa-brands fa-twitter"></i>`
    },
    {
        platform: "linkedin",
        icon: `<i class="fa-brands fa-linkedin"></i>`
    },
    {
        platform: "github",
        icon: `<i class="fa-brands fa-github"></i>`
    },
    {
        platform: "instagram",
        icon: `<i class="fa-brands fa-instagram"></i>`
    },
    {
        platform: "twitch",
        icon: `<i class="fa-brands fa-twitch"></i>`
    },
    {
        platform: "discord",
        icon: `<i class="fa-brands fa-discord"></i>`
    },
    {
        platform: "reddit",
        icon: `<i class="fa-brands fa-reddit"></i>`
    },
    {
        platform: "stackoverflow",
        icon: `<i class="fa-brands fa-stack-overflow"></i>`
    },
    {
        platform: "medium",
        icon: `<i class="fa-brands fa-medium"></i>`
    },
    {
        platform: "devto",
        icon: `<i class="fa-brands fa-dev"></i>`
    },
    {
        platform: "hashnode",
        icon: `<i class="fa-solid fa-hashtag"></i>`
    },
]


export {ShowDefaultImg, icons, website, MyProfile}