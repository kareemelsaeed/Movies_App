let myPage = document.querySelector('.page')
let mymainH1 = document.querySelector('.mainH1')
let myHead = document.querySelector('.myhead')
console.log(myHead);
fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bd551351d613eae72b5219e295facfeb&page1`)
.then(res => res.json())
.then(data => {
    // console.log(data.results);
    let myRes = data.results
    myRes.map((e)=>{
        // console.log(e.title);
        let myVote = e.vote_average

        // (
            // <div class="position-absolute bottom-0 start-0 bg-secondary text-light overview" style="width : 12.7rem; margin-left: .75rem; display: block;">
            // <div class="mx-3" style="font-size: 9px;">
            //     <h6 class="mt-4">Overview</h6>
            //     <p>${e.overview}</p>
            // </div>
            // </div>
        // )

        // console.log(myVote);
        let myApiImg = e.poster_path
        let myImgUrl = `https://image.tmdb.org/t/p/original${myApiImg}`
        let myImg = `

            <div class="col-lg-2.4 col-sm-6 mt-4 position-relative" style="width : 14.2rem;">
                <a href="https://divedigital.vip/movie/${e.id}/${e.title}.html" class="text-decoration-none"><img class="rounded" src="${myImgUrl}" alt="" width="100%"></a>
                <div class="d-flex justify-content-between">
                    <a href="https://divedigital.vip/movie/${e.id}/${e.title}.html" class="text-decoration-none"><div class="text-white-50">${e.title}</div></a>
                    <div class="text-secondary">
                        ${myVote > 7.9 ? (`<div class="text-success">${myVote}</div>`) : (`<div class="text-warning">${myVote}</div>`)}
                    </div>
                </div>

                <a href="https://divedigital.vip/movie/${e.id}/${e.title}.html">
                    <div class="position-absolute bottom-0 start-0 text-light overview" style="width : 12.7rem; margin-left: .75rem;">
                        <div class="position-absolute bottom-0 start-0 bg-secondary" >
                            <div class="mx-3">
                                <h6 class="mt-4 text-center">Overview</h6>
                                <p>${e.overview}</p>
                            </div>  
                        </div>
                    </div>
                </a>



            </div>

        `

        mymainH1.innerHTML = `Popular Movies`
        myPage.innerHTML += myImg
    })


    let mySearch = document.querySelector('.mySearch')
    let mysearIcon = document.querySelector('.searIcon')
    mysearIcon.addEventListener('click',()=>{
        console.log(mySearch.value);
        if (mySearch.value != '') {
            myPage.innerHTML = ''
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=bd551351d613eae72b5219e295facfeb&query=${mySearch.value}`)
            .then(resp => resp.json())
            .then( data =>{
                // console.log(data);
                let mySear = data.results
                // console.log(mySear);
                mySear.map((v)=>{
                    console.log(v.vote_average);
                    let myVo = v.vote_average
                    let myApiImg2 = v.poster_path
                    console.log(v.vote_average);
                    let myImgUrl2 = `https://image.tmdb.org/t/p/original${myApiImg2}`
                    let myImg2 = `
        
                    <div class="col-lg-2.4 col-sm-6 mt-4 position-relative" style="width : 14.2rem;">
                        <a href="https://divedigital.vip/movie/${v.id}/${v.title}.html" class="text-decoration-none"><img class="rounded" src="${myImgUrl2}" alt="" width="100%"></a>
                        <div class="d-flex justify-content-between">
                            <a href="https://divedigital.vip/movie/${v.id}/${v.title}.html" class="text-decoration-none"><div class="text-white-50">${v.title}</div></a>
                            <div class="text-secondary">
                                ${myVo > 7.9 ? (`<div class="text-success">${myVo}</div>`) : (`<div class="text-warning">${myVo}</div>`)}
                            </div>
                        </div>

                        <a href="https://divedigital.vip/movie/${v.id}/${v.title}.html">
                            <div class="position-absolute bottom-0 start-0 text-light overview" style="width : 12.7rem; margin-left: .75rem;">
                                <div class="position-absolute bottom-0 start-0 bg-secondary" >
                                    <div class="mx-3">
                                        <h6 class="mt-4 text-center">Overview</h6>
                                        <p>${v.overview}</p>
                                    </div>  
                                </div>
                            </div>
                        </a>


                    </div>
        
                `
                myHead.innerHTML = `Movie Search Result "${mySearch.value}"`
                mymainH1.innerHTML = `Search Result for "${mySearch.value}"`
                myPage.innerHTML += myImg2
        
                })
                
            })
            }
    })

})
