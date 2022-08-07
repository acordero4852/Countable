import React from "react";
import "./ProfilePage.css";

function ProfilePage() {
    return (
        <div className="content">
            <div class="header">
                <div class="header__left">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                    <div class="header__search">
                        <i class="material-icons"> search </i>
                        <input type="text" />
                    </div>
                </div>

                <div class="header__right">
                    <div class="headerOption">
                        <i class="material-icons headerOption__icon"> home </i>
                        <h3>Home</h3>
                    </div>
                    <div class="headerOption">
                        <i class="material-icons headerOption__icon"> supervisor_account </i>
                        <h3>My Network</h3>
                    </div>
                    <div class="headerOption">
                        <i class="material-icons headerOption__icon"> business_center </i>
                        <h3>Jobs</h3>
                    </div>
                    <div class="headerOption">
                        <i class="material-icons headerOption__icon"> chat </i>
                        <h3>Messaging</h3>
                    </div>
                    <div class="headerOption">
                        <i class="material-icons headerOption__icon"> notifications </i>
                        <h3>Notifications</h3>
                    </div>
                    <div class="headerOption">
                        <i class="material-icons headerOption__icon"> account_circle </i>
                        <h3>Me</h3>
                    </div>
                </div>
            </div>
            
            <div class="body__main">

                <div class="sidebar">
                    <div class="sidebar__top">
                        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080" alt="" />
                        <i class="material-icons sidebar__topAvatar"> account_circle </i>
                        <h2>Somanath Goudar</h2>
                        <h4>somugowda8050@gmail.com</h4>
                    </div>

                    <div class="sidebar__stats">
                        <div class="sidebar__stat">
                            <p>Who Viewed You</p>
                            <p class="sidebar__statNumber">2,453</p>
                        </div>
                        <div class="sidebar__stat">
                            <p>Views on post</p>
                            <p class="sidebar__statNumber">2,650</p>
                        </div>
                    </div>

                    <div class="sidebar__bottom">
                        <p>Recent</p>
                        <div class="sidebar__recentItem">
                            <span class="sidebar__hash">#</span>
                            <p>reactjs</p>
                        </div>
                        <div class="sidebar__recentItem">
                            <span class="sidebar__hash">#</span>
                            <p>programming</p>
                        </div>
                        <div class="sidebar__recentItem">
                            <span class="sidebar__hash">#</span>
                            <p>softwareengineering</p>
                        </div>
                        <div class="sidebar__recentItem">
                            <span class="sidebar__hash">#</span>
                            <p>design</p>
                        </div>
                        <div class="sidebar__recentItem">
                            <span class="sidebar__hash">#</span>
                            <p>developer</p>
                        </div>
                    </div>
                </div>
                <div class="feed">
                    <div class="feed__inputContainer">
                        <div class="feed__input">
                            <i class="material-icons"> create </i>
                            <form>
                                <input type="text" />
                                <button type="submit">Send</button>
                            </form>
                        </div>

                        <div class="feed__inputOptions">
                            <div class="inputOption">
                                <i style={{ color: "#70b5f9" }} class="material-icons"> insert_photo </i>
                                <h4>Photo</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "#e7a33e" }} class="material-icons"> subscriptions </i>
                                <h4>Video</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "#c0cbcd" }} class="material-icons"> event_note </i>
                                <h4>Event</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "#7fc15e" }} class="material-icons"> calendar_view_day </i>
                                <h4>Write Article</h4>
                            </div>
                        </div>
                    </div>

                    <div class="post">
                        <div class="post__header">
                            <i class="material-icons sidebar__topAvatar"> account_circle </i>
                            <div class="post__info">
                                <h2>Somanath Goudar</h2>
                                <p>Job Description</p>
                            </div>
                        </div>

                        <div class="post__body">
                            <p>Message here</p>
                        </div>

                        <div class="feed__inputOptions">
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> thumb_up </i>
                                <h4>Like</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> comment </i>
                                <h4>Comment</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> share </i>
                                <h4>Share</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> send </i>
                                <h4>Send</h4>
                            </div>
                        </div>
                    </div>

                    <div class="post">
                        <div class="post__header">
                            <i class="material-icons sidebar__topAvatar"> account_circle </i>
                            <div class="post__info">
                                <h2>Somanath Goudar</h2>
                                <p>Job Description</p>
                            </div>
                        </div>

                        <div class="post__body">
                            <p>Message here</p>
                        </div>

                        <div class="feed__inputOptions">
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> thumb_up </i>
                                <h4>Like</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> comment </i>
                                <h4>Comment</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> share </i>
                                <h4>Share</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> send </i>
                                <h4>Send</h4>
                            </div>
                        </div>
                    </div>

                    <div class="post">
                        <div class="post__header">
                            <i class="material-icons sidebar__topAvatar"> account_circle </i>
                            <div class="post__info">
                                <h2>Somanath Goudar</h2>
                                <p>Job Description</p>
                            </div>
                        </div>

                        <div class="post__body">
                            <p>Message here</p>
                        </div>

                        <div class="feed__inputOptions">
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> thumb_up </i>
                                <h4>Like</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> comment </i>
                                <h4>Comment</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> share </i>
                                <h4>Share</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> send </i>
                                <h4>Send</h4>
                            </div>
                        </div>
                    </div>

                    <div class="post">
                        <div class="post__header">
                            <i class="material-icons sidebar__topAvatar"> account_circle </i>
                            <div class="post__info">
                                <h2>Somanath Goudar</h2>
                                <p>Job Description</p>
                            </div>
                        </div>

                        <div class="post__body">
                            <p>Message here</p>
                        </div>

                        <div class="feed__inputOptions">
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> thumb_up </i>
                                <h4>Like</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> comment </i>
                                <h4>Comment</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> share </i>
                                <h4>Share</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> send </i>
                                <h4>Send</h4>
                            </div>
                        </div>
                    </div>

                    <div class="post">
                        <div class="post__header">
                            <i class="material-icons sidebar__topAvatar"> account_circle </i>
                            <div class="post__info">
                                <h2>Somanath Goudar</h2>
                                <p>Job Description</p>
                            </div>
                        </div>

                        <div class="post__body">
                            <p>Message here</p>
                        </div>

                        <div class="feed__inputOptions">
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> thumb_up </i>
                                <h4>Like</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> comment </i>
                                <h4>Comment</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> share </i>
                                <h4>Share</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> send </i>
                                <h4>Send</h4>
                            </div>
                        </div>
                    </div>

                    <div class="post">
                        <div class="post__header">
                            <i class="material-icons sidebar__topAvatar"> account_circle </i>
                            <div class="post__info">
                                <h2>Somanath Goudar</h2>
                                <p>Job Description</p>
                            </div>
                        </div>

                        <div class="post__body">
                            <p>Message here</p>
                        </div>

                        <div class="feed__inputOptions">
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> thumb_up </i>
                                <h4>Like</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> comment </i>
                                <h4>Comment</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> share </i>
                                <h4>Share</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> send </i>
                                <h4>Send</h4>
                            </div>
                        </div>
                    </div>

                    <div class="post">
                        <div class="post__header">
                            <i class="material-icons sidebar__topAvatar"> account_circle </i>
                            <div class="post__info">
                                <h2>Somanath Goudar</h2>
                                <p>Job Description</p>
                            </div>
                        </div>

                        <div class="post__body">
                            <p>Message here</p>
                        </div>

                        <div class="feed__inputOptions">
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> thumb_up </i>
                                <h4>Like</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> comment </i>
                                <h4>Comment</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> share </i>
                                <h4>Share</h4>
                            </div>
                            <div class="inputOption">
                                <i style={{ color: "gray" }} class="material-icons"> send </i>
                                <h4>Send</h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="widgets">
                    <div class="widgets__header">
                        <h2>LinkedIn Clone</h2>
                        <i class="material-icons"> info </i>
                    </div>
                    <div class="widgets__article">
                        <div class="widgets__articleLeft">
                            <i class="material-icons"> fiber_manual_record </i>
                        </div>
                        <div class="widgets__articleRight">
                            <h4>Coding LinkedIn Clone</h4>
                            <p>Top news - 4500 readers</p>
                        </div>
                    </div>

                    <div class="widgets__article">
                        <div class="widgets__articleLeft">
                            <i class="material-icons"> fiber_manual_record </i>
                        </div>
                        <div class="widgets__articleRight">
                            <h4>Coding LinkedIn Clone</h4>
                            <p>Top news - 4500 readers</p>
                        </div>
                    </div>

                    <div class="widgets__article">
                        <div class="widgets__articleLeft">
                            <i class="material-icons"> fiber_manual_record </i>
                        </div>
                        <div class="widgets__articleRight">
                            <h4>Coding LinkedIn Clone</h4>
                            <p>Top news - 4500 readers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;