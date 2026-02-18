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
                target: "", icon: `<i class="fa-solid fa-tent"></i>`,
                status: "",
                overWrite: []
            },
            {
                content: "Posts",
                class: "posts",
                link: "", target: "", 
                icon: `<i class="fa-solid fa-blog"></i>`, 
                status: "new", 
                overWrite: [
                    // {
                    //     content: "Readed posts", class: "read", link: "m", target: "", icon: ``, status: "",
                    //     overWrite: [
                    //         { content: "post child ", class: "post child", link: `https://chatgpt.com/c/6993155c-d030-8323-9dec-628c73350dc8`, target: "", icon: ``, status: "updated",overWrite: [] },
                    //         { content: "post child ", class: "post child", link: `https://chatgpt.com/c/6993155c-d030-8323-9dec-628c73350dc8`, target: "", icon: ``, status: "updated",overWrite: [] },
                    //     ]

                    // },
                    // {
                    //     content: "Readed posts", class: "read", link: "", target: "", icon: ``, status: "",
                    //     overWrite: [
                    //         { content: "post child ", class: "post child", link: `https://chatgpt.com/c/6993155c-d030-8323-9dec-628c73350dc8`, target: "", icon: ``, status: "updated",overWrite: [] },
                    //         { content: "post child ", class: "post child", link: `https://chatgpt.com/c/6993155c-d030-8323-9dec-628c73350dc8`, target: "", icon: ``, status: "updated",overWrite: [] },
                    //     ]

                    // },
                ]
            },
            {
                content: "Reading", class: "", link: "", target: "", icon: `<i class="fa-solid fa-comment"></i>`, status: "",
                overWrite: [
                    {content: "Elonmask speech", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                ]
            },
            {content: "Social media's", class: "", link: "", target: "", icon: `<i class="fa-solid fa-circle-stop"></i>`, status: "", overWrite: []},
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
                        content: "Google", class: "", link: "https://w.wiki/48J6", target: "", icon: ``, status: "new", overWrite: []

                    }
                ]
            },
            ]
            },
            {content: "Learning", class: "", link: "", target: "", icon: `<i class="fa-solid fa-graduation-cap"></i>`, status: "", overWrite: []},
            {content: "Computer science", class: "", link: "", target: "", icon: `<i class="fa-solid fa-laptop-code"></i>`, status: "", overWrite: []},
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
            
        ]
    }
}
const MyProfile = {
    profile_img: "profile.png",
    name: "tuhin",
    email: "",

}
export {website, MyProfile}




const ShowDefaultImg = [
    "im1.png", "im2.png", "im3.png", "im4.png", "im5.png",
     "im6.png", "im7.png", "im8.png", "im9.png"
]
export {ShowDefaultImg}