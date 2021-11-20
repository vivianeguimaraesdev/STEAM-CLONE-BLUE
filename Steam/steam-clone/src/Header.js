import './Header.css';

function Header(){
    return (
        <header className="App-header">
        <header className="header-container">
        <div className="header">
        <div class="left-header">
            <img src="../images/greylogo.png" alt="">
        <div className="header-links">
            <a href="#">STORE</a>
            <a href="#">COMMUNITY</a>
            <a href="#">ABOUT</a>
            <a href="#">SUPPORT</a>
        </div>
    </div>
    <div className="small-header">
        <img src="" alt="">
    </div>
    <div className="right-header">
        <button type="button"><i className="fas fa-download"></i> Install Steam</button>
        <a href="#">login</a><a href="#">|</a>
        <a href="#"> language <i className="fas fa-sort-down"></i></a>
    </div>
    </div>
    </header>
    );
    }

export default Header;
