const Header = React.createClass({
    displayName: "Header",

    render: function () {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "header",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "logo col-md-2" },
                    React.createElement(
                        "div",
                        null,
                        "Escimo"
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "p",
                            null,
                            "ask"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "me"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "more"
                        )
                    )
                ),
                React.createElement(
                    "form",
                    { className: "search-or-ask col-md-6", name: "search-or-ask" },
                    React.createElement("input", { type: "text", name: "ask", placeholder: "search or ask" }),
                    React.createElement("input", { type: "submit", className: "btn", value: "Ask a Question" })
                ),
                React.createElement(
                    "div",
                    { className: "login-button col-md-4" },
                    React.createElement(
                        "a",
                        { href: "#" },
                        "Login"
                    )
                )
            )
        );
    }
});

let playlist = [{
    name: 'video1',
    source: 'youtube',
    id: 'An2jkWiVna8'
}, {
    name: 'video2',
    source: 'youtube',
    id: 'd_1s-e1wn6k'
}, {
    name: 'video3',
    source: 'youtube',
    id: 'U_MXFP_kguA'
}];

const Leftcontent = React.createClass({
    displayName: "Leftcontent",

    render: function () {
        return React.createElement(
            "div",
            { className: "leftcontent col-md-8" },
            React.createElement(
                "div",
                { className: "video-playlist" },
                React.createElement(
                    "div",
                    { className: "video-box" },
                    React.createElement("iframe", { className: "visible", width: "729px", height: "410px", src: "https://www.youtube.com/embed/An2jkWiVna8?controls=0", frameborder: "0", allowfullscreen: true }),
                    React.createElement(
                        "div",
                        { className: "video-title flex-between" },
                        React.createElement(
                            "div",
                            { className: "userpic" },
                            React.createElement("img", { src: "img/person.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "video-info" },
                            React.createElement(
                                "div",
                                { className: "title" },
                                "How to make this desert ?"
                            ),
                            React.createElement(
                                "div",
                                { className: "name-and-views" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Semenovich"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    "921, 000 views"
                                )
                            )
                        ),
                        React.createElement(
                            "button",
                            { className: "btn video-answer-button" },
                            "Answer"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "video-tags row" },
                        React.createElement(
                            "div",
                            { className: "tags-and-more pull-left" },
                            React.createElement(
                                "div",
                                { className: "tags" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "#easy"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "#not_easy"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "#hard"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("img", { src: "img/plus-circle.png" })
                                )
                            ),
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement(
                                    "div",
                                    { className: "video-show-more" },
                                    "show more"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "video-share pull-right" },
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("i", { className: "fa fa-share-alt", "aria-hidden": "true" }),
                                "Share"
                            ),
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("i", { className: "fa fa-heart-o", "aria-hidden": "true" }),
                                "2,5 k"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "video-comments" },
                        React.createElement(
                            "a",
                            { href: "#" },
                            "view all 18 comments"
                        ),
                        React.createElement(
                            "div",
                            { className: "video-comment" },
                            "serpukin",
                            React.createElement(
                                "a",
                                { href: "#" },
                                "#easy"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Deciphering Marketing Lingo For Small Business Owners"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "video-comment" },
                            "mothermilk",
                            React.createElement(
                                "a",
                                { href: "#" },
                                "@serpukin"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Enlightenment Is Not Just One State"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "video-comment" },
                            "serpukin",
                            React.createElement(
                                "a",
                                { href: "#" },
                                "@mothermilk"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "New Ideas For A Low Cost Vacation On Water"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "video-add-comment row" },
                            React.createElement(
                                "a",
                                { href: "#", className: "pull-left" },
                                "Add comment"
                            ),
                            React.createElement(
                                "div",
                                { className: "pull-right" },
                                "0/500"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "video-answwers row" },
                    React.createElement(
                        "div",
                        { className: "video-box col-md-6" },
                        React.createElement("iframe", { className: "visible", width: "100%", height: "400px", src: "https://www.youtube.com/embed/5bEFE6Mw-fM?controls=0", frameborder: "0", allowfullscreen: true })
                    ),
                    React.createElement(
                        "div",
                        { className: "video-box col-md-6" },
                        React.createElement("iframe", { className: "visible", width: "100%", height: "400px", src: "https://www.youtube.com/embed/0zyz0ktjUrI?controls=0", frameborder: "0", allowfullscreen: true })
                    )
                )
            )
        );
    }
});

const Rightcontent = React.createClass({
    displayName: "Rightcontent",

    render: function () {
        return React.createElement(
            "div",
            { className: "rightcontent col-md-4" },
            React.createElement(
                "div",
                { className: "simillar-questions" },
                React.createElement(
                    "h2",
                    null,
                    "Simillar questions"
                ),
                React.createElement(
                    "div",
                    { className: "simillar-question" },
                    React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement(
                            "div",
                            { className: "thumb" },
                            React.createElement("img", { src: "img/thumb.jpg", alt: "" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "question-info" },
                        React.createElement(
                            "h3",
                            null,
                            "Home Audio Recording For Everyone ?"
                        ),
                        React.createElement(
                            "div",
                            { className: "views" },
                            "123, 825 views"
                        ),
                        React.createElement(
                            "a",
                            { href: "#", className: "author" },
                            React.createElement("img", { src: "img/person.png", alt: "" }),
                            "Jackson Garner"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "simillar-question" },
                    React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement(
                            "div",
                            { className: "thumb" },
                            React.createElement("img", { src: "img/thumb.jpg", alt: "" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "question-info" },
                        React.createElement(
                            "h3",
                            null,
                            "Home Audio Recording For Everyone ?"
                        ),
                        React.createElement(
                            "div",
                            { className: "views" },
                            "123, 825 views"
                        ),
                        React.createElement(
                            "a",
                            { href: "#", className: "author" },
                            React.createElement("img", { src: "img/person.png", alt: "" }),
                            "Jackson Garner"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "simillar-question" },
                    React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement(
                            "div",
                            { className: "thumb" },
                            React.createElement("img", { src: "img/thumb.jpg", alt: "" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "question-info" },
                        React.createElement(
                            "h3",
                            null,
                            "Home Audio Recording For Everyone ?"
                        ),
                        React.createElement(
                            "div",
                            { className: "views" },
                            "123, 825 views"
                        ),
                        React.createElement(
                            "a",
                            { href: "#", className: "author" },
                            React.createElement("img", { src: "img/person.png", alt: "" }),
                            "Jackson Garner"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "simillar-question" },
                    React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement(
                            "div",
                            { className: "thumb" },
                            React.createElement("img", { src: "img/thumb.jpg", alt: "" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "question-info" },
                        React.createElement(
                            "h3",
                            null,
                            "Home Audio Recording For Everyone ?"
                        ),
                        React.createElement(
                            "div",
                            { className: "views" },
                            "123, 825 views"
                        ),
                        React.createElement(
                            "a",
                            { href: "#", className: "author" },
                            React.createElement("img", { src: "img/person.png", alt: "" }),
                            "Jackson Garner"
                        )
                    )
                ),
                React.createElement(
                    "a",
                    { href: "#", className: "more-questions" },
                    "More questions"
                )
            )
        );
    }
});

const Maincontent = React.createClass({
    displayName: "Maincontent",

    render: function () {
        return React.createElement(
            "div",
            { className: "container maincontent uk-grid data-uk-grid-margin" },
            React.createElement(Leftcontent, null),
            React.createElement(Rightcontent, null)
        );
    }
});

const Footer = React.createClass({
    displayName: "Footer",

    render: function () {
        return React.createElement(
            "footer",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "logo col-md-2" },
                    React.createElement(
                        "div",
                        null,
                        "Escimo"
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "p",
                            null,
                            "ask"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "me"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "more"
                        )
                    )
                ),
                React.createElement(
                    "ul",
                    { className: "bottom-menu col-md-6" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Contact"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "About US"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Press"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Blog"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "copyright col-md-4 pull-right" },
                    "Copyright © 2016, Escimo. All rights reserved."
                )
            )
        );
    }
});

const App = React.createClass({
    displayName: "App",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(Header, null),
            React.createElement("hr", null),
            React.createElement(Maincontent, null),
            React.createElement("hr", null),
            React.createElement(Footer, null)
        );
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementsByTagName('body')[0]);
