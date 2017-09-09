let data = [
    {
        "id": 1,
        "likes": 0,
        "name": "Semenovich",
        "question": 'How to make this dessert ?',
        "tags": [
            "saf", "dfdf"
        ],
        "link": "https://www.youtube.com/embed/DkaUsBwe0fo",
        "thumb": "http://img.youtube.com/vi/DkaUsBwe0fo/0.jpg"
    }, {
        "id": 2,
        "likes": 3,
        "name": "Semenovich",
        "question": 'How to make this dessert ?',
        "tags": ["vbv", "hjjk", "dfdf"],
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

// Функция-редьюсер
var userReducer = function(state, action) {
    if (state === undefined) {
        state = [];
    }
    if (action.type === 'ADD_USER') {
        state.push(action.user);
    }
    return state;
}

// Создание хранилища с передачей редьюсера
var store = Redux.createStore(userReducer);

/* Отправка первого экшена, чтобы выразить намерение изменить состояние */
store.dispatch({
    type: 'ADD_USER',
    user: {
        name: 'Dan'
    }
});

const Tag = React.createClass({
    render: function() {
        let tag = this.props.data;
        return (
            <a href="#">#{tag}</a>
        )
    }
});

const FeedItem = React.createClass({
    render: function() {
        let item = this.props.data;
        return (
            <div className="video-box">
                <div className="video">
                    <iframe className="visible" width="729px" height="410px" src={item.link} frameborder="0" allowfullscreen></iframe>
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
                        <div className="title">{item.question}</div>
                        <div className="name-and-views">
                            <a href="#">{item.name}</a>
                            <p>921, 000 views</p>
                        </div>
                    </div>

                    <button className="btn video-answer-button">Answer</button>
                </div>
                <div className="video-tags row">
                    <div className="tags-and-more pull-left">
                        <div className="tags">
                            <Tags data={item.tags}/>
                        </div>
                        <a href="#">
                            <div className="video-show-more">show more</div>
                        </a>
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
        )
    }
});

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

const FeedItems = React.createClass({
    render: function() {
        let data = this.props.data;
        let itemsTemplate;
        if (data.length > 0) {
            itemsTemplate = data.map(function(item, index) {
                return (<FeedItem data={item}/>)
            })

        } else {
            itemTemplate = ''
        }

        return (
            <div className="video-playlist">
                {itemsTemplate}
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

const Profile = React.createClass({
    render: function() {
        return (
            <div className="profile col-md-4">
                <a href="#">
                    <i className="fa fa-crosshairs" aria-hidden="true"></i>
                </a>
                <a href="#">
                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                </a>
                <a href="#"><img src="img/person.png" alt=""/></a>
            </div>
        )
    }
})

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
                    <Profile/>
                </header>
            </div>
        )
    }
});



const Leftcontent = React.createClass({
    render: function() {
        return (

            <div className="leftcontent col-md-8">
                    <FeedItems data = {data} />
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

$(function() {
    $('.video-box .video .side-left').on('click', function() {
        console.log('video left');
    })
    $('.video-box .video .side-right').on('click', function() {
        console.log('video right');
    })

    let loading = false;
    $(window).scroll(function() {
        if ((($(window).scrollTop() + $(window).height()) + 250) >= $(document).height()) {
            console.log('load');
            if (loading == false) {
                loading = true;
                $('#loadingbar').css("display", "block");
                $.get("video-list.json", function(loaded) {

                    $('.video-answwers').append('<div class="video-box col-md-6"><iframe class="visible" width="100%" height="400px" src="https://www.youtube.com/embed/5bEFE6Mw-fM?controls=0" frameborder="0" allowfullscreen></iframe></div>' +
                        '<div class="video-box col-md-6"><iframe class="visible" width="100%" height="400px" src="https://www.youtube.com/embed/5bEFE6Mw-fM?controls=0" frameborder="0" allowfullscreen></iframe></div>');
                    $('#loaded_max').val(parseInt($('#loaded_max').val()) + 50);
                    $('#loadingbar').css("display", "none");
                    loading = false;
                });
            }
        }
    });

    $('#loaded_max').val(50);

})
