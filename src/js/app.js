import { website, MyProfile, ShowDefaultImg} from '../../data/website.js'
import { Posts } from '../../data/post.js'

// ShowPosts

const ShowPosts = document.getElementById("ShowPosts")

// overly 
const overly = document.getElementById("overly")

// sidebars
const SidebarToggleBtn = document.getElementById("SidebarToggleBtn")
const sidebar = document.getElementById("sidebar")
const closeSidebar = document.getElementById("closeSidebar")
const body = document.body

const sidebarMainContent = document.getElementById("sidebarMainContent")


// header

const headerContentLi = document.getElementById("headerContentLi")
const LogoSee = document.querySelectorAll(".LogoSee")


// post view 
const postDetailsView = document.getElementById("postDetailsView")

// searchContainer
const searchContainer = document.querySelector(".searchContainer")
const SearchBtn = document.getElementById("SearchBtn")
const searchInput = document.getElementById("searchInput")
const searchPlaceholder = document.querySelector(".searchPlaceholder")
const EmptyPostMessage = document.querySelector(".EmptyPostMessage")


// theme 
const showThemeStatus = document.querySelector(".showThemeStatus")
const themeTogglerBtn = document.getElementById("themeTogglerBtn")
const btnCircle = document.querySelector(".btn-circle")
const root = document.documentElement;


// theme function
let theme = localStorage.getItem("theme") || "dark"

Theme(theme)

themeTogglerBtn.addEventListener("click", (e) => {
    let themeData = root.getAttribute("data-theme")
    if (themeData === "dark"){
        Theme("light")
    } else {
       Theme("dark") 
    }
})


function Theme(getTheme){
    root.setAttribute("data-theme", getTheme)
    localStorage.setItem("theme", getTheme)

    if (getTheme === 'light'){
        btnCircle.classList.add("on")
        themeTogglerBtn.classList.add('on')
    } else {
        btnCircle.classList.remove("on")
        themeTogglerBtn.classList.remove("on")
    }

    showThemeStatus.innerHTML = getTheme
}




// sidebar 
function SidebarToggle(status){
    if (status === "add"){
        sidebar.classList.add("open")
        Overly(true)
        body.classList.add("closeSidebar")  
        return
    } else if (status === "remove"){
        sidebar.classList.remove("open")
        Overly(false)
        body.classList.remove("closeSidebar")
        return
    }


    sidebar.classList.toggle("open")
    if (sidebar.classList.contains("open")){
        Overly(true)
        body.classList.add("closeSidebar")
    } else {
        Overly(false)
        body.classList.remove("closeSidebar")
    } 
}
SidebarToggleBtn.addEventListener("click", () => {
    SidebarToggle()
})

function Overly(status){
    if (status === true){
        overly.classList.add("active")
    } else if (status === false){
        overly.classList.remove("active")
    } else {
        overly.classList.toggle("active")
    }
}
overly.addEventListener("click", () => {
    SidebarToggle("remove")
    Overly(false)
})

closeSidebar.addEventListener("click", () => {
  SidebarToggle()
})

// sidebar and header data 
sidebarMainContent.innerHTML = ""
website.sidebar.sidebarLinks.forEach((item, index) => {
    let createLinkContainer = document.createElement("li")
    createLinkContainer.innerHTML = `
    <div class="wraper">
                        <${item.overWrite.length > 0 ? "button" : item.link ?  `a href="${item.link}" ${item.target ? `target="${item.target}"` : ""}` : "button"} class="item-btn">
                            <span class="link-content">
                                <span class="link-con-n">${item.icon} ${item.content}</span>
                                <span class="status ${item.status}">${item.status}</span>
                            </span>
                            ${item.overWrite.length < 1 ? "" : `<span class="arrow-icon"><i class="fa-solid fa-angle-down"></i></span>`}
                        </${item.overWrite.length > 0 ? "button" : item.link ? "a" : "button"}>
                        ${
                            item.overWrite.length < 1 ? "" :
                             `<div class="s-other-content">
                            <ul class="oth-content">
                                                
                            </ul>
                        </div>`

                        }
                    </div>`
    sidebarMainContent.appendChild(createLinkContainer)

    if (item.overWrite.length > 0){
        const othContentA = createLinkContainer.querySelector(".oth-content")
        othContentA.innerHTML = ""

        item.overWrite.forEach((ovItemA, indexA) => {
            let createOverWriteA = document.createElement("li");
            createOverWriteA.innerHTML = `
                                    <li>
                                        <div class="oth-wraper">
                                            <${ovItemA.overWrite.length > 0 ? "button" : ovItemA.link ? `a href="${ovItemA.link}" ${ovItemA.target ? `target="${ovItemA.target}"` : ""}` : "button"}  data-element-length="${ovItemA.overWrite.length}"class="oth-item-btn">
                                                <span class="oth-link-content">
                                                    <span class="oth-link-con-n conMain ${ovItemA.overWrite.length < 1 ? "link" : ""}">${ovItemA.content}</span>
                                                    <span class="statusCir ${ovItemA.status}"></span>
                                                </span>
                                                <span class="arrow-icon"></span>
                                            </${ovItemA.overWrite.length > 0 ? "button" : ovItemA.link ? "a" : "button"}>
                                            ${
                                                ovItemA.overWrite.length < 1 ? "" :
                                                 `<div class="oth-s-other-content">
                                                <ul class="oth-content">
                                                </ul>
                                            </div>`
                                            }
                                        </div>
                                    </li>`

           othContentA.appendChild(createOverWriteA)


           if (ovItemA.overWrite.length > 0){
             const othContent = createOverWriteA.querySelector(".oth-content")

             ovItemA.overWrite.forEach((ovItemB, indexB) => {
                let createOverWriteB = document.createElement("li")
                createOverWriteB.innerHTML =  
                 `
                                                    <li>
                                                        <${ovItemB.link === "" ? "button" : "a"} ${ovItemB.link === "" ? "" : `href=${ovItemB.link}`} class="oth-item-btn">
                                                            <span class="oth-link-content">
                                                                <span class="oth-link-con-n">${ovItemB.content}</span>
                                                                <span class="statusCir ${ovItemB.status}"></span>
                                                            </span>
                                                            
                                                        </${ovItemB.link ? "a" : "button"}>                                                        
                                                    </li>
                        
            `
             othContent.appendChild(createOverWriteB)
             })
           }




          if (item.overWrite.length > 0){
            const itemBtn = createLinkContainer.querySelector(".item-btn")
            const sOtherContent = createLinkContainer.querySelector(".s-other-content")
            const itemBtnArrowIcon = itemBtn.querySelector(".arrow-icon")
            

          } 


        })
    }
})


SidebarItemsSets()
function SidebarItemsSets(){
        const sOtherContent = document.querySelectorAll(".s-other-content")
        if (!sOtherContent.length) return
    sOtherContent.forEach((content, index) => {
        content.style.height = content.scrollHeight + 'px'
    })
    
}
SidebarItemSetsT()
function SidebarItemSetsT(){
    const othsOtherContent = document.querySelectorAll(".oth-s-other-content")
    if (!othsOtherContent.length) return

    othsOtherContent.forEach((itemOth, index) => {
        itemOth.height = itemOth.scrollHeight + 'px'

    })

}
let savedBtnStatus = localStorage.getItem("savedBtnStatus")

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".item-btn")
    if (btn){
        const sOtherContent = btn.nextElementSibling
        if (!sOtherContent) return
        const btnicon = btn.querySelector(".arrow-icon")
        sOtherContent.classList.toggle("height0A")
        btnicon.classList.toggle("rotateY0")
    }
    const otIitemBtn = e.target.closest(".oth-item-btn")
    if (otIitemBtn){
        const othSOtherContent = otIitemBtn.nextElementSibling
        const elementLength = otIitemBtn.dataset.elementLength
        if (elementLength < 1) return
        othSOtherContent.classList.toggle("height0A")
        const sOtherContent = document.querySelectorAll(".s-other-content")
        if (!sOtherContent.length) return
        sOtherContent.forEach((item, index) => {
            item.style.height =  "max-content"
        })

        SidebarItemsSets()
    }
    
    
})

function othContentCus(){
    // const oth-s-other-content
}
let headerLinkFilter = website.sidebar.sidebarLinks.filter(items => items.link !== "")
let headerlinks = headerLinkFilter.length <= 2 ? website.sidebar.sidebarLinks : headerLinkFilter

headerContentLi.innerHTML = ""
headerlinks.forEach((item, index) =>{
    if (website.header.linkHidden.includes(item.content.toLowerCase())) return
    if (index >= (website.header.linkShowLength + 1)) return
    let createHeadLi = document.createElement("li")
    createHeadLi.innerHTML = `<a href="${item.link}" target="${item.target}">${item.content}</a>`
    headerContentLi.appendChild(createHeadLi)
})

// header left

function Header(){
    LogoSee.forEach(l => {
        l.innerHTML = website.header.headerLeft.logoName
    })
}
Header()


let postClickMemory = JSON.parse(localStorage.getItem("postClickMemory")) || null;
let postClicked = localStorage.getItem("postClicked") || ""
let randomImgLen = Number(localStorage.getItem("randomImgLen")) || 0


// Show posts 
let postsDataShow = Posts.AllPost

function ShowPost(posts){
    ShowPosts.innerHTML = ""
    posts.forEach((post, index) => {
        let randomDefaultImg = Math.floor(Math.random() * ShowDefaultImg.length)
        let createPost = document.createElement("div");
        createPost.className = "post"
        createPost.innerHTML = `
                            <div class="post-header">
                                <div class="profile-pic">
                                    <div class="profile-cover">
                                        <img src="/imgs/${MyProfile.profile_img}" alt="">
                                    </div>
                                    <span class="PostUserName">${MyProfile.name.toUpperCase().slice(0, 1) + MyProfile.name.toLowerCase().slice(1)}</span>
                                </div>
                                <div class="right-side-content">
                                    <div class="link">
                                        ${(post.links.filter(link => link.link !=="").length > 0 || post.link) ? `<a href="${post.link ? post.link : post.links[0].link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
                                    </div>
                                    <div class="readBtns">
                                        <a href="https://www.google.com/search?q=${encodeURIComponent(post.title)}" target="_blank"><i class="fa-brands fa-google"></i></a>
                                        <button><i class="fa-solid fa-book-open"></i>Read</button>
                                    </div>
                                </div>
                            </div>
                            <div class="post-main">
                                <div class="post-img">
                                    <div class="post-img-cover">
                                        <img src="/imgs/${post.image ? "post_imgs/" + post.image : `default_img/${ShowDefaultImg[randomDefaultImg]}`}" alt="">
                                    </div>
                                </div>
                                <div class="post-details">
                                    <div class="post-title">${post.title}</div>
                                    <div class="border-h1"></div>
                                    <div class="post-blog">
                                        <button>blogs <i class="fa-solid fa-sort-down"></i></button>
                                        <div class="blog-text">
                                            ${post.blog.length > 200 ? post.blog.slice(0, 200) + "<span class='moreSi'>...more</span>" : post.blog}
                                        </div>
                                    </div>
                                    <div class="post-foot">
                                        <div class="post-hash-tags">
                                            <span class="hashTag">#hello</span>
                                            <span class="hashTag">#world</span>
                                        </div>
                                        <div class="linksShow">

                                        </div>
                                    </div>
                                </div>
                            </div>`
        ShowPosts.appendChild(createPost)

        createPost.addEventListener("click", (e) => {
            if (!e.target.closest(".profile-pic") && !e.target.closest(".right-side-content") && !e.target.closest(".linksShow")){
                PostDetailsViewFunc(post, randomDefaultImg)
                postClickMemory = post
                
            }
        })



        const linksShow = createPost.querySelector(".linksShow")
        post.links.filter(link => link !== "").forEach((link, index)=> {
            let createLink = document.createElement("a")
            let createborder = document.createElement("div")

            createLink.href = link.link
            createLink.target = link.target
            createLink.innerHTML = `${link.name ? link.name.length > 17 ? link.name.slice(0, 16) + "..." : link.name : link.link.length > 17 ? link.link.slice(0, 16) + '...' : link.link} <i class="fa-solid fa-arrow-up-right-from-square"></i>`
            
            // border create 
            createborder.className = 'border-h1-m'
            
            linksShow.appendChild(createLink)
            
            if ((post.links.filter(link => link !== "").length - 1) !== index) linksShow.appendChild(createborder)
        })
    })
}
console.log(4 % 2 )

if (Object.entries(postClickMemory).length > 1) {
    PostDetailsViewFunc(postClickMemory, randomImgLen)
}



function PostDetailsViewFunc(post, randomDefaultImg){
    if (!post) return
    postClickMemory = post
    SavedMem1(postClickMemory)
    localStorage.setItem("randomImgLen", randomDefaultImg)
    localStorage.setItem("clicked", "add")
    postDetailsView.innerHTML = `
                            <div class="postDetailsheader">
                                <div class="postDetailsViewHead">
                                <div class="left-side-head-post">
                                    View details
                                </div>
                                <button id="HideViewDetailsbtn">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                            <div class="postImgs">
                                <div class="imgHead">
                                    <button id="HidepostDetailsViewBtn2">
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                    <div class="right-head">
                                        <button id="ToggleHideShowImg"><i class="fa-solid fa-chevron-left"></i></button>
                                    </div>
                                </div>
                                 <img src="/imgs/${post.image ? "post_imgs/" + post.image : `default_img/${ShowDefaultImg[randomDefaultImg]}`}" alt="">
                                 <div class="post_customize">
                                    <div clss="post_customize_wraper">
                                        <div class="font_cus">
                                            <div class="fontFamily_cus">
                                                <button class="changeFont"><i class="fa-solid fa-text-width"></i></button>
                                                <div class="font_family_menu hideAnimate0">
                                                    <div class="font-menu-main">
                                                        <button data-font="default">Default font</button>
                                                        <div class="border-h1-w90"></div>
                                                        <button data-font="Outfit">Outfit</button>
                                                        <div class="border-h1-w90"></div>
                                                        <button data-font="Arial">Arial</button>
                                                        <div class="border-h1-w90"></div>
                                                        <button data-font="Quicksand">Quicksand</button>
                                                        <div class="border-h1-w90"></div>
                                                        <button data-font="DM_Sans">DM Sans</button>
                                                        <div class="border-h1-w90"></div>
                                                        <button data-font="Montserrat">Montserrat</button>
                                                        <div class="border-h1-w90"></div>
                                                        <button data-font="Josefin_Sans">Josefin Sans</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="font_customize_size">
                                                <button id="decrease">
                                                    <i class="fa-solid fa-minus"></i>
                                                </button>
                                                <input type="text" placeholder="size" id="sizeInput">
                                                <button id="increase">
                                                    <i class="fa-solid fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </div>
                        <div class="viewPostDetailsMain">
                            <div class="viewPostDetailsAll">
                                <div class="postTitle">${post.title}</div>
                                <div class="postblogs">
                                    ${post.blog}
                                </div>
                            </div>
                            <div class="postOth">
                                <div class="links">
                                    <ul class="ShowLinksData">

                                    </ul>
                                </div>
                                <div class="postViewfooter">
                                    <div class="postViewLeft">
                                        <div class="postViewImgCover">
                                            <img src="/imgs/${MyProfile.profile_img}" alt="">
                                        </div>
                                        <span>${MyProfile.name}</span>
                                    </div>
                                    <div class="postViewRight"></div>
                                </div>
                            </div>
                        </div>`

// post viewer 

if (!postDetailsView.innerHTML) return

const postImgs = document.querySelector(".postImgs")
const postDetailsheader = document.querySelector(".postDetailsheader")
const viewPostDetailsMain = document.querySelector(".viewPostDetailsMain")
const ToggleHideShowImg = document.getElementById("ToggleHideShowImg")
const HideViewDetailsbtn = document.getElementById("HideViewDetailsbtn")
const HidepostDetailsViewBtn2 = document.getElementById("HidepostDetailsViewBtn2")
const ShowLinksData = postDetailsView.querySelector(".ShowLinksData")
const font_family_menu = document.querySelector(".font_family_menu")
const changeFont = document.querySelector(".changeFont")
const postTitle = document.querySelector(".postTitle")
const postblogs = document.querySelector(".postblogs")

const decrease = document.getElementById("decrease")
const increase = document.getElementById("increase")
const sizeInput = document.getElementById("sizeInput")
const fontMenuMainBtns = document.querySelectorAll(".font-menu-main button")



let savedFontFamily = localStorage.getItem("savedFontFamily") || "Outfit"


ShowLinksData.innerHTML = ""
post.links.filter(link => link.link !== "").forEach((pLink, index) => {
    let createLink = document.createElement("li")
    createLink.innerHTML = `<span class="LinkindexShow">${index + 1}.</span> <a href="${pLink.link}" target="${pLink.target ? pLink.target : "_blank"}">${pLink.name ? pLink.name.length > 20 ? pLink.name.slice(0, 20) + "..." : pLink.name : pLink.link.length > 23 ? pLink.link.slice(0, 20) + "..." : pLink.link}</a>`
    ShowLinksData.appendChild(createLink)
})

// ToggleHideShowImg
function ToggleHideShowImgFunc(){
    postImgs.classList.toggle("close")
    postDetailsheader.classList.toggle("close")
    viewPostDetailsMain.classList.toggle("isclose")
}
ToggleHideShowImg.addEventListener("click", () => {
    ToggleHideShowImgFunc()
})

PostDetailsViewIs(postClicked)


function PostDetailsViewIs(status){
    if (status === "add"){
        postDetailsView.classList.remove("HideAnimateScale0")
    } else if (status === "remove"){
        postDetailsView.classList.add("HideAnimateScale0")
        localStorage.setItem("clicked", "remove")
        postClickMemory = []
        SavedMem1(postClickMemory)

    } else {
        postDetailsView.classList.toggle("HideAnimateScale0")
    }
}

HideViewDetailsbtn.addEventListener("click", () => {
    PostDetailsViewIs("remove")
})
HidepostDetailsViewBtn2.addEventListener("click", () => {
    PostDetailsViewIs("remove")
})

PostDetailsViewIs("add")

function ChangeFontFamily(status){
    if (status === "add"){
       font_family_menu.classList.remove("hideAnimate0") 
       return
    } else if (status === "remove") {
        font_family_menu.classList.add("hideAnimate0") 
        return
    }
    font_family_menu.classList.toggle("hideAnimate0")
    
}

changeFont.addEventListener("click", () => {
    ChangeFontFamily()
})
document.addEventListener("click", (e) => {
    if (!e.target.closest(".font_family_menu") && !e.target.closest(".changeFont")){
        ChangeFontFamily("remove")
    }
})
    let count = Number(localStorage.getItem("countSize")) || 0;


    InputSize(count)
    function Increase(){
        count++
        if (count > 25) count = 25
    }
    function Decrease(){
        count--
        if (count < 0) count = 0
    }
    function InputSize(countX){
        localStorage.setItem("countSize", countX)
        let sizePx = countX + "px"
        sizeInput.value = sizePx
        postTitle.style.fontSize = `calc(1.8rem + ${sizePx})`
        postblogs.style.fontSize = `calc(1rem + ${sizePx})`
    }
    decrease.addEventListener("click", () => {
        Decrease()
        InputSize(count)
    })
    increase.addEventListener("click", () => {
        Increase()
        InputSize(count)
    })
    sizeInput.addEventListener("input", () => {
        let inputX = sizeInput.value

        if (isNaN(inputX)) return
        if (Number(inputX) > 30) return
         sizeInput.value = inputX
         count = Number(inputX)
    })
    fontMenuMainBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
           let addClass = btn.dataset.font
            fontMenuMainBtns.forEach(b => {
                postDetailsView.classList.remove(b.dataset.font)
            })
            FontFamily(addClass)
            console.log(addClass)
        })
    })


    FontFamily(savedFontFamily)
    function FontFamily(family){
        localStorage.setItem("savedFontFamily", family)
        postDetailsView.classList.add(family)
        fontMenuMainBtns.forEach(b => {b.classList.remove("active")})
        fontMenuMainBtns.forEach(b => {
            if (b.dataset.font === family){
                b.classList.add("active")
            }
        })
    }
    
}

function SavedMem1(postClickMemo){
    localStorage.setItem("postClickMemory", JSON.stringify(postClickMemo))
}



function Search(){
    searchContainer.classList.toggle("hideAnimate0")
}
SearchBtn.addEventListener("click", () => {
    Search()
})
searchInput.addEventListener("input", (e) => {
    let searchData = searchInput.value.trim().toLowerCase()
    if (searchData.length > 0){
        searchPlaceholder.style.display = "none"
    } else {
        searchPlaceholder.style.display = "flex"
    }
    
    postsDataShow = Posts.AllPost.filter(p => p.title.toLowerCase().includes(searchData) || p.blog.toLowerCase().includes(searchData) || p.link.toLowerCase().includes(searchData))
    ShowPost(postsDataShow)
    if (postsDataShow.length > 0){
        EmptyPostMessage.classList.add("hideAnimate0")
    } else {
        EmptyPostMessage.classList.remove("hideAnimate0")
        EmptyPostMessage.querySelector(".changeEmptyWord").innerHTML = '"' + searchData + '"'
    }
    console.log(postsDataShow)
})

ShowPost(postsDataShow)


window.addEventListener("load", () => {
    searchInput.value = ""
})