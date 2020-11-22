const el = refElement=>{
    return document.querySelectorAll(refElement);
}
//Function for creating various printing on page or in console
/**
 * @author Ese Curtis - [AMVC.js function]
 */
const print ={
    toEl:(el = null, str = null)=>{
        if(document.querySelector(el)){
            return document.querySelector(el).innerHTML = str;
        }
        return console.error('Error: the element "'+el+'" specified is not found');
    },
    inEl:(el = null, str = null)=>{
        if(document.querySelector(el)){
            return document.querySelector(el).innerHTML += str;
        }
        return console.error('Error: the element "'+el+'" specified is not found');
    },
    asEl:(el = null, str = null)=>{
        if(document.querySelector(el)){
            return document.querySelector(el).outerHTML = str;
        }
        return console.error('Error: the element "'+el+'" specified is not found');
    },
    out:(str = null)=>{
        return document.write(str);
    },
    in:(str = null)=>{
        return console.log(str);
    }
};

const processDate = (date)=>{
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    date = date.trim().split('/');
    date[0] = date[0].replace(/^[0]/g, '');
    if(typeof(months[date[0]-1]) !== undefined){
        var month = months[date[0]-1];
    }
    date = month+' '+date[1]+', '+date[2];

    return date;
}

const generateShareLink = (socialMedia, data)=>{
    let shareLink;
    switch(socialMedia){
        case "facebook":
            shareLink = 'https://www.facebook.com/sharer/sharer.php?u='+escape(data.url);
        break;
        case "twitter":
            shareLink = 'http://twitter.com/home?status='+escape(data.url)+'\n'+data.description;
        break;
        case "mail":
            shareLink = 'mailto:?subject='+data.title+';body='+data.description+'\n'+escape(data.url);
        break;
        case "pinterest":
            shareLink = 'http://pinterest.com/pin/create/bookmarklet/?is_video=false&url='+escape(data.url)+'&description='+data.description;
        break;
    }

    return shareLink;
}

const element = {
    show : (refElement, displayStyle = "flex")=>{
        el(refElement)[0].style.display = displayStyle;
        setTimeout(() => {
            el(refElement)[0].style.opacity = 100;
        }, 70);
    },
    hide : refElement=>{
        el(refElement)[0].style.opacity = 0;
        setTimeout(() => {
            el(refElement)[0].style.display = "none";
        }, 200);
    }
}
const overlay = {
    open: callback=>{
        el(".overlay")[0].onclick = callback;
        element.show(".overlay");
    },
    close: ()=>{
        element.hide(".overlay");
    }
}
const closeAll = ()=>{
    nav.close();
}

loader = {
    start: ()=>{
        overlay.open();
        element.show(".loader");
    },
    stop: ()=>{
        overlay.close();
        element.hide(".loader");
    }
}
const modal = {
    open: content=>{
        overlay.open();
        element.show(".modal");
        print.toEl('.modal-text-content', content);
    },
    close: ()=>{
        overlay.close();
        element.hide(".modal");
        print.toEl('.modal-text-content', "{content}");
        closeAll();
    }
}

const toast = (content, timeout = 1000)=>{
    modal.open(content);
    setTimeout(() => {
        modal.close(content);
    }, timeout);
}
const push = (title, content, timeout = 1000)=>{
    content = content.slice(0, 30)+"...";
    title = title.slice(0, 15)+" -";
    overlay.open();
    print.toEl("#notif-title", title);
    print.toEl("#notif-content", content);
    element.show(".push-notif");
    setTimeout(() => {
        overlay.close();
        element.hide(".push-notif");
    }, timeout);
}
const nav = {
    open: ()=>{
        overlay.open(nav.close);
        el(".dgn-menu")[0].style.transform = "translateX(0vw) translateY(-50%)";
    },
    close: ()=>{
        el(".dgn-menu")[0].style.transform = "translateX(-100vw) translateY(-50%)";
        overlay.close();
    }
}
const navigator = {
    open: ()=>{
        overlay.open(navigator.close);
        element.show(".dgn-navigator");
    },
    close: ()=>{
        overlay.close();
        element.hide(".dgn-navigator");
        closeAll();
    }
}

const handleResponsivity = ()=>{
    let windowScroll = $(this).scrollTop();
    if ( windowScroll > 100) {
        document.querySelectorAll('#resp').forEach(respItem=>{
            respItem.classList.add("opened");
        });
    }else{
        document.querySelectorAll('#resp').forEach(respItem=>{
            respItem.classList.remove("opened");
        });
    }

}

