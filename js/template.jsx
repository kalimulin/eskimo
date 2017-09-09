let tags = [
    {
        tag: '#easy'
    }, {
        tag: '#not_easy'
    }, {
        tag: '#hard'
    }
];

let data = [
    {
        "id": 1,
        "likes": 0,
        "name": "Semenovich",
        "question": 'How to make this dessert ?',
        "tags": [
            "easy", "not_easy", "hard"
        ],
        "link": "https://www.youtube.com/embed/DkaUsBwe0fo",
        "thumb": "http://img.youtube.com/vi/DkaUsBwe0fo/0.jpg"
    }, {
        "id": 2,
        "likes": 3,
        "name": "Semenovich",
        "question": 'How to make this dessert ?',
        "tags": [
            "vbv", "hjjk", "dfdf"
        ],
        "link": "https://www.youtube.com/embed/roeIzSyed2U",
        "thumb": "http://img.youtube.com/vi/roeIzSyed2U/0.jpg"
    }, {
        "id": 4,
        "likes": 2,
        "name": "Semenovich",
        "question": 'How to make this dessert ?',
        "tags": ["dfdf"],
        "link": "https://www.youtube.com/embed/FUBAAnVxxM0",
        "thumb": "http://img.youtube.com/vi/FUBAAnVxxM0/0.jpg"
    }, {
        "id": 3,
        "likes": 1,
        "name": "Semenovich",
        "question": 'How to make this dessert ?',
        "tags": ["gffg"],
        "link": "https://www.youtube.com/embed/wowXeAGH1Sg",
        "thumb": "http://img.youtube.com/vi/wowXeAGH1Sg/0.jpg"
    }
]

const Tag = React.createClass({
    render: function() {
        let tag = this.props.data.tag;
        return (
            <a href="#">{tag}</a>
        )
    }
});

const ShowMore = React.createClass({
    getInitialState: function() {
        return {visible: false};
    },
    modalOpen: function(e) {
        e.preventDefault();
        this.setState({visible: true});
    },
    modalClose: function(e) {
        e.preventDefault();
        this.setState({visible: false});
    },
    render: function() {
        return (
            <div>
                <div className="video-show-more" onClick={this.modalOpen}>show more</div>
                <div className={"modal fade " + (this.state.visible ? 'in' : '')} tabindex="-1" role="dialog" style={{display: (this.state.visible ? 'block' : 'none')}}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.modalClose}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title">Modal title</h4>
                            </div>
                            <div className="modal-body">
                                <p>One fine body&hellip;</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.modalClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

const Tags = React.createClass({
    getInitialState: function() {
        return {visible: false};
    },
    addTagClick: function(e) {
        e.preventDefault();
        this.setState({visible: true});
        //console.log(this.refs.TagInput);
    },
    render: function() {
        let data = this.props.data;
        let tagsTemplate;
        if (data.length > 0) {
            tagsTemplate = data.map(function(item, index) {
                return (<Tag data={item}/>)
            })
        } else {
            tagsTemplate = ''
        }

        return (
            <div className="tags">
                {tagsTemplate}
                <a href="#" onClick={this.addTagClick}>
                    <img src="img/plus-circle.png"/>
                </a>
                <div className={(this.state.visible
                    ? ''
                    : 'hidden')}>
                    <TagInput/>
                </div>
            </div>
        )
    }
});

const TagInput = React.createClass({
    getInitialState: function() {
        return {myValue: '', visible: false};
    },
    onChangeHandler: function(e) {
        this.setState({myValue: e.target.value})
    },
    render: function() {

        return (
            <form className="form-inline">
                <div className="form-group">
                    <input className='form-control' value={this.state.myValue} onChange={this.onChangeHandler} placeholder='Input tags'/>
                </div>
                <button className="btn btn-default">Ok</button>
            </form>

        );
    }
});

const Header = React.createClass({
    render: function() {
        return (
            <div className="container">
                <header className="row">
                    <div className="logo col-md-2">
                        <div>Eskimo</div>
                        <div>
                            <p>ask</p>
                            <p>me</p>
                            <p>more</p>
                        </div>
                    </div>
                    <form className="search-or-ask col-md-6" name="search-or-ask">
                        <input type="text" name="ask" placeholder="search or ask"/>
                        <input type="submit" className="btn" value="Ask a Question"/>
                    </form>
                    <div className="login-button col-md-4">
                        <a href="#">Login</a>
                    </div>
                </header>
            </div>
        )
    }
});

let playlist = [
    {
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
    }
]

const Leftcontent = React.createClass({
    render: function() {
        return (

            <div className="leftcontent col-md-8">
                <div className="video-playlist">
                    <div className="video-box">
                        <div className="video">
                            <iframe className="visible" width="729px" height="410px" src="https://www.youtube.com/embed/An2jkWiVna8?controls=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
                            <div className="side-left">
                                <i className="fa fa-caret-left" aria-hidden="true"></i>
                            </div>
                            <div className="side-right">
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
                            </div>
                            <div className="like-button">
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="video-title flex-between">
                            <div className="userpic">
                                <img src="img/person.png"/>
                            </div>
                            <div className="video-info">
                                <div className="title">How to make this desert ?</div>
                                <div className="name-and-views">
                                    <a href="#">Semenovich</a>
                                    <p>921, 000 views</p>
                                </div>
                            </div>

                            <button className="btn video-answer-button">Answer</button>
                        </div>
                        <div className="video-tags row">
                            <div className="tags-and-more pull-left">
                                <div className="tags">
                                    <Tags data={tags}/>
                                </div>
                                <ShowMore/>
                            </div>
                            <div className="video-share pull-right">
                                <a href="#">
                                    <i className="fa fa-share-alt" aria-hidden="true"></i>Share</a>
                                <a href="#">
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>2,5 k</a>
                            </div>
                        </div>
                        <div className="video-comments">
                            <a href="#">view all 18 comments</a>
                            <div className="video-comment">
                                serpukin
                                <a href="#">#easy</a>
                                <p>Deciphering Marketing Lingo For Small Business Owners</p>
                            </div>
                            <div className="video-comment">
                                mothermilk
                                <a href="#">@serpukin</a>
                                <p>Enlightenment Is Not Just One State</p>
                            </div>
                            <div className="video-comment">
                                serpukin
                                <a href="#">@mothermilk</a>
                                <p>New Ideas For A Low Cost Vacation On Water</p>
                            </div>
                            <div className="video-add-comment">
                                <div href="#">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-10">
                                                <input type="text" placeholder="Add comment" className="form-control"/>
                                            </div>
                                            <div className="col-md-2">
                                                <input type="submit" value="Add" className="btn btn-default btn-block"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="video-answwers row">
                        <div className="col-md-6">
                            <div className="video-thumb">
                                <img src="http://img.youtube.com/vi/DkaUsBwe0fo/0.jpg"/>
                                <div className="thumb-video-info">
                                    <div className="play-button">
                                        <a href="#">
                                            <i className="fa fa-play" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="video-info">
                                        <div className="user-info pull-left">
                                            <a href="#">
                                                <img src="img/person.png" alt=""/>
                                                <div className="username">Serpukin</div>
                                            </a>
                                        </div>
                                        <div className="likes pull-left">
                                            <a href="#">
                                                <i className="fa fa-heart-o" aria-hidden="true"></i>125</a>
                                        </div>
                                        <div className="time-from pull-right">1 hr</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="video-thumb">
                                <img src="http://img.youtube.com/vi/roeIzSyed2U/0.jpg"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="video-thumb">
                                <img src="http://img.youtube.com/vi/FUBAAnVxxM0/0.jpg"/>
                                <div className="thumb-video-info">
                                    <div className="play-button">
                                        <a href="#">
                                            <i className="fa fa-play" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="video-info">
                                        <div className="user-info pull-left">
                                            <a href="#">
                                                <img src="img/person.png" alt=""/>
                                                <div className="username">Serpukin</div>
                                            </a>
                                        </div>
                                        <div className="likes pull-left">
                                            <a href="#">
                                                <i className="fa fa-heart-o" aria-hidden="true"></i>125</a>
                                        </div>
                                        <div className="time-from pull-right">1 hr</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="video-thumb">
                                <img src="http://img.youtube.com/vi/wowXeAGH1Sg/0.jpg"/>
                                <div className="thumb-video-info">
                                    <div className="play-button">
                                        <a href="#">
                                            <i className="fa fa-play" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="video-info">
                                        <div className="user-info pull-left">
                                            <a href="#">
                                                <img src="img/person.png" alt=""/>
                                                <div className="username">Serpukin</div>
                                            </a>
                                        </div>
                                        <div className="likes pull-left">
                                            <a href="#">
                                                <i className="fa fa-heart-o" aria-hidden="true"></i>125</a>
                                        </div>
                                        <div className="time-from pull-right">1 hr</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

const Rightcontent = React.createClass({
    render: function() {
        return (

            <div className="rightcontent col-md-4">
                <div className="simillar-questions">
                    <h2>Simillar questions</h2>
                    <div className="simillar-question">
                        <a href="#">
                            <div className="thumb">
                                <img src="img/thumb.jpg" alt=""></img>
                            </div>
                        </a>
                        <div className="question-info">
                            <h3>Home Audio Recording For Everyone ?</h3>
                            <div className="views">123, 825 views</div>
                            <a href="#" className="author">
                                <img src="img/person.png" alt=""/>
                                Jackson Garner
                            </a>
                        </div>

                    </div>
                    <div className="simillar-question">
                        <a href="#">
                            <div className="thumb">
                                <img src="img/thumb.jpg" alt=""></img>
                            </div>
                        </a>
                        <div className="question-info">
                            <h3>Home Audio Recording For Everyone ?</h3>
                            <div className="views">123, 825 views</div>
                            <a href="#" className="author">
                                <img src="img/person.png" alt=""/>
                                Jackson Garner
                            </a>
                        </div>

                    </div>
                    <div className="simillar-question">
                        <a href="#">
                            <div className="thumb">
                                <img src="img/thumb.jpg" alt=""></img>
                            </div>
                        </a>
                        <div className="question-info">
                            <h3>Home Audio Recording For Everyone ?</h3>
                            <div className="views">123, 825 views</div>
                            <a href="#" className="author">
                                <img src="img/person.png" alt=""/>
                                Jackson Garner
                            </a>
                        </div>

                    </div>
                    <div className="simillar-question">
                        <a href="#">
                            <div className="thumb">
                                <img src="img/thumb.jpg" alt=""></img>
                            </div>
                        </a>
                        <div className="question-info">
                            <h3>Home Audio Recording For Everyone ?</h3>
                            <div className="views">123, 825 views</div>
                            <a href="#" className="author">
                                <img src="img/person.png" alt=""/>
                                Jackson Garner
                            </a>
                        </div>

                    </div>
                    <a href="#" className="more-questions">More questions</a>
                </div>
            </div>

        );
    }
});

const Maincontent = React.createClass({
    render: function() {
        return (
            <div className="container maincontent uk-grid data-uk-grid-margin">
                <Leftcontent/>
                <Rightcontent/>
            </div>
        );
    }
});

const Footer = React.createClass({
    render: function() {
        return (
            <footer className="container">
                <div className="row">
                    <div className="logo col-md-2">
                        <div>Eskimo</div>
                        <div>
                            <p>ask</p>
                            <p>me</p>
                            <p>more</p>
                        </div>
                    </div>
                    <ul className="bottom-menu col-md-6">
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">About US</a>
                        </li>
                        <li>
                            <a href="#">Press</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                    <div className="copyright col-md-4 pull-right">Copyright © 2016, Escimo. All rights reserved.</div>
                </div>

            </footer>
        )
    }
});

const App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <hr/>
                <Maincontent/>
                <hr/>
                <Footer/>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>, document.getElementsByTagName('body')[0]);

// $(function() {
//     $('.video-box .video .side-left').on('click', function() {
//         console.log('video left');
//     })
//     $('.video-box .video .side-right').on('click', function() {
//         console.log('video right');
//     })
//
//     let loading = false;
//     $(window).scroll(function() {
//         if ((($(window).scrollTop() + $(window).height()) + 250) >= $(document).height()) {
//             console.log('load');
//             if (loading == false) {
//                 loading = true;
//                 $('#loadingbar').css("display", "block");
//                 $.get("video-list.json", function(loaded) {
//
//                     $('.video-answwers').append('<div class="video-box col-md-6"><iframe class="visible" width="100%" height="400px" src="https://www.youtube.com/embed/5bEFE6Mw-fM?controls=0" frameborder="0" allowfullscreen></iframe></div>' +
//                         '<div class="video-box col-md-6"><iframe class="visible" width="100%" height="400px" src="https://www.youtube.com/embed/5bEFE6Mw-fM?controls=0" frameborder="0" allowfullscreen></iframe></div>');
//                     $('#loaded_max').val(parseInt($('#loaded_max').val()) + 50);
//                     $('#loadingbar').css("display", "none");
//                     loading = false;
//                 });
//             }
//         }
//     });
//
//     $('#loaded_max').val(50);
//
// })
