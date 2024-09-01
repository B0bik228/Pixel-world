var count = 0
var timer = 0
var rng = 0

function checkPopup() {
    let popup = window.open('', '', 'width=100,height=100');
    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
        alert('Please enable pop-ups!');
        checkPopup()
    } else {
        popup.close();
    }
}

checkPopup()

function virus()
{
    const wow = document.getElementById('body')
    wow.classList.add('strange')
    for(var i = 0; i<10000; i++)
    {
        rng = Math.floor(Math.random()*3)
        if(rng == 0)
        {
            var yohoo = window.open('https://www.bing.com/images/search?view=detailV2&ccid=lM4FpHkR&id=CDD232E15FAAC01856104ABE9136703C7B6E47C6&thid=OIP.lM4FpHkRBTnXzj7TQxjAiAHaEK&mediaurl=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F64ce6539-2bee-43ff-8af7-5c7faa3e0d8c%2Fdd5vhzw-57c0bef8-f609-48df-b3f1-46f4c9d37cb2.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0Y2U2NTM5LTJiZWUtNDNmZi04YWY3LTVjN2ZhYTNlMGQ4Y1wvZGQ1dmh6dy01N2MwYmVmOC1mNjA5LTQ4ZGYtYjNmMS00NmY0YzlkMzdjYjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iCT4MJTF3PQbdDqBW-ZW-lLsxhK3tqd1XgEnQl-TiLc&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.94ce05a479110539d7ce3ed34318c088%3Frik%3DxkduezxwNpG%252bSg%26pid%3DImgRaw%26r%3D0&exph=1080&expw=1920&q=sonic+feet&simid=607997740234842463&FORM=IRPRST&ck=96ABAC80BE4DF56FC9734A52304C9F5B&selectedIndex=2&itb=1&adlt=strict&cw=1528&ch=740&ajaxhist=0&ajaxserp=0','','width=2000 height=1000');
        }
        else if(rng == 1)
        {
            window.open('https://www.bing.com/images/search?view=detailV2&ccid=Hkhv0geT&id=8307A7FBBD0B25DE83A311343A8F42D6858ACA7A&thid=OIP.Hkhv0geTTpv4vMsFlL8D_QHaHa&mediaurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F74%2Fbd%2F85%2F74bd850f9f1766713c9474c27665fb43.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.1e486fd207934e9bf8bccb0594bf03fd%3Frik%3DesqKhdZCjzo0EQ%26pid%3DImgRaw%26r%3D0&exph=736&expw=736&q=meme&simid=608042652718933537&FORM=IRPRST&ck=2A39778065D9311F249E3F66927B6BE0&selectedIndex=10&itb=0&adlt=strict&cw=1528&ch=740&ajaxhist=0&ajaxserp=0','','width=2000 height=1000');
        }
        else if(rng == 2)
        {
            window.open('https://www.bing.com/images/search?view=detailV2&ccid=4UY9KHz4&id=EA70365360696E2EDEAAAF20C95F372DBEB17273&thid=OIP.4UY9KHz4korYWos8D2LGWQHaHa&mediaurl=https%3A%2F%2Ff4.bcbits.com%2Fimg%2Fa2684133930_10.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.e1463d287cf8928ad85a8b3c0f62c659%3Frik%3Dc3Kxvi03X8kgrw%26pid%3DImgRaw%26r%3D0&exph=1200&expw=1200&q=sigma+skibidi+rizz&simid=608031696232322851&FORM=IRPRST&ck=B899AEE697270850A5BC2A254243904F&selectedIndex=0&itb=0&adlt=strict&cw=1528&ch=740&ajaxhist=0&ajaxserp=0','','width=2000 height=1000');
        }
        if(window.closed)
        {
            yohoo.close
            alert('Please turn on pop-ups!')
        }
    }
}

function tick()
{
    timer = timer+0.01
    document.getElementById('top-things').style.marginTop = 50+(Math.sin(timer)*15)+'px'
}

setInterval(tick,10)
