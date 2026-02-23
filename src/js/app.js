import { website, MyProfile, ShowDefaultImg, icons} from '../../data/website.js'
import { Posts } from '../../data/post.js'
import {allYoutubeChannels, ChannelsTypes} from '../../data/data.js'
import {Blogs} from '../../data/blogs.js'
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
const searchInput = document.getElementById("searchInput")
const searchPlaceholder = document.querySelector(".searchPlaceholder")
const EmptyPostMessage = document.querySelector(".EmptyPostMessage")

// website

const ShowChanelTypes = document.getElementById("ShowChanelTypes")
const ShowAllChannelsOverly = document.getElementById("ShowAllChannelsOverly")
const CloseChannelsFolder = document.getElementById("CloseChannelsFolder")
const ShowAllChannelsFromData = document.getElementById("ShowAllChannelsFromData")
const inputgroup1 = document.querySelector(".inputgroup1")
const AddLinkBtn = document.getElementById("AddLinkBtn")
const CreateNewBtn = document.getElementById("CreateNewBtn")
const ShowAllLinksOverlyHead2 = document.querySelector(".ShowAllLinksOverlyHead2")
const InputLinks = document.querySelector(".InputLinks")
const RemoveAddLinkSec = document.getElementById("RemoveAddLinkSec")
const showBlogs = document.getElementById("showBlogs")
const HideBlogs = document.getElementById("HideBlogs")
const searchInputs = document.querySelector(".searchInputs")
const SearchInGoggle = document.getElementById("SearchInGoggle")
const ShowAllBlogsOverlyMain = document.getElementById("ShowAllBlogsOverlyMain")
const showAllBlogsOverly = document.getElementById("showAllBlogsOverly")
const ConfigBlogs = document.getElementById("ConfigBlogs")

// overlys
const ShowAllLinksFromData = document.getElementById("ShowAllLinksFromData")
const ShowAllLinksOverly = document.getElementById("ShowAllLinksOverly")

// links show section

const ShowChannelsBestVideosList = document.getElementById("ShowChannelsBestVideosList")
const CloseLinksFolder = document.getElementById("CloseLinksFolder")


// theme 
const showThemeStatus = document.querySelector(".showThemeStatus")
const themeTogglerBtn = document.getElementById("themeTogglerBtn")
const btnCircle = document.querySelector(".btn-circle")
const root = document.documentElement;

// ShowChannels
const ShowChannels = document.getElementById("ShowChannels")


// blogs 

const searchSuggest = document.getElementById("searchSuggest")
const SearchBlogInput = document.getElementById("SearchBlogInput")
const SearchBlogbtn = document.getElementById("SearchBlogbtn")
const searchBlogPlaceholder = document.querySelector(".searchplaceholder")

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
                        <${item.overWrite.length > 0 ? "button" : item.link ?  `a href="${item.link}" ${item.target ? `target="${item.target}"` : `target="_blank"`}` : "button"} class="item-btn" data-element-type="${item.link ? "link": "button"}">
                            <span class="link-content">
                                <span class="link-con-n">${item.icon} ${item.status ? item.content.length > 21 ? item.content.slice(0, 21) + "..." : item.content : item.content.length > 13 ? item.content.slice(0, 13) + '...' : item.content}</span>
                                <span class="status ${item.status === "new" ? item.status : item.status + "-space"}">${item.status === "new" ? item.status : ""}</span>
                            </span>
                            ${item.overWrite.length < 1 ? "" : `<span class="arrow-icon ${item.overWrite.length > 10 ? "rotateY0" : ""}"><i class="fa-solid fa-angle-down"></i></span>`}
                        </${item.overWrite.length > 0 ? "button" : item.link ? "a" : "button"}>
                        ${
                            item.overWrite.length < 1 ? "" :
                             `<div class="s-other-content ${item.overWrite.length > 10 ? "height0A" : ""}">
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
                                            <${ovItemA.overWrite.length > 0 ? "button" : ovItemA.link ? `a href="${ovItemA.link}" ${ovItemA.target ? `target="${ovItemA.target}"` : `target="_blank"`}` : "button"}  data-element-length="${ovItemA.overWrite.length}"class="oth-item-btn" data-element-type="${ovItemA.link ? "link": "button"}>
                                                <span class="oth-link-content">
                                                    <span class="oth-link-con-n conMain ${ovItemA.overWrite.length < 1 ? "link" : ""}">${ovItemA.content.length > 19 ? ovItemA.content.slice(0, 19) + "..." : ovItemA.content}</span>
                                                    <span class="statusCir ${ovItemA.status}"></span>
                                                </span>
                                                <span class="arrow-icon"></span>
                                            </${ovItemA.overWrite.length > 0 ? "button" : ovItemA.link ? "a" : "button"}>
                                            ${
                                                ovItemA.overWrite.length < 1 ? "" :
                                                 `<div class="oth-s-other-content ${ovItemA.overWrite.length > 5 ? "height0A" : ""}">
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
                                                        <${ovItemB.link === "" ? "button" : "a"} ${ovItemB.link === "" ? "" : `href=${ovItemB.link} target="${ovItemB.target ? ovItemB.target : "_blank"}"`} class="oth-item-btn" data-element-type="${ovItemB.link ? "link": "button"}>
                                                            <span class="oth-link-content">
                                                                <span class="oth-link-con-n">${ovItemB.content.length > 17 ? ovItemB.content.slice(0, 17) + "..." : ovItemB.content}</span>
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


let postClickMemory = JSON.parse(localStorage.getItem("postClickMemory")) || [];
let postClicked = localStorage.getItem("postClicked") || ""
let randomImgLen = Number(localStorage.getItem("randomImgLen")) || 0


// Show posts 
let postsDataShow = Posts.AllPost

function ShowPost(posts){
    ShowPosts.innerHTML = ""
    posts.forEach((post, index) => {
        let randomDefaultImg = index > (ShowDefaultImg.length - 1) ? Math.floor(Math.random() * ShowDefaultImg.length) : index
        let createPost = document.createElement("div");
        createPost.className = "post"
        createPost.innerHTML = `
                            <div class="post-header">
                                <div class="profile-pic">
                                    <div class="profile-cover">
                                        <img src="imgs/${MyProfile.profile_img}" alt="">
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
                                        <img src="imgs/${post.image ? "post_imgs/" + post.image : `default_img/${ShowDefaultImg[randomDefaultImg]}`}" alt="">
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

        const postHashTags = createPost.querySelector(".post-hash-tags")
        postHashTags.innerHTML = ""
        post.tag.forEach((tag, indexTag) => {
            let createTag = document.createElement("span")
            createTag.innerHTML = `#${tag}`
            createTag.className = 'hashTag'
            postHashTags.appendChild(createTag)
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


if (postClickMemory && Object.entries(postClickMemory).length > 1) {
    PostDetailsViewFunc(postClickMemory, randomImgLen)
}

console.log(postClickMemory)

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
                                 <img src="imgs/${post.image ? "post_imgs/" + post.image : `default_img/${ShowDefaultImg[randomDefaultImg]}`}" alt="">
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
                                            <img src="imgs/${MyProfile.profile_img}" alt="">
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



let savedFontFamily = localStorage.getItem("savedFontFamily") || "default"


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
        body.classList.add("overflowHid")
        SidebarToggle("remove")
    } else if (status === "remove"){
        postDetailsView.classList.add("HideAnimateScale0")
        body.classList.remove("overflowHid")
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


// ShowChanelTypes

ShowChanelTypes.innerHTML = ""

ChannelsTypes.forEach((t, index) => {
    if (t == "") return
    let createBtn = document.createElement("button")
    createBtn.className = "chan_type"
    createBtn.dataset.type = t
    createBtn.innerHTML = ` <span class="indicate">
                                <span class="circle_indicate"></span>
                                </span>
                    <span>${t.toUpperCase().slice(0, 1) + t.toLowerCase().slice(1)}</span>`
    ShowChanelTypes.appendChild(createBtn)
})

let ShowChanelTypesBtns = ShowChanelTypes.querySelectorAll("button")
let selectedBtn =  0

try {
    selectedBtn = Number(localStorage.getItem("selectedBtn")) || 0
} catch(err){
    localStorage.removeItem("selectedBtn")
    selectedBtn = 0
}

let dataCC = ShowChanelTypesBtns[selectedBtn > (ShowChanelTypesBtns.length - 1) ? 0 : selectedBtn].dataset.type
let filterSavedChannels = FilterChannels(dataCC)



let selectedChannelsContainer = localStorage.getItem("selectedChannelsContainer", "true") || "false"
ShowChannnelsX(allYoutubeChannels)

function ShowChannnelsX(channels){
    ShowAllChannelsFromData.innerHTML = ""
    ShowChannels.innerHTML = ""
    channels.forEach((c, index) => {
    let createShowChannels = document.createElement("div") 

    ShowAllChannelsFromData.appendChild(createShowChannels)

    if (channels && channels.length > 2 && index === 2){
               
            createShowChannels.innerHTML = `<div class="channelHead">
                                <button class="ShowAll">
                                    All
                                </button>
                                    <p class="ChannelName">See All</p>
                                    <p class="description">see all youtube channels</p>
                                </div>`
                                
                ShowChannels.appendChild(createShowChannels)


                let ShowAll = ShowChannels.querySelector(".ShowAll")
                ShowAll.addEventListener("click", () => {
                    ShowAllChannelsOverlyIs("add")
                })
            }

        if (index > 1) return
        let createChannel = document.createElement("div")
        createChannel.className = "channel"
        createChannel.innerHTML = ` <div class="channelHead">
                                <a href="${c.link.split("://")[0]==="http" ? c.link : "http://" + c.link}" target="_blank">
                                    <img src="${c.profile_img ? c.profile_img : `imgs/default_img/${ShowDefaultImg[index > (ShowDefaultImg.length - 1) ? Math.floor(Math.random() * ShowDefaultImg.length) : index]}`}" alt="">
                                </a>
                                <p class="ChannelName">${c.channel}</p>
                                <p class="description">${c.description}</p>
                            </div>`
        ShowChannels.appendChild(createChannel)
        

        
    })
    channels.forEach((c, index) => {
                let createChannel = document.createElement("div")
        createChannel.className = "channel"
        createChannel.innerHTML = ` <div class="channelHead">
                                <a href="${c.link.split("://")[0]==="http" ? c.link : "http://" + c.link}" target="_blank">
                                    <img src="${c.profile_img ? c.profile_img : `imgs/default_img/${ShowDefaultImg[index > (ShowDefaultImg.length - 1) ? Math.floor(Math.random() * ShowDefaultImg.length) : index]}`}" alt="">
                                </a>
                                <p class="ChannelName">${c.channel}</p>
                                <p class="description">${c.description}</p>
                            </div>`
        ShowAllChannelsFromData.appendChild(createChannel)
    })


}
function SetStatus(Name, status, data, type)
{
    if (status === "set" && type === "json"){
        localStorage.setItem(Name, JSON.stringify(data))
    } else if (status === "set") {
        localStorage.setItem(Name, data)
    } else if (status === "remove"){
        localStorage.removeItem(Name)
    }
}
function GetStatus(Name){
    return localStorage.getItem(Name) 
}



function ShowAllChannelsOverlyIs(status){
    if (status === "add" || status === "true"){
        ShowAllChannelsOverly.classList.remove("hideAnimate0")
        body.classList.add("overflowHid")
        SetStatus("selectedChannelsContainer", "set", 'true')
    } else if (status === "remove" || status === "false"){
        ShowAllChannelsOverly.classList.add("hideAnimate0")
        body.classList.remove("overflowHid")
        SetStatus("selectedChannelsContainer", "remove", "false")
    }
}
CloseChannelsFolder.addEventListener("click", () => {
    ShowAllChannelsOverlyIs("remove")
})
ShowAllChannelsOverlyIs(selectedChannelsContainer)


function FilterChannels(search){
    if (search === "All"){
        return allYoutubeChannels
    }
    let data = null
   data = allYoutubeChannels.filter(item => item.topics.some(i => i.includes(search.toLowerCase())) || item.keyword.some(i => i.includes(search.toLowerCase()) || item.keyword.some(i => search.toLowerCase().includes(i.toLowerCase()))))
   return data
}




ShowChanelTypesBtns.forEach((b, index) => {


    b.addEventListener("click", () => {
        ShowChanelTypesBtns.forEach(b2 => b2.classList.remove("selected"))
        b.classList.add("selected")
        localStorage.setItem("selectedBtn", index)


        let channelsArr = FilterChannels(b.dataset.type)
        ShowChannnelsX(b.dataset.type === "All" ? allYoutubeChannels : channelsArr)
    })
    if (index === selectedBtn){
        ShowChanelTypesBtns.forEach(b2 => b2.classList.remove("selected"))
        b.classList.add("selected")
    }
})

ShowChannnelsX(filterSavedChannels)



document.addEventListener("click", (e) => {
    ClickLinkEvent(e.target)
})

function ClickLinkEvent(element){

    let linkBtn = element.closest(".item-btn") || element.closest(".oth-item-btn")
    if (!linkBtn) return
    if (linkBtn.dataset.elementType === "link"){
        SidebarToggle("remove")
        Overly(false)
    }   

}


// Show social links from data



let socialLinksAllData = allYoutubeChannels.flatMap(l => l.links).filter(link => link.link !== "")
let socialLinksSaved;
try {
    socialLinksSaved = JSON.parse(GetStatus("socialLinksSaved"))
} catch (err){
    socialLinksSaved = null
}
socialLinksSaved = socialLinksSaved || socialLinksAllData

SocialLinksFromDataIn(socialLinksSaved)

function SocialLinksFromDataIn(socialLinks){
    ShowAllLinksFromData.innerHTML = ""
ShowChannelsBestVideosList.innerHTML = ""
socialLinks.forEach((link, index) => {

    let createLink = document.createElement("li")
    createLink.innerHTML = `
                                        <div class="ShowLink">
                                            <div class="videoPic">
                                            
                                                <a href="${link.link}" target="${link.target ? link.target : "_balnk"}">
                                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                                </a>
                                            </div>
                                            <div class="videoDetails">
                                                <h4>${link.content.length > 18 ? link.content.slice(0, 15) + "..." : link.content}</h4>
                                                <p>
                                                    <span>${link.channel}</span>
                                                    <span class="dotPoint"></span>
                                                    <span class="platformName">${link.platform}</span>
                                                </p>
                                            </div>
                                            <span class="countLinks">${index + 1}</span>
                                            ${(socialLinksAllData.length - 1) < index ? `<button class="deleteLink" data-delete-link="${index}"><i class="fa-regular fa-trash-can"></i></button>` : ""}
                                    </div>`
    ShowAllLinksFromData.appendChild(createLink)


    if (index > 1) return
    let createLinkAB = document.createElement("li")
    let createBorder = document.createElement("div")
    createBorder.className = "border-b1-w1"
    createLinkAB.className = "ShowLinkItem"
    createLinkAB.innerHTML = `
                                    <div class="ShowLink">
                                            <div class="videoPic">
                                            
                                                <a href="${link.link}" target="${link.target ? link.target : "_balnk"}">
                                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                                </a>
                                            </div>
                                            <div class="videoDetails">
                                                <h4>${link.content.length > 18 ? link.content.slice(0, 18) + "..." : link.console}</h4>
                                                <p>
                                                    <span>${link.channel.length > 16 ? link.channel.slice(0, 16) + "..." : link.channel}</span>
                                                    <span class="dotPoint"></span>
                                                    <span class="platformName">${link.platform}</span>
                                                </p>
                                            </div>
                                    </div>`
    ShowChannelsBestVideosList.appendChild(createLinkAB)
    if (index < 1){
        ShowChannelsBestVideosList.appendChild(createBorder)
    }
})
}


let savedLinkSection = GetStatus("savedOverlyLinkShowStatus", "") 
ShowLinkSection(savedLinkSection)


function ShowLinkSection(status){
    if(status === "add"){
        ShowAllLinksOverly.classList.remove("hideAnimate0")
        body.classList.add("overflowHid")
        SetStatus("savedOverlyLinkShowStatus", "set", "add")
    } else {
        ShowAllLinksOverly.classList.add("hideAnimate0")
        body.classList.remove("overflowHid")
        SetStatus("savedOverlyLinkShowStatus", "remove", "remove")
    }
}

CloseLinksFolder.addEventListener("click", () => {
    ShowLinkSection("remove")
})
ShowChannelsBestVideosList.addEventListener("click", (e) => {
    if (!e.target.closest("a")){
       ShowLinkSection("add") 
    }
})



// Blogs



let postsDataShowBlogs = Blogs.AllBlogs
let allBlogTopic = [...new Set(postsDataShowBlogs.flatMap(t => t.type))]
let searchBlogInputSaved = GetStatus("savedSearchBlogInput", "") || ""

function SearchBlogs(searchData){
   SetStatus("savedSearchBlogInput", "set", searchData)
   let searchValue = GetStatus("savedSearchBlogInput", "")
   ChangeSearchDisplay(searchValue)
   SearchBlogsFilter(searchValue)
}


suggestSearch(allBlogTopic)
function suggestSearch(typesAll, search){
    searchSuggest.innerHTML = ""
    if (!search) return
    typesAll.filter(u => u !== "").filter(t => t.toLowerCase().includes(search.toLowerCase() === "all" ? "" : search.toLowerCase()) || search.toLowerCase().includes(t.toLowerCase())).forEach(type => {
            let createSuggest = document.createElement("li")
            createSuggest.innerHTML = `
            <button data-suggest="${type}">
             <i class="fa-solid fa-magnifying-glass"></i>
             ${type}
            </button>`
            searchSuggest.appendChild(createSuggest)

            let btn = createSuggest.querySelector("button")

            btn.addEventListener("click", () => {
                SearchBlogs(btn.dataset.suggest)
            })
    })
}



SearchBlogInput.addEventListener("input", () => {
    let searchdata = SearchBlogInput.value.trim()  
    SetStatus("savedSearchBlogInput", "set", searchdata)
    hidePlaceholder(searchdata.length)
    
    let ti = setTimeout(() => {
        suggestSearch(allBlogTopic, searchdata)
        SearchBlogsFilter(searchdata)
        clearTimeout(ti)
    }, 200)
})

SearchBlogbtn.addEventListener("click", () => {
    let searchdata = SearchBlogInput.value.trim()
    SearchBlogs(searchdata)
    SearchBlogInput.focus()
})

hidePlaceholder(searchBlogInputSaved.length || 0)
SearchBlogInput.value = searchBlogInputSaved
suggestSearch(allBlogTopic, searchBlogInputSaved)


function hidePlaceholder(length){
    if (length > 0){
        searchBlogPlaceholder.style.opacity = "0"
    } else {
        searchBlogPlaceholder.style.opacity = "1"
    }
}
function ChangeSearchDisplay(search){
    SearchBlogInput.value = search
}

let showLinkpageStatus = GetStatus("showLinkpageStatus", "")
ShowAddLinkPopup(showLinkpageStatus)
function ShowAddLinkPopup(status){
    if (status === "add" || status === true){

        ShowAllLinksOverlyHead2.classList.remove("height0AndOp0")
        ShowAllLinksFromData.classList.add("linkAddActive")
        SetStatus("showLinkpageStatus", "set", "add")

    } else if (status === "remove" || status === false) {

       ShowAllLinksOverlyHead2.classList.add("height0AndOp0")
        ShowAllLinksFromData.classList.remove("linkAddActive")
       SetStatus("showLinkpageStatus", "set", "remove") 

    } else {
        ShowAllLinksOverlyHead2.classList.toggle("height0AndOp0")
        if (ShowAllLinksOverlyHead2.classList.contains("height0AndOp0")){
             ShowAddLinkPopup("remove")
        } else {
             ShowAddLinkPopup("add")
        }
    }
}   
CreateNewBtn.addEventListener("click", () => {
    ShowAddLinkPopup("")
})
RemoveAddLinkSec.addEventListener("click", () => {
    ShowAddLinkPopup("remove")
})
// socialLinksAllData

 function AddLinks(){
    let channelName = inputgroup1.querySelectorAll("input")[0].value
    let titleName = inputgroup1.querySelectorAll("input")[1].value
    let link = document.querySelector(".InputLinks .inputTitle input").value
    if (!channelName || !titleName || !link) return
    let socialLink = {
         content: titleName,
         channel: channelName,
         link: link,
         target: "_blank",
         platform: ""
    }
    socialLinksSaved.push(socialLink)
    SetStatus("socialLinksSaved", "set", socialLinksSaved, "json")
    SocialLinksFromDataIn(socialLinksSaved)
    InputLinks.querySelectorAll("input").forEach(i => i.value = "")
 }
 AddLinkBtn.addEventListener("click", () => {
    AddLinks()
 })
ShowAllLinksFromData.addEventListener("click", (e) => {
    let LinkRemoveBtn = e.target.closest(".deleteLink")
    if (LinkRemoveBtn){
        DeleteLink(Number(LinkRemoveBtn.dataset.deleteLink))
    }
})

function DeleteLink(index){
    
    socialLinksSaved.splice(index, 1)
    SetStatus("socialLinksSaved", "set", socialLinksSaved, "json")
    SocialLinksFromDataIn(socialLinksSaved)
}



// Blogs show cliked by btns
 let isshowAllBlog = GetStatus("isshowAllBlog") || "true"
 const maxshowLength = 3
 let maxShow = maxshowLength
 
 ConfigBlogs.addEventListener("click", () => {
       if(isshowAllBlog !== "true")
        {
            isshowAllBlog = "true"
            
        } else {
            isshowAllBlog = "false";
            
        }
        ShowAllBlogsData(isshowAllBlog)
        SetStatus("isshowAllBlog", "set", isshowAllBlog)
        ShowBlogs(Blogs.AllBlogs)

})
ShowAllBlogsData(isshowAllBlog)

function ShowAllBlogsData(status){
    if (status !== "true")
    {   
        maxShow = maxshowLength 
    } else {
        maxShow = Blogs.AllBlogs.length
    }
}

ShowBlogs(Blogs.AllBlogs)
function ShowBlogs(Allblogs){

    showBlogs.innerHTML = ""

    if (Allblogs.length < maxShow){
        ConfigBlogs.style.display = "none"
    } else {

        ConfigBlogs.style.display = "block"
        if(maxShow > maxshowLength)
        {
           ConfigBlogs.classList.add("showLess")
           ConfigBlogs.innerHTML = "Show Less Blogs"
        } else {
           ConfigBlogs.classList.remove("showLess")
           ConfigBlogs.innerHTML = "Show More Blogs"    
        }
    }

    Allblogs.forEach((blog, index) => {

    let createBlog = document.createElement("div")
    createBlog.className = "blog"
    createBlog.innerHTML = `
                                <div class="blog-count">
                                    <span>${index + 1}</span>
                                </div>
                                <div class="blog-main">
                                    <div class="blog-title">
                                        <div class="blogTitle">${!blog.title ? blog.blog.slice(0, 30) + ".." : blog.title}</div>
                                    </div>
                                    <div class="border-h1-w90"></div>
                                    <div class="blog_content">
                                       ${blog.blog.length > 90 ? blog.blog.slice(0, 90) + `<span class="showMoreBtn">...more</span>` : blog.blog}
                                    </div>
                                </div>`
    if (index < maxShow) showBlogs.appendChild(createBlog)

     createBlog.addEventListener("click", () => {
        BlogShowOverly('add')
        InputBlogsData(blog)
     })
})
}


function SearchBlogsFilter(search){
    search = search.toLowerCase()
    let filteredSearch = Blogs.AllBlogs.filter(i => i.blog !== "").filter(item => item.title.toLowerCase().includes(search) || item.blog.toLowerCase().includes(search) || item.type.some(t => t.toLowerCase().includes(search)))
    ShowBlogs(filteredSearch)
}

SearchBlogsFilter(searchBlogInputSaved)


/* 

*/

let showBlogOverlyStatus = GetStatus("showBlogOverlyStatus")
BlogShowOverly(showBlogOverlyStatus)
function BlogShowOverly(status){
    if (status === "add" || status === true){

        showAllBlogsOverly.classList.remove("hideAnimate0")
        body.classList.add("overflowHid")
        SetStatus("showBlogOverlyStatus", "set", "add", "")

    } else if (status === "remove" || status === false) {

        showAllBlogsOverly.classList.add("hideAnimate0")
        body.classList.remove("overflowHid")
        SetStatus("showBlogOverlyStatus", "set", "remove", "")

    } else {
        showAllBlogsOverly.classList.toggle("hideAnimate0")
        if (showAllBlogsOverly.classList.contains("hideAnimate0")){
            BlogShowOverly("remove")
        } else {
            BlogShowOverly("add")
        }
    }
}
HideBlogs.addEventListener("click", () => {
    BlogShowOverly('remove')
})

let SavedBlogOverly;
try {
    SavedBlogOverly = JSON.parse(GetStatus("SavedBlogOverly"))
} catch(err){
    SavedBlogOverly = null
    SetStatus("SavedBlogOverly", "remove")
}

InputBlogsData(SavedBlogOverly)

function InputBlogsData(Singleblogs, AllBlogs){
    ShowAllBlogsOverlyMain.innerHTML = ""


    if (Object.entries(Singleblogs).length || Singleblogs !== "" || Singleblogs !== null){
        SetStatus("SavedBlogOverly", "set", Singleblogs, "json")
        let createBlog = document.createElement("div")
        createBlog.innerHTML = `
        <div class="blog_x">
            <div class="blog_x_title">
                ${Singleblogs.title ? Singleblogs.title : Singleblogs.blog.slice(0, 40) + "..."}
            </div>
            <div class="blog_x_main_content">
                ${Singleblogs.blog}
            </div>
        </div>
        `
        ShowAllBlogsOverlyMain.appendChild(createBlog)
        LinkOpenInGoogle(Singleblogs.title ? Singleblogs.title : Singleblogs.blog.slice(0, 30))
        return
    }
    AllBlogs.forEach((blog, index) => {
        let createBlog = document.createElement("div")
        createBlog.innerHTML = `
        <div class="blog_x">
            <div class="blog_x_title">
                ${blog.title}
            </div>
            <div class="blog_x_main_content">
                ${blog.blog}
            </div>
        </div>
        `
        ShowAllBlogsOverlyMain.appendChild(createBlog)
    })
}
function LinkOpenInGoogle(search, target){
    search = search.trim()
    SearchInGoggle.addEventListener("click", () => {
        window.open(`https://www.google.com/search?q=${search}`, target || "_blank")
    })
}


