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
                    {
                        content: "Readed posts", class: "read", link: "m", target: "", icon: ``, status: "",
                        overWrite: [
                            { content: "post child ", class: "post child", link: `https://chatgpt.com/c/6993155c-d030-8323-9dec-628c73350dc8`, target: "", icon: ``, status: "updated",overWrite: [] },
                            { content: "post child ", class: "post child", link: `https://chatgpt.com/c/6993155c-d030-8323-9dec-628c73350dc8`, target: "", icon: ``, status: "updated",overWrite: [] },
                        ]

                    },
                    {
                        content: "Readed posts", class: "read", link: "", target: "", icon: ``, status: "",
                        overWrite: [
                            { content: "post child ", class: "post child", link: `https://chatgpt.com/c/6993155c-d030-8323-9dec-628c73350dc8`, target: "", icon: ``, status: "updated",overWrite: [] },
                            { content: "post child ", class: "post child", link: `https://chatgpt.com/c/6993155c-d030-8323-9dec-628c73350dc8`, target: "", icon: ``, status: "updated",overWrite: [] },
                        ]

                    },
                ]
            },
            {
                content: "Reading", class: "reality", link: "", target: "", icon: `<i class="fa-solid fa-comment"></i>`, status: "",
                overWrite: [
                    {content: "Elonmask speech", class: "", link: "", target: "", icon: ``, status: "", overWrite: []},
                ]
            },
            {content: "Social media's", class: "reality", link: "", target: "", icon: `<i class="fa-solid fa-circle-stop"></i>`, status: "", overWrite: []},
            
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