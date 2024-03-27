document.addEventListener("click", (e) => {
    const {target} = e;
    if(!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    urlRoute();
})

const urlRoutes = {
    404: {
        template: "/template/404.html",
        title: "",
        description: ""
    },

    "/" : {
        template: "/template/404.html",
        title: "",
        description: ""
    },

    "/aboutme" : {
        template: "/template/aboutme.html",
        title: "",
        description: ""
    },

    "/contact" : {
        template: "/template/contact.html",
        title: "",
        description: ""
    },

};

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();
};

const urlLocationHandler = async () => {

    const location = window.location.pathname;
    if(location.length == 0) {
        location = "/"
    }

    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((response) => 
        response.text());
    document.getElementById("content").innerHTML = html;
};

urlLocationHandler();